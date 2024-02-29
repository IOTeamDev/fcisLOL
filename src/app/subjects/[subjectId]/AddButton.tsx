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
import { createLink } from "@/src/lib/db/link/createLink";

interface Props {
	subjectId: number;
	user: any;
	type: "Video" | "File" | "Link";
}

const AddButton = ({ subjectId, user, type }: Props) => {
	const router = useRouter();
	const buttonRef = useRef(null);
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
					if (user.role === "USER") {
						toast.success("Video added and is waiting for approval! 🎉");
					} else {
						toast.success("Video added successfully! 🎉");
					}
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
					if (user.role === "USER") {
						toast.success("File added and is waiting for approval! 🎉");
					} else {
						toast.success("File added successfully! 🎉");
					}
				} catch (error) {
					toast.error("An error has occurred, Probably invalid file URL");
					throw error;
				}
			};
			break;
		case "Link":
			onSubmit = async (data: any) => {
				const LinkData = {
					...data,
					user: user.id,
					subjectId: subjectId,
				};
				try {
					await createLink(LinkData, user.role);
					if (buttonRef.current) {
						const middle: any = buttonRef.current;
						middle.click();
					}
					if (user.role === "USER") {
						toast.success("Link added and is waiting for approval! 🎉");
					} else {
						toast.success("Link added successfully! 🎉");
					}
				} catch (error) {
					toast.error("An error has occurred, Probably invalid Link URL");
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
					<SheetTitle className="text-center">
						Add {type} {type === "Video" ? "📹" : "📒"}
					</SheetTitle>
					<SheetDescription>
						🎉 Welcome to our {type} adding form ✨! We&apos;re excited to
						welcome you to share your content with us. Kindly complete the
						following details to upload your {type}:{" "}
						{type === "Video" ? "📹" : "📒"}
					</SheetDescription>
				</SheetHeader>
				<AddForm handleFormSubmit={onSubmit} type={type} />
				<SheetClose ref={buttonRef}></SheetClose>
			</SheetContent>
		</Sheet>
	);
};

export default AddButton;
