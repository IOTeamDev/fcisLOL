import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import React from "react";

const page = async ({ params }: { params: { videoId: string } }) => {
  const targetVideo = await getVideoById(Number(params.videoId));
  console.log(targetVideo);
  return <div>page</div>;
}

export default page;
