"use client";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";

export default function AccountSettings({
	handleEditAccount,
	user,
}: {
	user: any;
	handleEditAccount: any;
}) {
	const { register, handleSubmit } = useForm();

	return (
		<form
			onSubmit={handleSubmit((data: any) => handleEditAccount(data))}
			className="flex mt-4 flex-col gap-10"
		>
			<div className="space-y-2">
				<Label htmlFor="name">Name</Label>
				<Input
					defaultValue={user.firstName}
					id="name"
					placeholder="Enter your name"
					{...register("firstName")}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="lastName">Last Name</Label>
				<Input
					defaultValue={user.lastName}
					id="lastName"
					placeholder="Enter your last name"
					type="text"
					{...register("lastName")}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					defaultValue={user.email}
					id="email"
					placeholder="Enter your email"
					type="email"
					{...register("email")}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="password">Password</Label>
				<Input
					defaultValue={user.password}
					id="password"
					placeholder="Enter your password"
					type="password"
					{...register("password")}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="repassword">Re-Password</Label>
				<Input
					defaultValue={user.password}
					id="repassword"
					placeholder="Confirm your password"
					type="password"
					{...register("repassword")}
				/>
			</div>
			<Button type="submit"> Edit</Button>
		</form>
	);
}
