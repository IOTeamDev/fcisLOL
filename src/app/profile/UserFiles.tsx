import FileComponent from "@/src/components/FileComponent";
import React from "react";

const UserFiles = ({ userFiles }: { userFiles: any }) => {
	return (
		<div className="space-y-2 py-3">
			<h2 className="text-2xl  font-bold">Recent Videos</h2>
			<div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
				{userFiles.map((file: any, index: any) => {
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
