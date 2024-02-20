import { Card } from "@/src/components/ui/card";
import embedYTVideo from "@/src/components/embedYTVideo";
import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { videoId: string } }) => {
	const video = await getVideoById(Number(params.videoId));

	if (video)
		return (
			<div className="w-full flex flex-col justify-center items-center p-8">
				<h1 className="text-4xl max-[1000px]:text-2xl max-[500px]:text-xl font-bold pb-4 text-center">
					{video?.title}
				</h1>
				<div className="w-full flex max-[700px]:flex-col justify-around items-center pb-8">
					{video.description ? (
						<p className="text-lg max-[1000px]:text-sm max-[500px]:text-xs opacity-65">
							{video.description}
						</p>
					) : null}
					<Link
						href={`/profile/${video.userId}`}
						className="max-[700px]:m-4 underline"
					>
						author
					</Link>
				</div>
				<Card className="w-4/5 h-4/5">{embedYTVideo(video?.url)}</Card>
			</div>
		);
};

export default page;
