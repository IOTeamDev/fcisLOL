"use client";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { updateFile } from "@/src/lib/db/files/updateFile";
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
import EditFileForm from "./EditFileForm";

const fileApprovalForm = ({
  targetFile,
  targetSubject,
}: {
  targetFile: any;
  targetSubject: any;
}) => {
  const router = useRouter();
  const buttonRef = useRef(null);

  const handleApprove = async () => {
    try {
      await updateFile(targetFile.id, { status: "APPROVED" });
      toast.success("file Approved Successfully!");
      setTimeout(() => {
        router.push("/admin/pending");
        router.refresh();
      }, 1000);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  const handleReject = async () => {
    try {
      await updateFile(targetFile.id, { status: "REJECTED" });
      toast.success("file Rejected Successfully!");
      setTimeout(() => {
        router.push("/admin/pending");
        router.refresh();
      }, 1000);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  const handleEditFile = async (data: any) => {
    try {
      await updateFile(targetFile.id, data);
      toast.success("file Updated Successfully!");
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
        <h1 className="text-4xl">{targetFile?.title}</h1>
      </div>
      <div className="flex max-[1100px]:flex-col justify-around">
        {/* Image */}
        <img
          alt="Thumbnail"
          className="rounded-xl w-1/2 max-[1100px]:w-full"
          height={169}
          src={targetFile?.thumbnail ?? "/thumbnail.webp"}
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
              <Link href={targetFile?.url} target="_blank">
                <p className="p-4 m-1">{targetFile?.url}</p>
              </Link>
            </Card>
            {targetFile?.description ? (
              <Card className="w-full m-2">
                <p className="p-4 m-1">{targetFile?.description}</p>
              </Card>
            ) : null}

            {/* Buttons */}
            <div className="flex items-center">
              <Card>
                <p className="p-2">Subject: {targetSubject.name}</p>
              </Card>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="link">Edit File</Button>
                </SheetTrigger>
                <SheetContent side={"right"}>
                  <SheetHeader>
                    <SheetTitle>Edit File</SheetTitle>
                    <SheetDescription>
                      Edit File before approval
                    </SheetDescription>
                  </SheetHeader>
                  <EditFileForm
                    handleEditFile={handleEditFile}
                    file={targetFile}
                  />
                  {/* <AccountSettings user={user}
										handleEditAccount={handleEditAccount}
									/> */}
                  <SheetClose ref={buttonRef}></SheetClose>
                </SheetContent>
              </Sheet>
            </div>
            <div className="w-full flex justify-around m-4">
              <Button
                className="w-1/2 mx-2"
                variant={"default"}
                onClick={async () => await handleApprove()}
              >
                Approve
              </Button>
              <Button
                className="w-1/2 mx-2"
                variant={"destructive"}
                onClick={async () => await handleReject()}
              >
                Reject
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fileApprovalForm;
