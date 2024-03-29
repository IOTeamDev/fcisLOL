import NotFound from "@/src/components/NotFound";
import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getServerSession } from "next-auth";
import EditProfileButton from "./EditProfileButton";
import LogoutButton from "./LogoutButton";
import AvatarIcon from "@/src/components/ui/avatarIcon";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/src/components/ui/tabs";
import UserVideos from "./pages/UserVideos";
import UserFiles from "./pages/UserFiles";
import UserLinks from "./pages/UserLinks";

const page = async () => {
	const session = await getServerSession();
	if (!session?.user) {
		return <NotFound />;
	}
	const user = await getUserByEmail(
		session.user.email,
		true,
		false,
		true,
		true
	);
	const userVideos = user?.videos?.filter(
		(video) => video.status === "APPROVED"
	);

	return (
		<div className="flex-grow flex flex-col  items-center relative p-10">
			<div className="flex space-x-4 my-10 ">
				<div className="flex items-center space-x-4 ">
					<AvatarIcon width="96" height="96" />

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
					<UserFiles userFiles={user?.files} />
				</TabsContent>
				<TabsContent value="links">
					<UserLinks userLinks={user?.links} />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default page;
