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
import toast from "react-hot-toast";
import { updateFile } from "@/src/lib/db/files/updateFile";

const FileApprovalButton = ({
  decision,
  targetFile,
}: {
  decision: "Approve" | "Reject";
  targetFile: any;
}) => {
  const router = useRouter();
  
  const handleClick = async (decision: any) => {
    try {
      switch (decision.decision) {
        case "Approve":
          await updateFile(targetFile.id, { status: "APPROVED" });
          toast.success("file Approved Successfully!");
          setTimeout(() => {
            router.push("/admin/pending");
            router.refresh();
          }, 1000);
          break;
        case "Reject":
          await updateFile(targetFile.id, { status: "REJECTED" });
          toast.success("file Rejected Successfully!");
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

export default FileApprovalButton;
