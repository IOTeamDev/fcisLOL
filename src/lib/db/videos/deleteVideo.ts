"use server";
import prisma from "@/src/lib/PrismaClient";

export const DeleteVideo = async (videoId: any) => {
	try {
		const videos = await prisma.video.delete({
			where: { id: videoId },
		});
		return videos;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
