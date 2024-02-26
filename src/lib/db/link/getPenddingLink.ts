"use server";
import prisma from "@/src/lib/PrismaClient";

export const getPendingLinksBySubject = async (subjects: number[]) => {
	try {
		const links = await prisma.link.findMany({
			where: { status: "PENDING", subjectId: { in: subjects } },
		});
		return links;
	} catch (err) {
		throw err;
	}
};
