"use server";
import prisma from "@/src/lib/PrismaClient";

export const getSubjectVideos = async (video: any) => {
	try {
		const videos = await prisma.video.create({
			data: {
				url: video.url,
				title: video.title,
				description: video.description,
				subjectId: video.subject,
				userId: video.user,
				status: "PENDING",
			},
		});
		return videos;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
