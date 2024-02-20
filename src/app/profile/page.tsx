import NotFound from "@/src/components/NotFound";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getServerSession } from "next-auth";
import { Button } from "@/src/components/ui/button";
import { CardContent, Card } from "@/src/components/ui/card";
import VideoComponent from "@/src/components/VideoComponent";
import EditProfileButton from "./EditProfileButton";
import LogoutButton from "./LogoutButton";
import AvatarIcon from "@/src/components/ui/avatarIcon";

const page = async () => {
	const session = await getServerSession();
	if (!session?.user) {
		return <NotFound />;
	}
	const user = await getUserByEmail(session.user.email, true);
	const userVideos = user?.videos;
	return (
		<div className="flex-grow flex justify-center items-center relative">
			<>
				<Card className="max-w-[70%] max-md:max-w-[100%] border-none my-20">
					<CardContent className="space-y-4">
						<div className="flex space-x-4 pb-10 border-b">
							<div className="flex items-center space-x-4 ">
              <AvatarIcon width="96" height="96"/>

								<div className="space-y-1.5 max-sm:flex max-sm:flex-col max-sm:items-center">
									<h1 className="text-3xl font-bold max-lg:text-xl">
										{user?.firstName} {user?.lastName}
									</h1>
									<div className="flex">
										<EditProfileButton user={user} />
										<LogoutButton />
									</div>
								</div>
							</div>
						</div>
						<div className="space-y-2">
							<h2 className="text-2xl font-bold">Recent Videos</h2>
							<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
								{userVideos?.map((video: any) => (
									<VideoComponent video={video} target={`/video/${video.id}`} />
								))}
							</ul>
						</div>
					</CardContent>
				</Card>
			</>
		</div>
	);
};

export default page;
