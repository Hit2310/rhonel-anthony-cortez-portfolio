import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rhonel Anthony L. Cortez | Software Engineer Portfolio",
  description:
    "Portfolio for Rhonel Anthony L. Cortez, a computer science graduate and freelance developer building full-stack web and mobile applications, from production client systems to AI-assisted prototypes.",
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
