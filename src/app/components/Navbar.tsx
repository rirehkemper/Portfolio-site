"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md transition-colors ${
      pathname === path
        ? "bg-orange-500 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <nav className="w-full bg-gray-900 flex items-center justify-between px-6 py-3 shadow-md fixed top-0 z-50">
      <div className="text-xl font-bold text-orange-400">Allen Rehkemper</div>

      <div className="flex gap-3">
        <Link href="/" className={linkClasses("/")}>Home</Link>
        <Link href="/projects" className={linkClasses("/projects")}>Projects</Link>
        <Link href="/games" className={linkClasses("/games")}>Games</Link>
        <Link href="/contract" className={linkClasses("/contract")}>Contract Work</Link>
        <Link href="/about" className={linkClasses("/about")}>About</Link>
        <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
      </div>
    </nav>
  );
}
