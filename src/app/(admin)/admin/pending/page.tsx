import { getUserByEmail } from "@/src/lib/db/user/getUser";
import { getPendingVidoesBySubject } from "@/src/lib/db/videos/getPendingVideos";
import { getServerSession } from "next-auth";
import PageSwitcher from "./PageSwitch";
import { getPendingFilesBySubject } from "@/src/lib/db/files/getPenddingFiles";
import { getPendingLinksBySubject } from "@/src/lib/db/link/getPenddingLink";

const page = async () => {
	const session = await getServerSession();
	const user = await getUserByEmail(session?.user?.email, false, true);
	const adminSubjectIds = user?.subjects.map((subject: any) => subject.id);
	const pendingVideos = await getPendingVidoesBySubject(
		adminSubjectIds as number[]
	);
	const pendingFiles = await getPendingFilesBySubject(
		adminSubjectIds as number[]
	);
	const pendingLinks = await getPendingLinksBySubject(
		adminSubjectIds as number[]
	);
	return (
		<PageSwitcher
			pendingFiles={pendingFiles}
			pendingLinks={pendingLinks}
			pendingVideos={pendingVideos}
		/>
	);
};

export default page;
