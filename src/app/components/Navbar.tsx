"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `relative text-[1.15rem] font-semibold tracking-wide px-6 py-3
     transition-all duration-300
     ${pathname === path
       ? "text-green-300 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-green-400"
       : "text-gray-200 hover:text-green-300 hover:scale-110"}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-9999
        bg-[rgba(10,15,10,0.82)]
        backdrop-blur-xl
        border-b border-green-500/25
        shadow-[0_0_25px_rgba(0,255,160,0.25)]
        transition-all duration-500
      "
    >
      <div className="max-w-7xl mx-auto relative flex items-center justify-between px-10 py-3">
        {/* Brand */}
        <Link
          href="/"
          className="text-3xl font-bold text-green-400 hover:text-green-300 
                     drop-shadow-[0_0_12px_rgba(0,255,160,0.5)] transition-all"
        >
          Allen<span className="text-gray-300">.dev</span>
        </Link>

        {/* Centered nav links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-14">
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
