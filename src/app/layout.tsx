import Navbar from "./components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allen Rehkemper | Portfolio",
  description: "Portfolio and professional showcase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<html lang="en" suppressHydrationWarning>
  <head>
    <link rel="stylesheet" href="/tailwind.css" />
  </head>
  <body className="bg-gray-950 text-gray-100">{children}</body>
</html>
  );
}