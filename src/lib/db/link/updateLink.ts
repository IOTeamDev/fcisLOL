"use server";
import prisma from "@/src/lib/PrismaClient";

export const updatelink = async (linkId: number, data: any) => {
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
