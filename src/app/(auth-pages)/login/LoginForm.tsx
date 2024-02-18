"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Component() {
	const route = useRouter();

	const { register, handleSubmit } = useForm();

	const onSubmit = async (data: any) => {
		const { email, password } = data;

		try {
			// our login logic
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false, // Set to false to handle redirection manually
			});

			if (res?.error) {
				toast.error("Invaild credentials");
			} else {
				toast.success("Login successful");
				setTimeout(() => route.push("/years"), 750);
			}
		} catch (error) {
			toast.error("An error has occurred");
		}
	};

	return (
		<form
			onSubmit={handleSubmit((data: any) => onSubmit(data))}
			className="space-y-4 dark:text-white"
		>
			<div className="space-y-2 ">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					placeholder="Email"
					{...register("email")}
					required
					type="email"
				/>
			</div>
			<div className="space-y-2">
				<div className="flex items-center">
					<Label htmlFor="password">Password</Label>
				</div>
				<Input
					id="password"
					placeholder="Password"
					{...register("password")}
					required
					type="password"
				/>
			</div>
			<Button className="w-full" type="submit">
				Login
			</Button>
		</form>
	);
}
