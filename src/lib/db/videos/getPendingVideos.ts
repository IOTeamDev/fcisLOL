"use server";
import prisma from "@/src/lib/PrismaClient";

export const getPendingVidoesBySubject = async (subjects: number[]) => {
	try {
		const videos = await prisma.video.findMany({
			where: { status: "PENDING", subjectId: { in: subjects } },
		});
		return videos;
	} catch (err) {
		throw err;
	}
};
