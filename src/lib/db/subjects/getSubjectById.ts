"use server";
import prisma from "@/src/lib/PrismaClient";

export const getSubjectById = async (subject: undefined | number) => {
  try {
    const Currentsubject = await prisma.subject.findFirst({
      where: { id: subject },
      include: {
        videos: {
          where: { status: "APPROVED" },
        },
        files: {
          where: { status: "APPROVED" },
        },
      },
    });
    return Currentsubject;
  } catch (err) {
    throw err;
  }
};

prisma.$disconnect();
