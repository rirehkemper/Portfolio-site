"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `px-5 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
      pathname === path
        ? "text-orange-400 border-b-2 border-orange-400"
        : "text-gray-200 hover:text-green-300 hover:border-b hover:border-green-400"
    }`;

  return (
    <nav
      style={{ position: "fixed", top: 0, left: 0, right: 0 }}
      className="z-50 backdrop-blur-md border-b border-green-500/20
                 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80
                 shadow-[0_0_10px_rgba(0,255,128,0.15)]"
    >
      <div className="max-w-7xl mx-auto relative flex items-center justify-between px-8 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-green-400 font-semibold text-xl hover:text-green-300 transition"
        >
          Allen<span className="text-gray-300">.dev</span>
        </Link>

        {/* Centered Nav */}
        <div className="absolute left-1/2 -translate-x-1/2 flex space-x-12">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClasses(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
