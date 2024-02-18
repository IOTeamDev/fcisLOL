import React from "react";
import Card from "@/src/lib/components/Card";
import LinkCard from "@/src/lib/components/LinkCard";

const page = () => {
	return (
		<div className="min-w-sreen h-screen flex justify-center items-center   ">
			<div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  gap-5 ">
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<LinkCard href="/years/first-year">
					<p>1st grade </p>
				</LinkCard>
			</div>
		</div>
	);
};

export default page;
