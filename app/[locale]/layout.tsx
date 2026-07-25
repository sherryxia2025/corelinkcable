import { defineI18nUI } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Analytics from "@/components/analytics";
import { CrispChat } from "@/components/crisp";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n";
import { i18n } from "@/lib/i18n";
import { AuthProvider } from "@/providers/auth-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "../globals.css";

const ltSaeada = localFont({
  variable: "--font-lt-saeada",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-Hairline.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/lt-saeada/LTSaeada-ExtraBlack.otf",
      weight: "950",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://www.corelinkcable.com",
  ),
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME || "CoreLink Cable",
    template: "%s | CoreLink Cable",
  },
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "Optical fiber, cable, connectivity, optical components, and copper systems for critical network infrastructure.",
  openGraph: {
    title: "CoreLink Cable | Built for Every Critical Connection",
    description:
      "Optical fiber, cable, connectivity, optical components, and copper systems for critical network infrastructure.",
    url: "https://www.corelinkcable.com",
    siteName: "CoreLink Cable",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreLink Cable | Built for Every Critical Connection",
    description:
      "Optical fiber, cable, connectivity, optical components, and copper systems for critical network infrastructure.",
    images: ["/og.png"],
  },
};

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: "English",
    },
  },
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${ltSaeada.variable} antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <NextIntlClientProvider messages={messages}>
              <Analytics />
              <RootProvider i18n={provider(locale)}>{children}</RootProvider>
            </NextIntlClientProvider>
            <CrispChat />
          </AuthProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
