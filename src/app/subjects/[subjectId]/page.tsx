import { Button } from "@/src/components/ui/button";
import Modal from "@/src/components/Modal";
import VideoComponent from "@/src/components/VideoComponent";
import VideoForm from "@/src/components/forms/VideoForm";
import { getSubjectById } from "@/src/lib/db/subjects/getSubjectById";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getVideos } from "@/src/lib/db/videos/getVideos";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { subjectId: string } }) => {
	const session = await getServerSession();
	const user = await getUserByEmail(session?.user?.email);
	let currentSubject: any;
	try {
		currentSubject = await getSubjectById(Number(params.subjectId));
		const approvedVideosCount = (await getVideos("APPROVED")).length;
		if (approvedVideosCount == 0) {
			return (
				<>
					<div className="w-full flex-grow flex flex-col justify-center items-center">
						<h2 className="text-5xl font-bold">{currentSubject?.name}</h2>

						<div className="flex flex-col items-center">
							<p className="black:text-white text-center text-4xl font-extrabold p-4 max-md:text-xl opacity-70">
								No Videos Here Yet 😓 <br /> Why Don't You Add One?! 😏
							</p>
							<Modal
								trigger={
									<Button className="w-[200px]">+ Add Your Video</Button>
								}
								form={<VideoForm subjectId={params.subjectId} user={user} />}
							/>
						</div>
					</div>
				</>
			);
		}
	} catch (err) {
		return (
			<>
				<div className="w-full flex-grow flex justify-center items-center">
					<p className="text-4xl font-extrabold">404 POP LOL</p>
				</div>
			</>
		);
	}
	const approvedVideos = await getVideos("APPROVED");
	return (
		<div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
			<h2 className="text-5xl font-bold">{currentSubject?.name}</h2>
			<Modal
				trigger={<Button className="w-[200px]">+ Add Your Video</Button>}
				form={<VideoForm subjectId={params.subjectId} user={user} />}
			/>
			<div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
				{approvedVideos.map((video: any, index: any) => {
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
};

export default page;
