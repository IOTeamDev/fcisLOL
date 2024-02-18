import LinkCard from "@/src/components/LinkCard";
import { getSubjectById } from "@/src/lib/db/videos/getSubjectVideos";
import React from "react";

const page = async ({ params }: { params: { subject: string } }) => {
	let currentSubject;
	try {
		currentSubject = await getSubjectById(Number(params.subject));
		if (currentSubject?.videos.length == 0) {
			return (
				<>
					<div className="w-full min-h-[calc(100vh-75px)] flex justify-center items-center">
						<p className="text-4xl font-extrabold p-4 max-md:text-xl border-2 m-2">
							Still there is no videos here, Why don't you add some??
						</p>
					</div>
				</>
			);
		}
	} catch (err) {
		return (
			<>
				<div className="w-full min-h-[calc(100vh-75px)] flex justify-center items-center">
					<p className="text-4xl font-extrabold">404 POP LOL</p>
				</div>
			</>
		);
	}
	return (
		<div className="min-w-sreen min-h-[calc(100vh-75px)] p-20 flex flex-col gap-9 ">
			<h2 className="text-3xl "> {currentSubject?.name} </h2>
			<div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2  gap-5 ">
				{currentSubject?.videos.map((video, index) => (
					<>
						<LinkCard key={index} href={`${params.subject}/${video.id}`}>
							<p>{video.title}</p>
						</LinkCard>
					</>
				))}
			</div>
		</div>
	);
};

export default page;
