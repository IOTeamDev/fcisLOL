"use server";
import prisma from "@/src/lib/PrismaClient";
import { Status } from "@prisma/client";

export const createVideo = async (video: any, userRole: string) => {
	let status: Status;
	switch (userRole) {
		case "ADMIN" || "SUPREADMIN":
			status = "PENDING";
		default:
			status = "PENDING";
			break;
	}
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
