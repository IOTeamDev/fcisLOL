"use server";
import prisma from "@/src/lib/PrismaClient";

export const getUserVideos = async (
  userId: number,
  status: "PENDING" | "APPROVED" | "REJECTED"
) => {
  try {
    const videos = await prisma.video.findMany({
      where: {
        userId: userId,
        status: status,
      },
    });

    return videos;
  } catch (err) {
    throw err;
  }
};

prisma.$disconnect();
