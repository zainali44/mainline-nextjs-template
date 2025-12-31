import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Mindcraft - התוכנית השבועית לתשתית הפנימית",
    template: "%s | Mindcraft",
  },
  description:
    "עצב את מוחך. בנה מבנה חיים שמחזיק מעמד. Mindcraft הופך את הפרשה השבועית למערכת הפעלה מעשית לחיים המודרניים.",
  keywords: [
    "צמיחה אישית",
    "תשתית פנימית",
    "תוכנית שבועית",
    "מסגרת מנטלית",
    "תנ״ך",
    "חוכמה תנכית",
    "מבנה חיים",
    "גבולות",
    "קבלת החלטות",
    "שיפור עצמי",
    "בהירות מנטלית",
    "יצירת הרגלים",
  ],
  authors: [{ name: "Mindcraft" }],
  creator: "Mindcraft",
  publisher: "Mindcraft",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Mindcraft - התוכנית השבועית לתשתית הפנימית",
    description:
      "עצב את מוחך. בנה מבנה חיים שמחזיק מעמד. Mindcraft הופך את הפרשה השבועית למערכת הפעלה מעשית לחיים המודרניים.",
    siteName: "Mindcraft",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mindcraft - התוכנית השבועית לתשתית הפנימית",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindcraft - התוכנית השבועית לתשתית הפנימית",
    description:
      "עצב את מוחך. בנה מבנה חיים שמחזיק מעמד. Mindcraft הופך את הפרשה השבועית למערכת הפעלה מעשית לחיים המודרניים.",
    images: ["/og-image.jpg"],
    creator: "@mindcarft",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        <Script
          src="https://tweakcn.com/live-preview.min.js"
          strategy="afterInteractive"
        />
        <StyleGlideProvider />
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
