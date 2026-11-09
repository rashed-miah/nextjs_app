"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();
  const isLogged = false;
  const handleAddress = () => {
    if (isLogged) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1 className="text-2xl">About page</h1>
      <Link href="/about/address">
        <p>address page</p>
      </Link>
      <button type="button" onClick={handleAddress}>
        Address page
      </button>
    </div>
  );
};

export default AboutPage;
