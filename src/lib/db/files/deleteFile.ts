"use server";
import prisma from "@/src/lib/PrismaClient";

export const deleteFile = async (fileId: any) => {
	try {
		const Files = await prisma.file.delete({
			where: { id: fileId },
		});
		return Files;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
