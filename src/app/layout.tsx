import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // Import your Navbar
import "./globals.css";

export const metadata: Metadata = {
  title: "Zakwan Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50">
        {/* Persistent Navbar */}
        <Navbar />

        {/* Dynamic page content */}
        <main className="flex-1">{children}</main>
        
        {/* Optional: You can also place a Footer here later */}
      </body>
    </html>
  );
}