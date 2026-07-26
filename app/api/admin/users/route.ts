import { randomUUID } from "node:crypto";
import { hashPassword } from "better-auth/crypto";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma";
import type { Prisma } from "@/prisma/generated/prisma";

const createUserSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  password: z.string().min(12).max(128),
});

const allowedSortFields = ["createdAt", "updatedAt", "name", "email"] as const;
type UserSortField = (typeof allowedSortFields)[number];

function isUserSortField(value: string): value is UserSortField {
  return allowedSortFields.includes(value as UserSortField);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(
      1,
      Number.parseInt(searchParams.get("page") || "1", 10),
    );
    const limit = Math.min(
      100,
      Math.max(1, Number.parseInt(searchParams.get("limit") || "10", 10)),
    );
    const search = searchParams.get("search") || "";
    const role = searchParams.get("role") || "";
    const status = searchParams.get("status") || "";
    const requestedSortBy = searchParams.get("sortBy") || "createdAt";
    const sortBy = isUserSortField(requestedSortBy)
      ? requestedSortBy
      : "createdAt";
    const sortOrder = searchParams.get("sortOrder") === "asc" ? "asc" : "desc";

    const skip = (page - 1) * limit;

    // Build where clause
    const where: Prisma.UserWhereInput = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    if (status) {
      if (status === "Active") {
        where.emailVerified = true;
      } else if (status === "Pending") {
        where.emailVerified = false;
      }
    }

    if (role) {
      where.role = role;
    }

    const [users, total, totalUsers, verifiedUsers, unverifiedUsers, newUsers] =
      await Promise.all([
        prisma.user.findMany({
          where,
          skip,
          take: limit,
          orderBy: { [sortBy]: sortOrder },
          include: {
            sessions: {
              select: {
                createdAt: true,
                ipAddress: true,
                userAgent: true,
              },
              orderBy: { createdAt: "desc" },
              take: 1,
            },
            accounts: {
              select: {
                providerId: true,
                createdAt: true,
              },
            },
          },
        }),
        prisma.user.count({ where }),
        prisma.user.count(),
        prisma.user.count({
          where: { emailVerified: true },
        }),
        prisma.user.count({
          where: { emailVerified: false },
        }),
        prisma.user.count({
          where: {
            createdAt: {
              gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
            },
          },
        }),
      ]);

    const transformedUsers = users.map((user) => {
      const providerId = user.accounts.some(
        (account) => account.providerId === "credential",
      )
        ? "credential"
        : user.accounts[0]?.providerId || "credential";

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        role: user.role || "user",
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        lastLogin: user.sessions[0]?.createdAt || null,
        provider: providerId,
        providerId,
        status: user.emailVerified ? "Active" : "Pending",
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        users: transformedUsers,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
        stats: {
          totalUsers,
          verifiedUsers,
          unverifiedUsers,
          newUsers,
        },
      },
    });
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsed = createUserSchema.safeParse(await request.json());

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            parsed.error.issues[0]?.message ||
            "Please check the account information",
        },
        { status: 400 },
      );
    }

    const email = parsed.data.email.toLowerCase();
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "An account with this email already exists" },
        { status: 409 },
      );
    }

    const password = await hashPassword(parsed.data.password);
    const user = await prisma.$transaction(async (transaction) => {
      const createdUser = await transaction.user.create({
        data: {
          id: randomUUID(),
          name: parsed.data.name,
          email,
          emailVerified: true,
          role: "admin",
        },
      });

      await transaction.account.create({
        data: {
          id: randomUUID(),
          accountId: createdUser.id,
          providerId: "credential",
          userId: createdUser.id,
          password,
        },
      });

      return createdUser;
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 },
    );
  }
}
