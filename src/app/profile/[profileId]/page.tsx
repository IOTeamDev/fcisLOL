import { Card, CardContent } from "@/src/components/ui/card";
import NotFound from "@/src/components/NotFound";
import { getUserById } from "@/src/lib/db/user/getUser";
import AvatarIcon from "@/src/components/ui/avatarIcon";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import UserFiles from "../pages/UserFiles";
import UserVideos from "../pages/UserVideos";
import UserLinks from "../pages/UserLinks";

const page = async ({ params }: { params: { profileId: string } }) => {
  let user;
  try {
    user = await getUserById(Number(params.profileId), true, false, true);
  } catch (error) {
    return <NotFound />;
  }

  if (user) {
    const userVideos = user?.videos?.filter(
      (video) => video.status === "APPROVED"
    );

    const approvedFiles = user.files.filter(
      (file: any) => file.status === "APPROVED"
    );

    const approvedLinks = user.links.filter(
      (link: any) => link.status === "APPROVED"
    );
    return (
      <div className="flex justify-center">
        <Card className="max-w-[70%] max-md:max-w-[100%] border-none my-20">
          <CardContent className="space-y-4">
            <div className="flex space-x-4 pb-10 border-b">
              <div className="flex items-center space-x-4 ">
                <AvatarIcon width="96" height="96" />
                <div className="space-y-1.5 max-sm:flex max-sm:flex-col max-sm:items-center">
                  <h1 className="text-3xl font-bold max-lg:text-xl">
                    {user.firstName} {user.lastName}
                  </h1>
                  <div className="flex"></div>
                </div>
              </div>
            </div>
            <Tabs defaultValue="videos">
              <div className="flex items-center justify-center w-full my-2">
                <TabsList>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="files">Files</TabsTrigger>
                  <TabsTrigger value="links">Links</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="videos">
                <UserVideos userVideos={userVideos} />
              </TabsContent>
              <TabsContent value="files">
                <UserFiles userFiles={approvedFiles} />
              </TabsContent>
              <TabsContent value="links">
                <UserLinks userLinks={approvedLinks} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default page;
