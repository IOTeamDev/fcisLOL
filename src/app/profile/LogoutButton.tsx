"use client";
import React, { useRef } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"link"}>Log Out</Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle className="text-center">Log out of your account? 🚪</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="min-h-[50vh] flex justify-center items-center gap-4 flex-col">
          <Button
            className="w-full"
            variant={"destructive"}
            onClick={() => {
              signOut();
              router.push("/");
            }}
          >
            Log out
          </Button>
          <SheetClose asChild>
            <Button className="w-full" variant={"secondary"}>
              Cancel
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LogoutButton;
