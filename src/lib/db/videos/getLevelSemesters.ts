"use server";
import prisma from "@/src/lib/PrismaClient";

export const getLevelSemesters = async (level: number) => {
	try {
		const semesters = await prisma.semester.findMany({
			where: {
				levelId: level,
			},
		});

		return semesters;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
