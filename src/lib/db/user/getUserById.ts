"use server";
import prisma from "@/src/lib/PrismaClient";

export const getUserById = async (id: number) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: id,
			},
		});

		return user;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
