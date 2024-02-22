import React from "react";

const YouTubeEmbed = ({ url }: { url: string }) => {
	// Function to extract video ID from URL
	const getVideoId = (url: string) => {
		const regExp =
			/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);

		if (match && match[2].length === 11) {
			return match[2];
		} else {
			return "Invalid YouTube URL";
		}
	};

	const videoId = getVideoId(url);

	return (
		<div className="video-responsive">
			<iframe
				src={`https://www.youtube.com/embed/${videoId}`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				title="Embedded YouTube Video"
				allowFullScreen
				width="640"
				height="360"
				className="h-[70vh] w-[80vw] max-lg:h-[70vw] max-lg:w-[80vw]"
			></iframe>
		</div>
	);
};

export default YouTubeEmbed;
