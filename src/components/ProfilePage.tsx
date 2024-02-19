"use client";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useState } from "react";
import AccountSettings from "./AccountSettings";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfilePage({ user }: { user: any }) {
	const [showModal, setShowModal] = useState(false);
	const router = useRouter();
	const userVideos = user.videos;
	return (
		<>
			<Card className="max-w-[70%] max-md:max-w-[100%] border-none my-20">
				<CardContent className="space-y-4">
					<div className="flex space-x-4 pb-10 border-b">
						<div className="flex items-center space-x-4 ">
							<Avatar className="h-20 w-20">
								<img
									alt="Avatar"
									className="rounded-full aspect-square"
									height="96"
									src="/avatart.png"
									width="96"
								/>
							</Avatar>
							<div className="space-y-1.5 max-sm:flex max-sm:flex-col max-sm:items-center">
								<h1 className="text-3xl font-bold max-lg:text-xl">
									{user.firstName} {user.lastName}
								</h1>
								<div className="flex justify-between">
									<Button size="sm" onClick={() => setShowModal(true)}>
										Edit profile
									</Button>
									<Button
										variant={"destructive"}
										size="sm"
										onClick={() => {
											signOut();
											router.push("/");
										}}
									>
										Log out
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="space-y-2">
						<h2 className="text-2xl font-bold">Recent Videos</h2>
						<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
							{/* {userVideos.map((video: any) => (
                <p>{video}</p>
              ))} */}
						</ul>
					</div>
				</CardContent>
			</Card>
			{showModal ? (
				<div className="fixed top-0 left-0  z-20 min-w-screen min-h-screen">
					<div className="fixed bg-black w-screen h-screen flex justify-center items-center dark:bg-slate-800 dark:bg-opacity-50 bg-opacity-15">
						<AccountSettings user={user} setShowModal={setShowModal} />
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
