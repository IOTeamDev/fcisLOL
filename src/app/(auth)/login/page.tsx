import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
const page = () => {
	return (
		<div className="w-screen  p-4 h-screen flex justify-center items-center">
			<div className=" border-2    max-h-fit rounded-md p-10 flex flex-col justify-center items-center">
				<div className="flex flex-col justify-between space-y-2 px-4">
					<div className="flex-1 flex flex-col justify-center space-y-4">
						<div className="space-y-2 text-center">
							<h1 className="text-3xl font-bold dark:text-white">Login</h1>
							<p className="text-gray-500 dark:text-gray-400">
								Enter your email below to login to your account
							</p>
						</div>
					</div>
					<LoginForm />
					<div className="flex max-sm:flex-col items-center justify-center py-2 border-t space-x-4">
						<span className="text-sm text-gray-500 dark:text-gray-400">
							Don't have an account?
						</span>
						<Link className="text-sm underline" href="/register">
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
