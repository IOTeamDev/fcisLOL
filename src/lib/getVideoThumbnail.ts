import toast from "react-hot-toast";

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

export default async function getThumbnailUrl(
  videoUrl: string
): Promise<string> {
  // Extract video ID from the URL
  const videoId = getVideoId(videoUrl);
  if (!videoId) {
    toast.error("Invalid YouTube video URL");
    throw new Error("Invalid YouTube video URL");
  }

  // Construct thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return thumbnailUrl;
}
