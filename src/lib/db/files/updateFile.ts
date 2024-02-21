"use server";
import prisma from "@/src/lib/PrismaClient";

export const updateFile = async (fileId: number, data: any) => {
	const video = await prisma.file.update({
		where: {
			id: fileId,
		},
		data: {
			...data,
			updatedAt: new Date(),
		},
	});
	return video;
};
