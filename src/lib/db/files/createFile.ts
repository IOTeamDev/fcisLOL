"use server";
import prisma from "@/src/lib/PrismaClient";
import { Status } from "@prisma/client";

export const createFile = async (file: any, userRole: string) => {
	let status: Status;
	switch (userRole) {
		case "ADMIN" || "SUPREADMIN":
			status = "APPROVED";
			break;
		default:
			status = "PENDING";
			break;
	}
	try {
		const files = await prisma.file.create({
			data: {
				url: file.url,
				name: file.title,
				subjectId: file.subjectId,
				userId: file.user,
				status: status,
			},
		});
		return files;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
