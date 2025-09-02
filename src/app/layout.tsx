import { Rubik } from "next/font/google";
import "./globals.css";import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hellaw - Home",
  description: "...",
};


const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
