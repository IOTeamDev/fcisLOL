"use server";
import prisma from "@/src/lib/PrismaClient";

export const getUserVideos = async (user: number) => {
  try {
    const videos = await prisma.video.findMany({
      where: {
        userId: user,
      },
    });

    return videos;
  } catch (err) {
    throw err;
  }
};

prisma.$disconnect();
