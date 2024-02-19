"use server";
import prisma from "@/src/lib/PrismaClient";

export const getAllPending = async () => {
  try {
    const videos = await prisma.video.findMany({
      where: { status: "PENDING" },
    });
    return videos;
  } catch (err) {
    throw err;
  }
};
