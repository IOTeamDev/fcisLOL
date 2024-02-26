"use server";
import prisma from "@/src/lib/PrismaClient";

export const getUserByEmail = async (
	email: null | undefined | string,
	includeVideos: boolean = false,
	includeSubjects: boolean = false,
	includeFiles: boolean = false,
	includeLinks: boolean = false
) => {
	try {
		const user = await prisma.user.findFirst({
			where: { email: email?.toString() },
			include: {
				videos: includeVideos,
				subjects: includeSubjects,
				files: includeFiles,
				links: includeLinks,
			},
		});
		return user;
	} catch (err) {
		throw err;
	}
};

export const getUserById = async (
	id: undefined | number,
	includeVideos: boolean = false,
	includeSubjects: boolean = false,
	includeFiles: boolean = false
) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: id },
			include: {
				videos: {
					include: {
						subject: includeVideos,
					},
				},
				subjects: includeSubjects,
				files: includeFiles,
			},
		});
		return user;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
