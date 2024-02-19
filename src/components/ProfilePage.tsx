import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function ProfilePage({ user }: { user: any }) {
	return (
		<Card className="max-w-[70%] p-20">
			<CardContent className="space-y-4">
				<div className="flex space-x-4 pb-10 border-b">
					<div className="flex items-center space-x-4">
						<Avatar className="h-20 w-20">
							<img
								alt="Avatar"
								className="rounded-full aspect-square"
								height="96"
								src="/avatart.png"
								width="96"
							/>
						</Avatar>
						<div className="space-y-1.5">
							<h1 className="text-3xl font-bold">
								{user.firstName} {user.lastName}
							</h1>
							<Button size="sm">Edit profile</Button>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<h2 className="text-2xl font-bold">Recent Videos</h2>
					<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<li className="flex space-x-4">
							<img
								alt="Post thumbnail"
								className="rounded-lg aspect-3/2 object-cover"
								height="100"
								src="/placeholder.png"
								width="150"
							/>
							<div className="space-y-1.5">
								<h3 className="text-lg font-semibold">
									Exploring the Redwoods
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Enjoying a peaceful hike among the ancient giants. 🌲
								</p>
								<p className="text-sm font-medium">2 hours ago</p>
							</div>
						</li>
						<li className="flex space-x-4">
							<img
								alt="Post thumbnail"
								className="rounded-lg aspect-3/2 object-cover"
								height="100"
								src="/placeholder.svg"
								width="150"
							/>
							<div className="space-y-1.5">
								<h3 className="text-lg font-semibold">Sunset at Baker Beach</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									The sky is painted in beautiful hues of orange and pink. 🌅
								</p>
								<p className="text-sm font-medium">1 day ago</p>
							</div>
						</li>
					</ul>
				</div>
			</CardContent>
		</Card>
	);
}
