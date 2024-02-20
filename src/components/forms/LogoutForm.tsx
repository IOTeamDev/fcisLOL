"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutForm = () => {
  const router = useRouter();
  return (
    <div className="border-2  bg-white  p-6 rounded-lg flex flex-col gap-5 dark:bg-black">
      <h2>Please confirm that you want to log out</h2>
      <Button
        variant={"destructive"}
        onClick={() => {
          signOut();
          router.push("/");
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export default LogoutForm;
