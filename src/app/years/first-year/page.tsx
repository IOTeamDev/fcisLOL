import LinkCard from "@/src/components/LinkCard";
import React from "react";

const page = () => {
	return (
		<div className="min-w-sreen h-screen flex justify-center items-center   ">
			<div className="grid grid-cols-2 max-md:grid-cols-1  gap-5 ">
				<LinkCard href="/years/first-year/1">
					<p>first semester </p>
				</LinkCard>
				<LinkCard href="/years/first-year/2">
					<p>second semester </p>
				</LinkCard>
			</div>
		</div>
	);
};

export default page;
