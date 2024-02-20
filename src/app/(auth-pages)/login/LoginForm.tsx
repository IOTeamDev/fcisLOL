"use client";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Component() {
	const router = useRouter();

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
				setTimeout(() => {
					router.push("/levels");
					router.refresh();
				}, 750);
			}
		} catch (error) {
			toast.error("An error has occurred");
		}
	};

	return (
		<form
			onSubmit={handleSubmit((data: any) => onSubmit(data))}
			className="mx-auto max-w-sm space-y-6 z-10"
		>
			<div className="space-y-4">
				<div className="grid grid-cols-1 gap-4">
					<div className="space-y-2">
						<Input
							className="bg-transparent"
							id="email"
							placeholder="Email"
							{...register("email")}
							required
							type="email"
						/>
					</div>
					<div className="space-y-2">
						<Input
							className="bg-transparent"
							id="password"
							placeholder="Password"
							{...register("password")}
							required
							type="password"
						/>
					</div>
				</div>
				<Button className="w-full" type="submit">
					Login
				</Button>
			</div>
		</form>
	);
}
