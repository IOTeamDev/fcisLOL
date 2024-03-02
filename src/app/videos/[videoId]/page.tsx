import { Card } from "@/src/components/ui/card";
import EmbedYTVideo from "@/src/components/EmbedYTVideo";
import { getUserById } from "@/src/lib/db/user/getUser";
import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import Link from "next/link";
import React from "react";
import AvatarIcon from "@/src/components/ui/avatarIcon";
import NotFound from "@/src/components/NotFound";
import { Button } from "@/src/components/ui/button";

const page = async ({ params }: { params: { videoId: string } }) => {
  const video = await getVideoById(Number(params.videoId));

  if (video && video?.status === "APPROVED") {
    const user = await getUserById(video?.userId);
    return (
      <div className="w-full flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl max-[1000px]:text-2xl max-[500px]:text-xl font-bold pb-4 text-center">
          {video?.title}
        </h1>
        <div className="w-full flex max-[700px]:flex-col justify-around items-center pb-12">
          {video.description ? (
            <p className="text-lg max-[1000px]:text-sm max-[500px]:text-xs opacity-65 pb-8">
              {video.description}
            </p>
          ) : null}
          <div className="flex items-center">
            <p>Added by:&nbsp;</p>
            <AvatarIcon width="32" height="32" />
            &nbsp;
            <Link
              href={`/profile/${video.userId}`}
              className="text-lg max-[1000px]:text-sm max-[500px]:text-xs underline"
            >
              {user?.firstName} {user?.lastName}
            </Link>
          </div>
        </div>
        <Card className="">
          <EmbedYTVideo url={video.url} />
        </Card>
        {user?.role === "SUPERADMIN" && (
          <Button className="mt-4" variant={"secondary"}>
            <Link href={`/edit/video/${video.id}`} className="mx-4">
              Edit
            </Link>
          </Button>
        )}
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default page;
