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
import { createFile } from "@/src/lib/db/files/createFile";
import toast from "react-hot-toast";
import AddForm from "@/src/components/forms/AddForm";

interface Props {
	subjectId: number;
	user: any;
	type: "Video" | "File";
}

const AddButton = ({ subjectId, user, type }: Props) => {
	const router = useRouter();
	if (!user) {
		return (
			<Button
				onClick={() => {
					router.push("/login");
				}}
			>
				+ Add {type}
			</Button>
		);
	}

	const buttonRef = useRef(null);

	let onSubmit: any;

	switch (type) {
		case "Video":
			onSubmit = async (data: any) => {
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
			break;
		case "File":
			onSubmit = async (data: any) => {
				const fileData = {
					...data,
					user: user.id,
					subjectId: subjectId,
				};
				try {
					await createFile(fileData, user.role);
					if (buttonRef.current) {
						const middle: any = buttonRef.current;
						middle.click();
					}
					toast.success("File added and is waiting for approval! 🎉");
				} catch (error) {
					toast.error("An error has occurred, Probably invalid file URL");
					throw error;
				}
			};
			break;
		default:
			break;
	}
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>+ Add {type}</Button>
			</SheetTrigger>
			<SheetContent side={"bottom"}>
				<SheetHeader>
					<SheetTitle>
						Add {type} {type === "Video" ? "📹" : "📒"}
					</SheetTitle>
					<SheetDescription>
						🎉 Welcome to our {type} adding form ✨! We're excited to welcome
						you to share your content with us. Kindly complete the following
						details to upload your {type}: {type === "Video" ? "📹" : "📒"}
					</SheetDescription>
				</SheetHeader>
				<AddForm handleFormSubmit={onSubmit} type={type} />
				<SheetClose ref={buttonRef}></SheetClose>
			</SheetContent>
		</Sheet>
	);
};

export default AddButton;
