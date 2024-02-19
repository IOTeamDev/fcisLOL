"use server";
import prisma from "@/src/lib/PrismaClient";

export const getVideoById = async (videoId: number) => {
  const video = await prisma.video.findUnique({
    where: {
      id: videoId,
    },
  });
  return video;
}

prisma.$disconnect();
