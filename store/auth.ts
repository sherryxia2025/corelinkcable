import type { User } from "better-auth/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { authClient } from "@/lib/auth-client";

interface AuthState {
  // User state
  user: User | null;
  isAuthenticated: boolean;

  // Auth actions
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuth = create<AuthState>()(
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,

      signOut: async () => {
        try {
          await authClient.signOut();
          set({ user: null, isAuthenticated: false });
          location.reload();
        } catch (error) {
          console.error("Sign out error:", error);
          throw error;
        }
      },

      initialize: async () => {
        const session = await authClient.getSession();

        const user = session?.data?.user || null;

        set({
          user,
          isAuthenticated: true,
        });
      },
    }),
    {
      name: "auth-store",
    },
  ),
);
