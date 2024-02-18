import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
	return (
		<form className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input id="email" placeholder="Email" required type="email" />
			</div>
			<div className="space-y-2">
				<div className="flex items-center">
					<Label htmlFor="password">Password</Label>
				</div>
				<Input id="password" placeholder="Password" required type="password" />
			</div>
			<Button className="w-full" type="submit">
				Login
			</Button>
		</form>
	);
}
