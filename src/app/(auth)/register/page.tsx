import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";

const page = () => {
	return (
		<div className="w-screen  p-4 h-screen flex justify-center items-center">
			<div className=" border-2   max-h-fit rounded-md p-10 flex flex-col justify-center items-center">
				<div className="flex flex-col justify-between space-y-2 px-4">
					<div className="flex-1 flex flex-col justify-center space-y-4">
						<div className="space-y-2 text-center">
							<h1 className="text-3xl font-bold">Sign up</h1>
							<p className="text-gray-500 dark:text-gray-400">
								Enter your credentials below to create your account
							</p>
						</div>
					</div>
					<RegisterForm />
					<div className="flex max-sm:flex-col items-center justify-center py-2 border-t space-x-4">
						<span className="text-sm text-gray-500 dark:text-gray-400">
							Already have an account?
						</span>
						<Link className="text-sm underline" href="/login">
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
