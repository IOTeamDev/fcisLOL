"use server";
import prisma from "@/src/lib/PrismaClient";

export const DeleteFile = async (fileId: any) => {
	try {
		const Files = await prisma.video.delete({
			where: { id: fileId },
		});
		return Files;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
