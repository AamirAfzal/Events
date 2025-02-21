"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navbar__link} ${pathname === href} relative text-3xl`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
