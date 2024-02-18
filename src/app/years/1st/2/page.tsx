import LinkCard from "@/src/components/LinkCard";
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
		<div className="min-w-sreen min-h-[100vh-75px] flex justify-center items-center  p-3 ">
			<div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  gap-5 ">
				{avaliableSubjects.map((subject, index) => (
					<>
						<LinkCard
							key={index}
							href={`/1st-year/1/${convertAndLowerCase(subject)}`}
						>
							<p>{subject}</p>
						</LinkCard>
					</>
				))}
			</div>
		</div>
	);
};

export default page;
