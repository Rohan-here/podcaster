import { SignIn, SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpScreen = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignUp />
    </div>
  );
};

export default SignUpScreen;