import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rhonel Anthony L. Cortez | Software Engineer Portfolio",
  description:
    "Portfolio for Rhonel Anthony L. Cortez, a fresh computer science graduate focused on web, mobile, database, and AI-assisted software projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
