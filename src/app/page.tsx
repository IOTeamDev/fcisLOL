import React from "react";
import Link from "next/link";
import ChangeTheme from "./ChangeTheme";

const page = () => {
	return (
		<div className="min-w-sreen h-screen flex justify-center items-center  gap-10 ">
			<ChangeTheme />
			<h1 className="  ">tempo</h1>
		</div>
	);
};

export default page;
