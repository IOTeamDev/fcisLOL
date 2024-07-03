"use server";
import prisma from "@/src/lib/PrismaClient";

export const updateLink = async (linkId: number, data: any) => {
	const video = await prisma.link.update({
		where: {
			id: linkId,
		},
		data: {
			...data,
			updatedAt: new Date(),
		},
	});
	return video;
};
