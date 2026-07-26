import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

// https://www.better-auth.com/docs/integrations/next
export const authClient = createAuthClient({
  // Use same-origin by default to avoid cross-origin issues
  // Leaving baseURL undefined makes the client use window.location.origin
  plugins: [adminClient()],
});
