import React from "react";
import Link from "next/link";

const page = () => {
	return (
		<div className="min-w-sreen h-screen flex justify-center items-center bg-black ">
			<div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  gap-5 ">
				<div className="min-h-[300px] min-w-[300px] broder border-2 border-white text-white"></div>
				<div className="min-h-[300px] min-w-[300px] broder border-2 border-white text-white"></div>
				<div className="min-h-[300px] min-w-[300px] broder border-2 border-white text-white"></div>
				<Link
					href="first-year"
					className="min-h-[300px] flex justify-center items-center min-w-[300px] broder border-2 border-white text-white"
				>
					<p>1st grade </p>
				</Link>
			</div>
		</div>
	);
};

export default page;
