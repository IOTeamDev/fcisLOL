import LinkCard from "@/src/components/LinkCard";
import NotFound from "@/src/components/NotFound";
import VideoComponent from "@/src/components/VideoComponent";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getVideos } from "@/src/lib/db/videos/getVideos";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();
  const user = await getUserByEmail(session?.user?.email);
  if (user?.role === "USER") return <NotFound />;

  const pendingVideos = await getVideos("PENDING");
  return (
    <div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
      <h2 className="text-5xl font-bold">Pending Videos</h2>
      <div className="grid grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
        {pendingVideos.map((video: any, index: any) => {
          return (
            <div key={index}>
              <VideoComponent video={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
