import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import { Card } from "@/src/components/ui/card";
import VideoApprovalForm from "./VideoApprovalForm";
import React from "react";
import NotFound from "@/src/components/NotFound";

const page = async ({ params }: { params: { videoId: string } }) => {
	const targetVideo = await getVideoById(Number(params.videoId));
	if (targetVideo?.status !== "PENDING") {
		return <NotFound />;
	}

	return (
		<div className="w-screen px-4 flex-grow flex justify-center items-center">
			<Card className="m-10">
				<div className="max-h-fit rounded-md p-5 m-3 flex flex-col justify-center items-center">
					<VideoApprovalForm targetVideo={targetVideo} />
				</div>
			</Card>
		</div>
	);
};

export default page;
