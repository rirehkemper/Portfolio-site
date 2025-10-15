// src/app/layout.tsx
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
export const metadata: Metadata = {
  title: "Allen Rehkemper | Portfolio",
  description: "Portfolio and professional showcase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Precompiled UnoCSS output */}
        <link rel="stylesheet" href="/unocss.css" />
        {/* Global CSS copied to public so Next won't run PostCSS on it */}
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body className="bg-black text-gray-100 pt-24 relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
