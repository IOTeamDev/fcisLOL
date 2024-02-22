"use client";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { updateVideo } from "@/src/lib/db/videos/updateVideo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import EditVideoForm from "./EditVideoForm";
import VideoApprovalButto

const videoApprovalForm = ({
  targetVideo,
  targetSubject,
}: {
  targetVideo: any;
  targetSubject: any;
}) => {
  const router = useRouter();
  const buttonRef = useRef(null);
  const handleEditVideo = async (data: any) => {
    try {
      await updateVideo(targetVideo.id, data);
      toast.success("video Updated Successfully!");
      if (buttonRef.current) {
        const middle: any = buttonRef.current;
        middle.click();
      }
      setTimeout(() => {
        router.refresh();
      }, 1000);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <div className="flex flex-col justify-between space-y-2 px-4">
      <div className="pb-6 text-center ">
        <h1 className="text-4xl">{targetVideo?.title}</h1>
      </div>
      <div className="flex max-[1100px]:flex-col justify-around">
        {/* Image */}
        <img
          alt="Thumbnail"
          className="rounded-xl w-1/2 max-[1100px]:w-full"
          height={169}
          src={targetVideo?.thumbnail ?? "/thumbnail.webp"}
          style={{
            aspectRatio: "300/169",
            objectFit: "cover",
          }}
          width={300}
        />
        <div className="flex flex-col items-center w-1/2 max-[1100px]:w-full p-4">
          <div className="h-4/5 flex flex-col items-center justify-between">
            {/* Details */}
            <Card className="w-full m-2">
              <Link href={targetVideo?.url} target="_blank">
                <p className="p-4 m-1">{targetVideo?.url}</p>
              </Link>
            </Card>
            {targetVideo?.description ? (
              <Card className="w-full m-2">
                <p className="p-4 m-1">{targetVideo?.description}</p>
              </Card>
            ) : null}

            {/* Buttons */}
            <div className="flex items-center">
              <Card>
                <p className="p-2">Subject: {targetSubject.name}</p>
              </Card>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="link" className="underline">
                    Edit Video
                  </Button>
                </SheetTrigger>
                <SheetContent side={"right"}>
                  <SheetHeader>
                    <SheetTitle className="text-center">Edit Vido</SheetTitle>
                    <SheetDescription>
                      Edit Video before approval
                    </SheetDescription>
                  </SheetHeader>
                  <EditVideoForm
                    handleEditVideo={handleEditVideo}
                    video={targetVideo}
                  />
                  <SheetClose ref={buttonRef}></SheetClose>
                </SheetContent>
              </Sheet>
            </div>
            <div className="w-full flex justify-around m-4">
              <VideoApprovalButton decision="Approve" targetVideo={targetVideo} />
              <VideoApprovalButton decision="Reject" targetVideo={targetVideo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default videoApprovalForm;
