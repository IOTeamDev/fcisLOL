"use client";
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
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { updateUserData } from "../lib/db/user/updateUserProfile";

export default function AccountSettings({
	user,
	setShowModal,
}: {
	user: any;
	setShowModal: any;
}) {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data: any) => {
		try {
			await updateUserData(user.email, data);
		} catch (error) {
			toast.error("An error has occurred");
		}
		toast.success("Successfully updated");
		setShowModal(false);
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
								<Label>Profile Picture</Label>
								<Input id="file" type="file" />
							</div>
						</CardContent>
						<CardFooter className="flex gap-5">
							<Button type="submit">Save</Button>
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
