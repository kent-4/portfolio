import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Kent Daniel De Moreta - Full-Stack Developer",
  description:
    "Full-stack developer building systems across Java, Spring Boot, React, Next.js, and Python from database schemas to shipped interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-canvas text-ink antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
