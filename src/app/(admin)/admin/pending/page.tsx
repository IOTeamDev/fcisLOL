import VideoComponent from "@/src/components/VideoComponent";
import { getVideos } from "@/src/lib/db/videos/getVideos";

const page = async () => {
  const pendingVideos = await getVideos("PENDING");

  if (pendingVideos.length === 0) {
    return (
      <div className="h-screen flex-grow flex justify-center items-center">
        <h1 className="text-5xl font-bold">No Pending Videos</h1>
      </div>
    );
  }

  return (
    <div className="flex-grow flex mt-10 flex-col gap-9 items-center ">
      <h2 className="text-5xl font-bold">Pending Videos</h2>
      <div className="grid grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
        {pendingVideos.map((video: any, index: any) => {
          return (
            <div key={index}>
              <VideoComponent
                video={video}
                target={`/admin/pending/${video.id}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
