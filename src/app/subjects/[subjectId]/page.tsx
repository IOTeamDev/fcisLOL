import { Button } from "@/src/components/ui/button";
import Modal from "@/src/components/Modal";
import VideoComponent from "@/src/components/VideoComponent";
import VideoForm from "@/src/components/forms/VideoForm";
import { getSubjectById } from "@/src/lib/db/subjects/getSubjectById";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getServerSession } from "next-auth";
import React from "react";
import NotFound from "@/src/components/NotFound";
import NoVideosPage from "./NoVideosPage";

const page = async ({ params }: { params: { subjectId: string } }) => {
	try {
		let currentSubject = await getSubjectById(Number(params.subjectId));
		if (!currentSubject) {
			throw new Error();
		}
		const session = await getServerSession();
		const user = await getUserByEmail(session?.user?.email);
		currentSubject = await getSubjectById(currentSubject.id);
		if (currentSubject?.videos.length == 0) {
			return (
				<NoVideosPage
					currentSubject={currentSubject}
					user={user}
					subjectId={params.subjectId}
				/>
			);
		}
		return (
			<div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
				<h2 className="text-5xl font-bold">{currentSubject?.name}</h2>
				<Modal
					trigger={<Button className="w-[200px]">+ Add Your Video</Button>}
					form={<VideoForm subjectId={params.subjectId} user={user} />}
				/>
				<div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
					{currentSubject?.videos.map((video: any, index: any) => {
						video.subject = currentSubject;
						return (
							<div key={index}>
								<VideoComponent video={video} target={`/video/${video.id}`} />
							</div>
						);
					})}
				</div>
			</div>
		);
	} catch (error) {
		return <NotFound />;
	}
};

export default page;
