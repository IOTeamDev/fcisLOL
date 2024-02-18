"use server";
import prisma from "@/src/lib/PrismaClient";

export const getSubjectVideos = async (videoId: any) => {
	try {
		const videos = await prisma.video.delete({
			where: { id: videoId },
		});
		return videos;
	} catch (err) {
		throw err;
	}
};
