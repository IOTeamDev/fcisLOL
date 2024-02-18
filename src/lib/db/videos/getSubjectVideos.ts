"use server";
import prisma from "@/src/lib/PrismaClient";

export const getSubjectVideos = async (subject: undefined | number) => {
	try {
		const videos = await prisma.video.findMany({
			where: { subjectId: subject },
		});
		return videos;
	} catch (err) {
		throw err;
	}
};
