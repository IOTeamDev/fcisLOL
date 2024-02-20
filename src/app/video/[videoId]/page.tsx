import { Card } from "@/components/ui/card";
import embedYTVideo from "@/src/components/embedYTVideo";
import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import React from "react";

const page = async ({ params }: { params: { videoId: string } }) => {
  const video = await getVideoById(Number(params.videoId));

  if (video)
    return (
      <div className="w-full flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl max-[1000px]:text-2xl max-[500px]:text-xl font-bold pb-8 text-center">
          {video?.title}
        </h1>
        <Card className="w-4/5 h-4/5">{embedYTVideo(video?.url)}</Card>
      </div>
    );
};

export default page;
