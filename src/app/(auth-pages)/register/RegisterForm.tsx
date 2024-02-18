"use client";
import { useForm } from "react-hook-form";
import handleRegister from "./handleregister";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegisterForm = () => {
	const { register, handleSubmit } = useForm();
	const route = useRouter();

	const submit = async (data: any) => {
		try {
			const user = await handleRegister(data);
			toast.success("تم انشاء الحساب بنجاح سيتم التوجه لتسجيل الدخول");
			setTimeout(() => route.push("/login"), 1200);
		} catch (err) {
			throw err;
		}
	};

	return (
		<form onSubmit={handleSubmit((data: any) => submit(data))}>
			<div className="my-3 flex gap-3 items-center justify-center">
				<div>
					<Label htmlFor="name">Your Name</Label>
					<Input
						id="name"
						placeholder="Name"
						{...register("name")}
						required
						type="text"
					/>
				</div>
				<div>
					<Label htmlFor="lastName">Last Name</Label>
					<Input
						id="lastName"
						placeholder="Last Name"
						{...register("lastName")}
						required
						type="text"
					/>
				</div>
			</div>
			<div className="space-y-2 my-3">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					placeholder="Email"
					{...register("email")}
					required
					type="text"
				/>
			</div>
			<div className="space-y-2 my-3">
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
			<div className="space-y-2 my-3">
				<div className="flex items-center">
					<Label htmlFor="repassword">Confirm Password</Label>
				</div>
				<Input
					id="repassword"
					placeholder="Confirm Password"
					{...register("repassword")}
					required
					type="password"
				/>
			</div>
			<Button className="w-full" type="submit">
				Sign Up
			</Button>
		</form>
	);
};
export default RegisterForm;
