"use server";
import prisma from "@/src/lib/PrismaClient";

export const getSemesterSubjects = async (semester: undefined | number) => {
	try {
		const subjects = await prisma.subject.findMany({
			where: { semesterId: { equals: semester } },
		});
		return subjects;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
