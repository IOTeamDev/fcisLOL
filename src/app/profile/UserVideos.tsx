import VideoComponent from "@/src/components/VideoComponent";
import React from "react";

const UserVideos = ({ userVideos }: { userVideos: any }) => {
	return (
		<div className="space-y-2 flex flex-col justify-center">
			<h2 className="text-2xl font-bold">Recent Videos</h2>
			<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{userVideos?.map((video: any) => (
					<VideoComponent
						key={video.id}
						video={video}
						target={`/videos/${video.id}`}
					/>
				))}
			</ul>
		</div>
	);
};

export default UserVideos;
