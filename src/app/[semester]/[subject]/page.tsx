import { Button } from "@/components/ui/button";
import AddVideo from "@/src/components/AddVideo";
import LinkCard from "@/src/components/LinkCard";
import { getSubjectById } from "@/src/lib/db/subjects/getSubjectById";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { subject: string } }) => {
	const session = await getServerSession();
	const user = await getUserByEmail(session?.user?.email);
	let currentSubject;
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
		<div className=" flex-grow p-20 flex flex-col gap-9 ">
			<h2 className="text-3xl "> {currentSubject?.name} </h2>
			<div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 ">
				{currentSubject?.videos.map((video, index) => (
					<div key={index}>
						<LinkCard href={`${params.subject}/${video.id}`}>
							<p>{video.title}</p>
						</LinkCard>
					</div>
				))}
			</div>
			<Button className="fixed left-10 bottom-10">+ Add Video</Button>
		</div>
	);
};

export default page;
