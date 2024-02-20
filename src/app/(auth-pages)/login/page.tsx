import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await getServerSession();
	if (session?.user) {
		redirect("/levels");
	}
	return (
		<div className="w-screen px-4 flex-grow flex justify-center items-center">
			<Card>
				<div className="max-h-fit rounded-md p-5 m-3 flex flex-col justify-center items-center">
					<div className="flex flex-col justify-between space-y-2 px-4">
						<div className="space-y-2 text-center">
							<h1 className="text-4xl my-5 font-bold">Log In</h1>
						</div>
					</div>
					<LoginForm />
					<div className="flex max-sm:flex-col items-center justify-center py-2">
						<span className="text-sm text-gray-500 dark:text-gray-400 z-10">
							Don't have an account?{" "}
							<Link className="text-sm underline" href="/register">
								Sign up
							</Link>
						</span>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default page;
