"use client";
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
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { createVideo } from "@/src/lib/db/videos/createVideo";
import toast from "react-hot-toast";
import VideoForm from "@/src/components/forms/VideoForm";

interface Props {
  subjectId: number;
  user: any;
}

const AddVideoButton = ({ subjectId, user }: Props) => {
  const router = useRouter();
  const buttonRef = useRef(null);

  const onSubmit = async (data: any) => {
    const videoData = {
      ...data,
      user: user.id,
      subjectId: subjectId,
    };
    try {
      await createVideo(videoData, user.role);
      if (buttonRef.current) {
        const middle: any = buttonRef.current;
        middle.click();
      }
      toast.success("Video added and is waiting for approval! 🎉");
    } catch (error) {
      toast.error("An error has occurred, Probably invalid video URL");
      throw error;
    }
  };
  if (!user) {
    return (
      <Button
        onClick={() => {
          router.push("/login");
        }}
      >
        + Add Video
      </Button>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>+ Add Video</Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Add Video 🎥</SheetTitle>
          <SheetDescription>
            🎉 Welcome to our video adding form ✨! We're excited to welcome you
            to share your content with us. Kindly complete the following details
            to upload your video: 📹
          </SheetDescription>
        </SheetHeader>
        <VideoForm handleFormSubmit={onSubmit} />
        <SheetClose ref={buttonRef}></SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default AddVideoButton;
