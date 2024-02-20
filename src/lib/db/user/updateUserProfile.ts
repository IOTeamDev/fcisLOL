"use server";
import prisma from "@/src/lib/PrismaClient";

export const updateUserData = async (email: string, data: any) => {
	try {
		const user = await prisma.user.update({
			where: { email: email?.toString() },
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
			},
		});
		return user;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
