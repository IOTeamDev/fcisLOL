"use server";
import prisma from "@/src/lib/PrismaClient";

export const getFileById = async (fileId: number) => {
  try {
    const file = await prisma.file.findUnique({
      where: {
        id: fileId,
      },
    });
    return file;
  } catch (error) {
    throw new Error("Error fetching file by id");
  }
};

prisma.$disconnect();
