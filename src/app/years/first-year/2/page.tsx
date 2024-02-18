import Link from "next/link";
import React from "react";

function convertAndLowerCase(inputString: string): string {
	// Convert spaces to hyphens and make the string lowercase
	return inputString.replace(/\s+/g, "-").toLowerCase();
}

const page = () => {
	const avaliableSubjects = [
		"Physis 2",
		"Electronics",
		"Calculus 2",
		"Structured Programming",
		"Professional Ethics and Legal Aspects",
		"Business Administration",
	];

	return (
		<div className="min-w-sreen h-screen flex justify-center items-center   ">
			<div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  gap-5 ">
				{avaliableSubjects.map((subject, index) => (
					<>
						<Link
							key={index}
							href={`/first-year/1/${convertAndLowerCase(subject)}`}
							className="min-h-[300px] p-10 flex justify-center items-center min-w-[300px] broder border-2 border-white   "
						>
							<p>{subject}</p>
						</Link>
					</>
				))}
			</div>
		</div>
	);
};

export default page;
