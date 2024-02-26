import NotFound from "@/src/components/NotFound";
import AvatarIcon from "@/src/components/ui/avatarIcon";
import { getLinkById } from "@/src/lib/db/link/getLinkById";
import { getUserById } from "@/src/lib/db/user/getUser";
import Link from "next/link";

const page = async ({ params }: { params: { linkId: string } }) => {
	const link = await getLinkById(Number(params.linkId));

	if (link && link.status === "APPROVED") {
		const user = await getUserById(link?.userId);
		return (
			<div className="w-full flex flex-col justify-center items-center p-8">
				<h1 className="text-4xl max-[1000px]:text-2xl max-[500px]:text-xl font-bold pb-4 text-center">
					{link?.title}
				</h1>
				<div className="w-full flex max-[700px]:flex-col justify-around items-center pb-12">
					{link.description ? (
						<p className="text-lg max-[1000px]:text-sm max-[500px]:text-xs opacity-65 pb-8">
							{link.description}
						</p>
					) : null}
					<div className="flex items-center">
						<p>Added by:&nbsp;</p>
						<AvatarIcon width="32" height="32" />
						&nbsp;
						<Link
							href={`/profile/${link.userId}`}
							className="text-lg max-[1000px]:text-sm max-[500px]:text-xs underline"
						>
							{user?.firstName} {user?.lastName}
						</Link>
					</div>
				</div>
				<div>
					<Link href={link.url} className="underline">
						{link.url}
					</Link>
				</div>
			</div>
		);
	} else {
		return <NotFound />;
	}
};

export default page;
