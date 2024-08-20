import type { Metadata } from "next";

import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Welcomely",
  description: "Building visitor management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className="relative overflow-hidden container max-w-[90rem] mx-auto px-4">
          {children}
        </main>
      </body>

      <PrelineScript />
    </html>
  );
}
