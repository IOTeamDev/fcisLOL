import toast from "react-hot-toast";

export default async function getThumbnailUrl(
	videoUrl: string
): Promise<string> {
	// Extract video ID from the URL
	const videoId = videoUrl.split("v=")[1];
	if (!videoId) {
		toast.error("Invalid YouTube video URL");
		throw new Error("Invalid YouTube video URL");
	}

	// Construct thumbnail URL
	const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

	return thumbnailUrl;
}
