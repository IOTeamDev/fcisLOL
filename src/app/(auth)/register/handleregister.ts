import axios from "axios";
import { z } from "zod";
import { toast } from "react-hot-toast";

interface user {
	id: string;
	name: string;
	lastName: string;
	phone: string;
	parentPhone: string;
	email: string;
	password: string;
	repassword: string;
}

const handleRegister = async (data: user) => {
	const userSchema = z.object({
		name: z.string(),
		email: z.string().email("البريد الإكتروني غير مناسب"),
		password: z.string().min(8, "كلمة المرور يجب ألا تقل عن 8 احرف"),
	});

	const vaildtaion = userSchema.safeParse(data);
	if (!vaildtaion.success) {
		toast.error(vaildtaion.error.errors[0].message);
		throw new Error();
	}
	if (data.password === data.repassword) {
		try {
			const user = await axios.post("/api/register", data);
			return user.data;
		} catch (error) {
			toast.error("هذا الحساب مسجل سابقاً");
			throw error;
		}
	} else {
		toast.error("كلمة المرور لا تطابق التأكيد");
		throw new Error();
	}
};
export default handleRegister;
