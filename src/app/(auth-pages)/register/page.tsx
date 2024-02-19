import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";
import { Card } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await getServerSession();
	if (session?.user) {
		redirect("/years");
	}
	return (
		<div className="w-screen px-4 flex-grow flex justify-center items-center">
			<Card>
				<div className="max-h-fit rounded-md p-5 m-3 flex flex-col justify-center items-center">
					<div className="flex flex-col justify-between space-y-2 px-4">
						<div className="flex-1 flex flex-col justify-center space-y-4">
							<div className="space-y-2 text-center">
								<h1 className="text-4xl my-5 font-bold">Sign up</h1>
							</div>
						</div>
						<RegisterForm />
						<div className="flex max-sm:flex-col items-center justify-center py-2">
							<span className="text-sm text-gray-500 dark:text-gray-400 z-10">
								Already have an account?{" "}
								<Link className="text-sm underline" href="/login">
									Login
								</Link>
							</span>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default page;
