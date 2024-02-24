import FileComponent from "@/src/components/FileComponent";
import React from "react";

const UserFiles = ({ userFiles }: { userFiles: any }) => {
	const approvedFiles = userFiles.filter(
		(file: any) => file.status === "APPROVED"
	);
	return (
		<div className="space-y-2 py-3">
			<h2 className="text-2xl  font-bold">Recent Files</h2>
			<div className="grid py-4 grid-cols-4 max-[1100px]:grid-cols-3 max-[780px]:grid-cols-2 max-[410px]:grid-cols-1 max- gap-4">
				{approvedFiles.map((file: any, index: any) => {
					return (
						<div key={index}>
							<FileComponent file={file} target={`/files/${file.id}`} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UserFiles;
