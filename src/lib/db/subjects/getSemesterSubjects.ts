"use server";
import prisma from "@/src/lib/PrismaClient";

export const getSubjectVideos = async (semester: undefined | number) => {
	try {
		const videos = await prisma.subject.findMany({
			where: { semesterId: semester },
		});
		return videos;
	} catch (err) {
		throw err;
	}
};
