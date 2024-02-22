"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { updateVideo } from "@/src/lib/db/videos/updateVideo";
import toast from "react-hot-toast";

const VideoApprovalButton = ({
  decision,
  targetVideo,
}: {
  decision: "Approve" | "Reject";
  targetVideo: any;
}) => {
  const router = useRouter();
  
  const handleClick = async (decision: any) => {
    try {
      switch (decision.decision) {
        case "Approve":
          await updateVideo(targetVideo.id, { status: "APPROVED" });
          toast.success("Video Approved Successfully!");
          setTimeout(() => {
            router.push("/admin/pending");
            router.refresh();
          }, 1000);
          break;
        case "Reject":
          await updateVideo(targetVideo.id, { status: "REJECTED" });
          toast.success("Video Rejected Successfully!");
          setTimeout(() => {
            router.push("/admin/pending");
            router.refresh();
          }, 1000);
          break;
        default:
          break;
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-1/2 mx-2" variant={"default"}>
          {decision}
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle className="text-center">
            Are you sure you want to {decision}?
          </SheetTitle>
        </SheetHeader>
        <div className="min-h-[50vh] flex justify-center items-center gap-4 flex-col">
          <Button
            className="w-full"
            variant={decision === "Approve" ? "default" : "destructive"}
            onClick={() => handleClick({ decision })}
          >
            {decision}
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

export default VideoApprovalButton;
