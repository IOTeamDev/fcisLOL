import React from "react";
import FileComponent from "@/src/components/FileComponent";

const LinkPage = ({ pendingLinks }: { pendingLinks: any }) => {
	if (pendingLinks.length === 0) {
		return (
			<div className="h-screen flex-grow flex justify-center items-center">
				<h1 className="text-5xl font-bold -mt-40 max-[600px]:text-3xl">
					No Pending Links
				</h1>
			</div>
		);
	}
	return (
		<div className="flex-grow flex mt-10 flex-col gap-9 items-center">
			<h2 className="text-5xl font-bold">Pending links</h2>
			<div className="grid p-10 grid-cols-4 max-[1700px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[780px]:grid-cols-1 gap-4">
				{pendingLinks.map((link: any, index: any) => {
					return (
						<div key={index}>
							<FileComponent
								file={link}
								target={`/admin/pending/link/${link.id}`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LinkPage;
