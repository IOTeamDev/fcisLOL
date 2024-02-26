"use server";
import prisma from "@/src/lib/PrismaClient";

export const DeleteLink = async (linkId: any) => {
	try {
		const deletedLink = await prisma.link.delete({
			where: { id: linkId },
		});
		return deletedLink;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
