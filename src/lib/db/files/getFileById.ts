"use server";
import prisma from "@/src/lib/PrismaClient";

export const getFileById = async (fileId: number) => {
	try {
		const file = await prisma.file.findUnique({
			where: {
				id: fileId,
			},
		});
		return file;
	} catch (error) {
		console.error(error);
		return null;
	}
};

prisma.$disconnect();
