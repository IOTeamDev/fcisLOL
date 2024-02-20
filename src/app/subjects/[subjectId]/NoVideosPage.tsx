import Modal from "@/src/components/Modal";
import VideoForm from "@/src/components/forms/VideoForm";
import { Button } from "@/src/components/ui/button";
import React from "react";

interface Props {
	currentSubject: any;
	user: any;
	subjectId: any;
}

const NoVideosPage = ({ currentSubject, user, subjectId }: Props) => {
	return (
		<div className="w-full flex-grow flex flex-col justify-center items-center">
			<h2 className="text-5xl font-bold">{currentSubject?.name}</h2>

			<div className="flex flex-col items-center">
				<p className="black:text-white text-center text-4xl font-extrabold p-4 max-md:text-xl opacity-70">
					No Videos Here Yet 😓 <br /> Why Don't You Add One?! 😏
				</p>
				<Modal
					trigger={<Button className="w-[200px]">+ Add Your Video</Button>}
					form={<VideoForm subjectId={subjectId} user={user} />}
				/>
			</div>
		</div>
	);
};

export default NoVideosPage;
