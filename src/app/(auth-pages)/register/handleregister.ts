import axios from "axios";
import { z } from "zod";
import { toast } from "react-hot-toast";

interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	repassword: string;
}

const handleRegister = async (data: User) => {
	const userSchema = z.object({
		firstName: z.string(),
		lastName: z.string(),
		email: z.string().email("Invalid email"),
		password: z.string().min(8, "Password must be at least 8 characters long"),
	});

	const validation = userSchema.safeParse(data);
	if (!validation.success) {
		toast.error(validation.error.errors[0].message);
		throw new Error();
	}
	if (data.password === data.repassword) {
		try {
			await axios.post("/api/register", data);
		} catch (error) {
			toast.error("This account is already registered");
			throw error;
		}
	} else {
		toast.error("Password does not match the confirmation");
		throw new Error();
	}
};
export default handleRegister;
