"use server";
import prisma from "@/src/lib/PrismaClient";
import { Status } from "@prisma/client";

export const createLink = async (link: any, userRole: string) => {
	let status: Status;
	switch (userRole) {
		case "ADMIN":
		case "SUPERADMIN":
			status = "APPROVED";
			break;
		default:
			status = "PENDING";
			break;
	}
	try {
		const createdLink = await prisma.link.create({
			data: {
				url: link.url,
				title: link.title,
				description: link.description,
				subjectId: link.subjectId,
				userId: link.user,
				status: status,
			},
		});
		return createdLink;
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
