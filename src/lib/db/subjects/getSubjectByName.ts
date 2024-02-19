"use server";
import prisma from "@/src/lib/PrismaClient";

export const getSubjectByName = async (subjectName: string) => {
	try {
		const subjects = await prisma.subject.findFirst({
			where: { name: subjectName },
		});
		return subjects;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
