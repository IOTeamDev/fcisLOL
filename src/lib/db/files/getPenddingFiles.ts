"use server";
import prisma from "@/src/lib/PrismaClient";

export const getPendingFilesBySubject = async (subjectsIds: number[]) => {
	try {
		const files = await prisma.file.findMany({
			where: { status: "PENDING", subjectId: { in: subjectsIds } },
		});
		return files;
	} catch (err) {
		throw err;
	}
};
