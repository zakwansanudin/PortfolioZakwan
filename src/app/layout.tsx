import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zakwan Portfolio",
  description: "Zakwan Sanudin is a full-stack developer building useful digital products for people and communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
