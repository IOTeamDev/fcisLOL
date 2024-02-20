"use client";
import Modal from "@/src/components/Modal";
import VideoForm from "@/src/components/forms/VideoForm";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
	subjectId: number;
	user: any;
}

const AddVideoButton = ({ subjectId, user }: Props) => {
	const router = useRouter();
	let handleAdd = () => {};
	if (!user) {
		handleAdd = () => {
			router.push("/login");
		};
	}
	return (
		<Modal
			trigger={
				<Button
					// if user is not logged in then redirect to login
					onClick={handleAdd}
					className="w-[200px]"
				>
					+ Add Your Video
				</Button>
			}
			form={<VideoForm subjectId={subjectId} user={user} />}
		/>
	);
};

export default AddVideoButton;
