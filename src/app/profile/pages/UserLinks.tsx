import FileComponent from "@/src/components/FileComponent";
import React from "react";

const UserLinks = ({ userLinks }: { userLinks: any }) => {
	const approvedLinks = userLinks.filter(
		(link: any) => link.status === "APPROVED"
	);
	return (
		<div className="space-y-2 py-3">
			<h2 className="text-2xl  font-bold">Recent Links</h2>
			<div className="grid py-4 grid-cols-4 max-[1100px]:grid-cols-3 max-[780px]:grid-cols-2 max-[410px]:grid-cols-1 max- gap-4">
				{approvedLinks.map((link: any, index: any) => {
					return (
						<div key={index}>
							<FileComponent file={link} target={`/links/${link.id}`} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UserLinks;
