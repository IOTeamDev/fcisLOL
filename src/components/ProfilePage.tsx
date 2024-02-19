/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fZ10YgGMzOI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function ProfilePage() {
	return (
		<Card className="max-w-[70%]">
			<CardContent className="space-y-4">
				<div className="flex space-x-4">
					<div className="flex items-center space-x-4">
						<Avatar className="h-20 w-20">
							<img
								alt="Avatar"
								className="rounded-full aspect-square"
								height="96"
								src="/placeholder.svg"
								width="96"
							/>
						</Avatar>
						<div className="space-y-1.5">
							<h1 className="text-3xl font-bold">jessjones</h1>
							<Button size="sm">Edit profile</Button>
						</div>
					</div>
					<div className="grid grid-cols-2 items-center space-y-2 text-center sm:grid-cols-1 sm:space-y-0">
						<div>
							<div className="text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
								Location
							</div>
							<div>San Francisco, CA</div>
						</div>
						<div>
							<div className="text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
								Occupation
							</div>
							<div>Product Designer</div>
						</div>
						<div>
							<div className="text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
								Interests
							</div>
							<div>Photography, Hiking, UX Design</div>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<div className="text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
						Bio
					</div>
					<div>
						Avid photographer and nature enthusiast. I love capturing the beauty
						of the great outdoors. Let's connect and share our adventures!
					</div>
				</div>
				<div className="space-y-2">
					<h2 className="text-2xl font-bold">Recent Posts</h2>
					<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<li className="flex space-x-4">
							<img
								alt="Post thumbnail"
								className="rounded-lg aspect-3/2 object-cover"
								height="100"
								src="/placeholder.svg"
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
