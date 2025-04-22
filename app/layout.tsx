import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { CursorLayout } from "@/components/cursor-layout";
import Footer from "@/components/footer";
import { PostHogProvider } from "@/components/posthog/providers";

const switzer = localFont({
  src: "../public/fonts/Switzer.woff2",
  variable: "--font-switzer",
});

const gambarino = localFont({
  src: "../public/fonts/Gambarino.woff2",
  variable: "--font-gambarino",
});

export const metadata: Metadata = {
  title: "Mahmoud M.",
  description:
    "a Software Engineering student at Concordia University based in Montreal, Quebec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${switzer.variable} ${gambarino.variable} antialiased`}>
        <CursorLayout />
        <PostHogProvider>{children}</PostHogProvider>
        <Footer />
      </body>
    </html>
  );
}
