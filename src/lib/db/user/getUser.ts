"use server";
import prisma from "@/src/lib/PrismaClient";

export const getUserByEmail = async (
	email: null | undefined | string,
	includeVideos: boolean = false
) => {
	try {
		const user = await prisma.user.findFirst({
			where: { email: email?.toString() },
			include: {
				videos: includeVideos,
			},
		});
		return user;
	} catch (err) {
		throw err;
	}
};

export const getUserById = async (
	id: undefined | number,
	includeVideos: boolean = false
) => {
	try {
		const user = await prisma.user.findFirst({
			where: { id: id },
			include: {
				videos: includeVideos,
			},
		});
		return user;
	} catch (err) {
		throw err;
	}
};
