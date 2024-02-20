"use client";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import AccountSettings from "./forms/AccountSettings";
import VideoComponent from "./VideoComponent";
import Modal from "./Modal";
import LogoutForm from "./forms/LogoutForm";

export default function ProfilePage({ user }: { user: any }) {
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
									<Modal
										trigger={<Button size="sm">Edit profile</Button>}
										form={<AccountSettings user={user} />}
									/>
									<Modal
										trigger={
											<Button size="sm" variant={"destructive"}>
												Log out
											</Button>
										}
										form={<LogoutForm />}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="space-y-2">
						<h2 className="text-2xl font-bold">Recent Videos</h2>
						<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
							{userVideos.map((video: any) => (
								<VideoComponent video={video} target={`/video/${video.id}`} />
							))}
						</ul>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
