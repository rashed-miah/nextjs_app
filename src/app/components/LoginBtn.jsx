"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginBtn = () => {
  return (
    <div>
      <button type="button" onClick={() => signIn()}>
        Login
      </button>
    </div>
  );
};

export default LoginBtn;
