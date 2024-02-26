"use server";
import prisma from "@/src/lib/PrismaClient";

export const getLinkById = async (linkId: number) => {
	try {
		const link = await prisma.link.findUnique({
			where: {
				id: linkId,
			},
		});
		return link;
	} catch (error) {
		throw new Error("Error fetching link by id");
	}
};

prisma.$disconnect();
