import VideoComponent from "@/src/components/VideoComponent";
import React from "react";

interface Props {
	pendingVideos: any;
}

const VideoPage = ({ pendingVideos }: Props) => {
	return (
		<div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
			<h2 className="text-5xl font-bold">Pending Videos</h2>
			<div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
				{pendingVideos.map((video: any, index: any) => {
					return (
						<div key={index}>
							<VideoComponent
								video={video}
								target={`/admin/pending/video/${video.id}`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default VideoPage;
