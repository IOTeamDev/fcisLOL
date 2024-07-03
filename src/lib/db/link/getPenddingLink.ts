"use server";
import prisma from "@/src/lib/PrismaClient";

export const getPendingLinksBySubject = async (subjectsIds: number[]) => {
	try {
		const links = await prisma.link.findMany({
			where: { status: "PENDING", subjectId: { in: subjectsIds } },
		});
		return links;
	} catch (err) {
		throw err;
	}
};
