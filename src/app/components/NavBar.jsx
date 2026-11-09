"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  if (pathname.includes("dashboard")) {
    return null;
  }

  return (
    <div>
      <ul className="flex items-center justify-between max-w-11/12 m-auto p-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
