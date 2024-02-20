import YouTubeEmbed from "@/src/components/YoutubeEmbed";
import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import React from "react";

const page = async ({ params }: { params: { video: string } }) => {
	const CurrentVideo = await getVideoById(Number(params.video));
	return (
		<div className="flex-grow  flex items-center flex-col">
			<div className="p-4 flex items-center flex-col gap-8">
				<h2 className="text-5xl max-md:text-3xl">{CurrentVideo?.title} </h2>
				<div className="flex w-full items-center justify-center">
					<YouTubeEmbed url={CurrentVideo?.url as string} />
				</div>
			</div>
		</div>
	);
};

export default page;
