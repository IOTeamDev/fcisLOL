"use client";
import React, { useRef } from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import toast from "react-hot-toast";
import { updateUserData } from "../../lib/db/user/updateUserProfile";
import { z } from "zod";
import AccountSettings from "@/src/components/forms/AccountSettings";

const EditProfileButton = ({ user }: { user: any }) => {
	const buttonRef = useRef(null);
	const handleEditAccount = async (data: any) => {
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
		if (buttonRef.current) {
			const middle: any = buttonRef.current;
			middle.click();
		}
		toast.success("Account updated successfully");
	};
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Edit Profile</Button>
			</SheetTrigger>
			<SheetContent side={"right"}>
				<SheetHeader>
					<SheetTitle>Account Settings</SheetTitle>
					<SheetDescription>
						Update your account information 😀. Changes will be reflected across
						all pages.
					</SheetDescription>
				</SheetHeader>
				<AccountSettings user={user} handleEditAccount={handleEditAccount} />
				<SheetClose ref={buttonRef}></SheetClose>
			</SheetContent>
		</Sheet>
	);
};

export default EditProfileButton;
