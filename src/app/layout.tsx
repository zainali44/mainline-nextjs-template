import { Inter } from "next/font/google";
import localFont from "next/font/local";

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
    default: "Mind Carft - Your Personal Growth Companion",
    template: "%s | Mind Carft",
  },
  description:
    "Mind Carft is your personal growth companion, designed to strengthen your mind and elevate your well-being every day. Powered by AI with Thelium's proven methods.",
  keywords: [
    "personal growth",
    "mental wellness",
    "AI-powered",
    "mindfulness",
    "mental strength",
    "daily exercises",
    "Thelium",
    "mind training",
    "self-improvement",
    "emotional balance",
    "focus",
    "clarity",
  ],
  authors: [{ name: "Mind Carft" }],
  creator: "Mind Carft",
  publisher: "Mind Carft",
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
    title: "Mind Carft - Your Personal Growth Companion",
    description:
      "Mind Carft is your personal growth companion, designed to strengthen your mind and elevate your well-being every day. Powered by AI with Thelium's proven methods.",
    siteName: "Mind Carft",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mind Carft - Your Personal Growth Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind Carft - Your Personal Growth Companion",
    description:
      "Mind Carft is your personal growth companion, designed to strengthen your mind and elevate your well-being every day. Powered by AI with Thelium's proven methods.",
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
    <html lang="en">
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <StyleGlideProvider />
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
