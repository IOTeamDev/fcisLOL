"use server";
import prisma from "@/src/lib/PrismaClient";

export const getSubjectById = async (subject: undefined | number) => {
	try {
		const Currentsubject = await prisma.subject.findFirst({
			where: { id: subject },
			include: { videos: true },
		});
		return Currentsubject;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
