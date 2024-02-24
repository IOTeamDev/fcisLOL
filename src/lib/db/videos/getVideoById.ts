"use server";
import prisma from "@/src/lib/PrismaClient";

export const getVideoById = async (videoId: number) => {
  try {
    const video = await prisma.video.findUnique({
      where: {
        id: videoId,
      },
    });
    return video;
  } catch (error) {
    throw new Error("Error fetching video by id");
  }
};

prisma.$disconnect();
