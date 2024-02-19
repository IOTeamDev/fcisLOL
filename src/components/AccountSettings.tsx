/**
 * v0 by Vercel.
 * @see https://v0.dev/t/445a2UTOZU6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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

export default function AccountSettings() {
	return (
		<div className="px-40 py-20 max-md:px-20 max-md:py-10">
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
						<CardFooter>
							<Button>Save</Button>
						</CardFooter>
					</Card>
				</form>
			</section>
		</div>
	);
}
