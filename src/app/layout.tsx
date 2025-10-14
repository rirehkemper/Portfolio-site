import Navbar from "./components/Navbar";
import Background from "./components/Background";
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
  <body className="bg-black text-gray-100 pt-24">
    <Background />
    <Navbar />
    {children}
  </body>
</html>
  );
}