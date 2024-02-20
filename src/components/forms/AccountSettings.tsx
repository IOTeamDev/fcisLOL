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
import toast from "react-hot-toast";
import { updateUserData } from "../../lib/db/user/updateUserProfile";
import { z } from "zod";

export default function AccountSettings({ user }: { user: any }) {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data: any) => {
		const userSchema = z.object({
			firstName: z.string(),
			lastName: z.string(),
			email: z.string().email("Invalid email"),
			password: z
				.string()
				.min(8, "Password must be at least 8 characters long"),
		});

		const validation = userSchema.safeParse(data);
		if (!validation.success) {
			toast.error(validation.error.errors[0].message);
			throw new Error();
		}
		if (data.password === data.repassword) {
			try {
				await updateUserData(user.email, data);
			} catch (error) {
				toast.error("Error");
				throw error;
			}
		} else {
			toast.error("Password does not match the confirmation");
			throw new Error();
		}
		toast.success("Account updated successfully");
	};
	return (
		<div className=" p-5">
			<section className="flex justify-center items-center">
				<form
					onSubmit={handleSubmit((data: any) => onSubmit(data))}
					className=" flex flex-col gap-10"
				>
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
								<Input
									defaultValue={user.firstName}
									id="name"
									placeholder="Enter your name"
									{...register("firstName")}
								/>
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
						</CardContent>
						<CardFooter className="flex gap-5">
							<Button type="submit">Save</Button>
						</CardFooter>
					</Card>
				</form>
			</section>
		</div>
	);
}
