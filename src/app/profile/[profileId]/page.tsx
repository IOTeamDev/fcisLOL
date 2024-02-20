import { Avatar } from "@/src/components/ui/avatar";
import { Card, CardContent } from "@/src/components/ui/card";
import NotFound from "@/src/components/NotFound";
import VideoComponent from "@/src/components/VideoComponent";
import { getUserById } from "@/src/lib/db/user/getUser";

const page = async ({ params }: { params: { profileId: string } }) => {
  const user = await getUserById(Number(params.profileId), true);
  if (user) {
    const userVideos = user.videos;
    return (
      <div className="flex justify-center">
        <Card className="max-w-[70%] max-md:max-w-[100%] border-none my-20">
          <CardContent className="space-y-4">
            <div className="flex space-x-4 pb-10 border-b">
              <div className="flex items-center space-x-4 ">
                <Avatar className="h-20 w-20">
                  <img
                    alt="Avatar"
                    className="rounded-full aspect-square"
                    height="96"
                    src="/avatart.png"
                    width="96"
                  />
                </Avatar>
                <div className="space-y-1.5 max-sm:flex max-sm:flex-col max-sm:items-center">
                  <h1 className="text-3xl font-bold max-lg:text-xl">
                    {user.firstName} {user.lastName}
                  </h1>
                  <div className="flex"></div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold p-4">Recent Videos</h2>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {userVideos.map((video: any) => (
                  <VideoComponent video={video} target={`/video/${video.id}`} />
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default page;
