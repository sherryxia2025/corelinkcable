import { randomUUID, timingSafeEqual } from "node:crypto";
import { hashPassword } from "better-auth/crypto";
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export const dynamic = "force-dynamic";

function secretsMatch(provided: string | null, expected: string): boolean {
  if (!provided) return false;

  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);

  return (
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer)
  );
}

export async function POST(request: Request) {
  const bootstrapKey = process.env.AUTH_BOOTSTRAP_KEY?.trim();
  const initialPassword = process.env.ADMIN_INITIAL_PASSWORD?.trim();

  if (!bootstrapKey || !initialPassword) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!secretsMatch(request.headers.get("x-bootstrap-key"), bootstrapKey)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = process.env.ADMIN_EMAILS?.split(",")
    .map((value) => value.trim().toLowerCase())
    .find(Boolean);

  if (!email) {
    return NextResponse.json(
      { error: "No administrator email is configured" },
      { status: 503 },
    );
  }

  if (initialPassword.length < 12) {
    return NextResponse.json(
      { error: "The initial password must contain at least 12 characters" },
      { status: 503 },
    );
  }

  const password = await hashPassword(initialPassword);
  const result = await prisma.$transaction(async (transaction) => {
    const user = await transaction.user.upsert({
      where: { email },
      update: { role: "admin" },
      create: {
        id: randomUUID(),
        name: "CoreLinkCable Admin",
        email,
        emailVerified: true,
        role: "admin",
      },
    });

    const credential = await transaction.account.findFirst({
      where: {
        userId: user.id,
        providerId: "credential",
      },
    });

    if (credential) {
      await transaction.account.update({
        where: { id: credential.id },
        data: {
          accountId: user.id,
          password,
        },
      });
    } else {
      await transaction.account.create({
        data: {
          id: randomUUID(),
          accountId: user.id,
          providerId: "credential",
          userId: user.id,
          password,
        },
      });
    }

    return { email: user.email };
  });

  return NextResponse.json({
    success: true,
    email: result.email,
  });
}
