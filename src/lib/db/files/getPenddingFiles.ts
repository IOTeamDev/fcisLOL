"use server";
import prisma from "@/src/lib/PrismaClient";

export const getPendingFilesBySubject = async (subjects: number[]) => {
	try {
		const files = await prisma.video.findMany({
			where: { status: "PENDING", subjectId: { in: subjects } },
		});
		return files;
	} catch (err) {
		throw err;
	}
};
