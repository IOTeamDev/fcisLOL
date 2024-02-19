import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AccountSettings({
	setShowModal,
}: {
	setShowModal: any;
}) {
	return (
		<div className=" p-5">
			<section className="flex justify-center items-center">
				<form className=" flex flex-col gap-10">
					<Card className="w-full max-w-3xl">
						<CardHeader>
							<CardTitle>Account Settings</CardTitle>
							<CardDescription>
								Update your account information. Changes will be reflected
								across all platforms.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Enter your name" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" placeholder="Enter your email" type="email" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									placeholder="Enter your password"
									type="password"
								/>
							</div>
							<div className="space-y-2">
								<Label>Profile Picture</Label>
								<Input id="file" type="file" />
							</div>
						</CardContent>
						<CardFooter className="flex gap-5">
							<Button>Save</Button>
							<Button variant="ghost" onClick={() => setShowModal(false)}>
								Cancel
							</Button>
						</CardFooter>
					</Card>
				</form>
			</section>
		</div>
	);
}
