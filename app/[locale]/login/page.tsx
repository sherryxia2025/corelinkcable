"use client";

import { LockKeyhole, Mail } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { type FormEvent, useEffect, useState } from "react";
import { CoreLinkBrand } from "@/components/corelink-brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useAuth } from "@/store/auth";

export default function LoginPage() {
  const auth = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("auth");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const requestedCallback = searchParams.get("callbackURL");
  const callbackURL =
    requestedCallback?.startsWith("/") && !requestedCallback.startsWith("//")
      ? requestedCallback
      : "/admin";

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      router.replace(callbackURL);
    }
  }, [auth.isAuthenticated, auth.user, callbackURL, router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await authClient.signIn.email({
        email: email.trim(),
        password,
        rememberMe: true,
      });

      if (result.error) {
        setErrorMessage(result.error.message || t("invalidEmailOrPassword"));
        return;
      }

      await auth.initialize();
      router.replace(callbackURL);
      router.refresh();
    } catch {
      setErrorMessage(t("signInError"));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (auth.isAuthenticated && auth.user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <article
      className={cn(
        "min-h-screen w-full bg-[#F3F4F6] dark:bg-[#181818] transition-colors select-none",
      )}
    >
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-[480px]">
          <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_24px_80px_-28px_rgba(31,24,72,0.35)] dark:border-white/10 dark:bg-[#212121]">
            <div className="h-1.5 bg-gradient-to-r from-[#6048df] via-[#7765ff] to-[#9c75ff]" />
            <div className="p-8 sm:p-10">
              <div className="flex justify-center">
                <CoreLinkBrand />
              </div>

              <h1 className="mt-8 text-center text-3xl font-bold tracking-[-0.03em] text-[#151417] dark:text-white sm:text-4xl">
                {t("signIn")}
              </h1>
              <p className="text-center text-[#666666] dark:text-[#A0A0A0] mt-2">
                {t("signInDescription")}
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#888b95]" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="admin@corelinkcable.com"
                      className="h-12 rounded-lg border-black/10 bg-[#fafafa] pl-10 focus-visible:border-[#7765ff] focus-visible:ring-[#7765ff]/20 dark:border-white/10 dark:bg-white/5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">{t("password")}</Label>
                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#888b95]" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder={t("passwordPlaceholder")}
                      className="h-12 rounded-lg border-black/10 bg-[#fafafa] pl-10 focus-visible:border-[#7765ff] focus-visible:ring-[#7765ff]/20 dark:border-white/10 dark:bg-white/5"
                    />
                  </div>
                </div>

                {errorMessage ? (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300"
                  >
                    {errorMessage}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "h-12 w-full rounded-lg bg-[#7765ff] text-base font-semibold text-white",
                    "hover:bg-[#6554eb] focus-visible:ring-[#7765ff]/30",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner className="text-white" />
                      {t("signingIn")}
                    </>
                  ) : (
                    t("signIn")
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
