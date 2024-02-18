import React from "react";
import Link from "next/link";

const page = () => {
	return (
		<div className="min-w-sreen h-screen flex justify-center items-center   ">
			<div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1  gap-5 ">
				<div className=" duration-100 hover:scale-105 min-h-[300px] min-w-[300px] rounded-lg  broder border-2 border-white   "></div>
				<div className=" duration-100 hover:scale-105 min-h-[300px] min-w-[300px] rounded-lg  broder border-2 border-white   "></div>
				<div className=" duration-100 hover:scale-105 min-h-[300px] min-w-[300px] rounded-lg  broder border-2 border-white   "></div>
				<Link
					href="./years/first-year"
					className="min-h-[300px] flex justify-center items-center min-w-[300px] broder border-2 border-white   "
				>
					<p>1st grade </p>
				</Link>
			</div>
		</div>
	);
};

export default page;
