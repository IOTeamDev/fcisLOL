import LinkCard from "@/src/components/LinkCard";
import React from "react";

const page = () => {
	return (
		<div className="min-w-sreen h-screen flex justify-center items-center   ">
			<div className="grid grid-cols-2 max-md:grid-cols-1  gap-5 ">
				<LinkCard href="/1">
					<p>first semester </p>
				</LinkCard>
				<LinkCard href="/2">
					<p>second semester </p>
				</LinkCard>
			</div>
		</div>
	);
};

export default page;
