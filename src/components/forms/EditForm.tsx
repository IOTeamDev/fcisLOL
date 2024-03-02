"use client";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";
import React from "react";
import { updateVideo } from "@/src/lib/db/videos/updateVideo";
import { updateFile } from "@/src/lib/db/files/updateFile";
import { updatelink } from "@/src/lib/db/link/updateLink";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { DeleteVideo } from "@/src/lib/db/videos/deleteVideo";
import { DeleteLink } from "@/src/lib/db/link/deleteLink";
import { DeleteFile } from "@/src/lib/db/files/deleteFile";

interface Props {
  type: string;
  id: string;
  initialValues: {
    type?: string;
    url: string;
    title: string;
    description?: string | null;
  };
}

const EditForm = ({ type, id, initialValues }: Props) => {
  const { register, handleSubmit, setValue } = useForm();

  // Set initial form values
  React.useEffect(() => {
    setValue("url", initialValues.url);
    setValue("title", initialValues.title);
    setValue("description", initialValues.description);
  }, [setValue, initialValues]);

  const router = useRouter();
  const onSubmit = async (data: any) => {
    delete data["type"];
    switch (type) {
      case "Video":
        await updateVideo(Number(id), data);
        toast.success("Video updated");
        setTimeout(() => {
          router.push(`/videos/${id}`);
        }, 1000);
        break;
      case "File":
        await updateFile(Number(id), data);
        toast.success("File updated");
        setTimeout(() => {
          router.push(`/files/${id}`);
        }, 1000);
        break;
      case "Link":
        await updatelink(Number(id), data);
        toast.success("Link updated");
        setTimeout(() => {
          router.push(`/links/${id}`);
        }, 1000);
        break;
      default:
        console.error("Invalid type");
    }
  };

  const handleDelete = async () => {
    switch (type) {
      case "Video":
        await DeleteVideo(Number(id));
        toast.success("Video deleted");
        setTimeout(() => {
          router.push("/");
        }, 1000);
        break;
      case "File":
        await DeleteFile(Number(id));
        toast.success("File deleted");
        setTimeout(() => {
          router.push("/");
        }, 1000);
        break;
      case "Link":
        await DeleteLink(Number(id));
        toast.success("Link deleted");
        setTimeout(() => {
          router.push("/");
        }, 1000);
        break;
      default:
        console.error("Invalid type");
    }
  };

  const DeleteConfirmationSheet = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-1/2 mx-2" variant={"ghost"}>
            Delete
          </Button>
        </SheetTrigger>
        <SheetContent side={"bottom"}>
          <SheetHeader>
            <SheetTitle className="text-center">
              Are you sure you want to delete?
            </SheetTitle>
          </SheetHeader>
          <div className="my-8 flex justify-center items-center gap-4 flex-col">
            <Button
              className="w-full"
              variant={"destructive"}
              onClick={() => handleDelete()}
            >
              Delete
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

  return (
    <div className="flex flex-col mt-4 gap-10 items-center">
      <form
        onSubmit={handleSubmit((data: any) => onSubmit(data))}
        className="flex flex-col mt-4 gap-10 items-center"
      >
        {type === "Link" && (
          <div className="w-full flex flex-col justify-center">
            <label htmlFor="type">Link Type:</label>
            <select
              id="type"
              className="rounded-md p-2"
              required
              {...register("type")}
            >
              <option value="OTHER">Select Link Type</option>
              <option value="YOUTUBE_PLAYLIST">Youtube Playlist</option>
              <option value="GOOGLE_DRIVE_FOLDER">Google Drive Folder</option>
              <option value="TELEGRAM">Telegram</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        )}
        <div className="space-y-2">
          <label htmlFor="url">URL:</label>
          <Input
            id="url"
            type="url"
            placeholder={`${type === "Video" ? "Youtube" : ""} ${type} URL`}
            {...register("url")}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="title">Title:</label>
          <Input
            id="title"
            placeholder={`${type} Title`}
            type="text"
            {...register("title")}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="description">Description:</label>
          <Input
            id="description"
            placeholder={`Enter ${type} Description (Optional)`}
            type="text"
            {...register("description")}
          />
        </div>
        <Button type="submit" className="w-[70px]">
          Save
        </Button>
      </form>
      <DeleteConfirmationSheet />
    </div>
  );
};

export default EditForm;