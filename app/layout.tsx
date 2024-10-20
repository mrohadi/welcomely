import type { Metadata } from "next";

import "./globals.css";
import PrelineScript from "components/PrelineScript";
import Navbar from "components/Navbar";

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
        <main className="relative overflow-hidden">{children}</main>
      </body>

      <PrelineScript />
    </html>
  );
}
