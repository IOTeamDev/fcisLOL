"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import VideoForm from "./VideoForm";
import { useRouter } from "next/navigation";

const AddVideo = ({ user, subjectId }: { user: any; subjectId: any }) => {
	const [showModal, setShowModal] = useState(false);
	const router = useRouter();
	let handleAddButton;
	if (user) {
		handleAddButton = () => {
			setShowModal(true);
		};
	} else {
		handleAddButton = () => {
			router.push("/login");
		};
	}
	return (
		<>
			<Button onClick={handleAddButton} className="fixed left-10 bottom-10">
				+ Add Video
			</Button>

			{showModal ? (
				<div className="fixed top-0 left-0  z-20 min-w-screen min-h-screen">
					<div className="fixed bg-black w-screen h-screen flex justify-center items-center dark:bg-slate-800 dark:bg-opacity-50 bg-opacity-15">
						<VideoForm
							subjectId={subjectId}
							user={user}
							setShowModal={setShowModal}
						/>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default AddVideo;
