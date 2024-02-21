import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getPendingVidoesBySubject } from "@/src/lib/db/videos/getPendingVideos";
import { getServerSession } from "next-auth";
import PageSwitcher from "./PageSwitch";

const page = async () => {
	const session = await getServerSession();
	const user = await getUserByEmail(session?.user?.email, false, true);
	const adminSubjectIds = user?.subjects.map((subject: any) => subject.id);
	const pendingVideos = await getPendingVidoesBySubject(
		adminSubjectIds as number[]
	);
	if (pendingVideos.length === 0) {
		return (
			<div className="h-screen flex-grow flex justify-center items-center">
				<h1 className="text-5xl font-bold">No Pending Videos</h1>
			</div>
		);
	}

	return <PageSwitcher pendingVideos={pendingVideos} />;
};

export default page;
