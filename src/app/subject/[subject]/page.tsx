import AddVideo from "@/src/components/AddVideo";
import VideoComponent from "@/src/components/VideoComponent";
import { getSubjectById } from "@/src/lib/db/subjects/getSubjectById";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { subject: string } }) => {
	const session = await getServerSession();
	const user = await getUserByEmail(session?.user?.email);
	let currentSubject: any;
	try {
		currentSubject = await getSubjectById(Number(params.subject));
		if (currentSubject?.videos.length == 0) {
			return (
				<>
					<div className="w-full flex-grow flex justify-center items-center">
						<p className="text-4xl font-extrabold p-4 max-md:text-xl border-2 m-2">
							Still there is no videos here, Why don't you add some??
						</p>
					</div>
					<AddVideo subjectId={currentSubject.id} user={user} />
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
	return (
		<div className=" flex-grow flex mt-10 flex-col gap-9 items-center ">
			<h2 className="text-3xl "> {currentSubject?.name} </h2>
			<div className="grid grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
				{currentSubject?.videos.map((video: any, index: any) => {
					video.subject = currentSubject;
					return (
						<div key={index}>
							<VideoComponent video={video} />
						</div>
					);
				})}
			</div>
			<AddVideo subjectId={currentSubject?.id} user={user} />
		</div>
	);
};

export default page;
