import { Card } from "@/src/components/ui/card";
import React from "react";
import NotFound from "@/src/components/NotFound";
import FileApprovalForm from "../../file/[fileId]/FileApprovalForm";
import { getLinkById } from "@/src/lib/db/link/getLinkById";

const page = async ({ params }: { params: { linkId: string } }) => {
	const targetLink = await getLinkById(Number(params.linkId));

	if (targetLink?.status !== "PENDING") {
		return <NotFound />;
	}

	return (
		<div className="w-screen px-4 flex-grow flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold mt-8 underline">Link Approval</h1>
			<Card className="m-10">
				<div className="max-h-fit rounded-md p-5 m-3 flex flex-col justify-center items-center">
					<FileApprovalForm
						targetFile={targetLink}
						targetSubject={targetLink.subject}
					/>
				</div>
			</Card>
		</div>
	);
};

export default page;
