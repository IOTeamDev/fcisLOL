import React from "react";

const avaliableSemesters = ["1", "2"];

const page = ({ params }: { params: { semester: string } }) => {
	if (!avaliableSemesters.includes(params.semester)) {
		return (
			<>
				<div className="w-full min-h-[calc(100vh-75px)] flex justify-center items-center">
					<p className="text-4xl">404 POP LOL </p>
				</div>
			</>
		);
	}
	return <div>page</div>;
};

export default page;
