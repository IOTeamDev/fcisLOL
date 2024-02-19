import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import React from "react";

function page({ params }: { params: { videoId: string } }) {
  const targetVideo = getVideoById(Number(params.videoId));
  // console.log(targetVideo);
  return <div>page</div>;
}

export default page;
