import EmbedDriveFile from "@/src/components/EmbedDriveFile";
import NotFound from "@/src/components/NotFound";
import AvatarIcon from "@/src/components/ui/avatarIcon";
import { Card } from "@/src/components/ui/card";
import { getFileById } from "@/src/lib/db/files/getFileById";
import { getUserById } from "@/src/lib/db/user/getUser";
import Link from "next/link";

const page = async ({ params }: { params: { fileId: string } }) => {
	const file = await getFileById(Number(params.fileId));

	if (file && file.status === "APPROVED") {
		const user = await getUserById(file?.userId);
		return (
			<div className="w-full flex flex-col justify-center items-center p-8">
				<h1 className="text-4xl max-[1000px]:text-2xl max-[500px]:text-xl font-bold pb-4 text-center">
					{file?.title}
				</h1>
				<div className="w-full flex max-[700px]:flex-col justify-around items-center pb-12">
					{file.description ? (
						<p className="text-lg max-[1000px]:text-sm max-[500px]:text-xs opacity-65 pb-8">
							{file.description}
						</p>
					) : null}
					<div className="flex items-center">
						<p>Added by:&nbsp;</p>
						<AvatarIcon width="32" height="32" />
						&nbsp;
						<Link
							href={`/profile/${file.userId}`}
							className="text-lg max-[1000px]:text-sm max-[500px]:text-xs underline"
						>
							{user?.firstName} {user?.lastName}
						</Link>
					</div>
				</div>
				<Card className="flex justify-center p-10">
					<EmbedDriveFile fileUrl={file?.url} />
				</Card>
			</div>
		);
	} else {
		return <NotFound />;
	}
};

export default page;
