"use server";
import prisma from "@/src/lib/PrismaClient";

export const updateVideo = async (videoId: number, data: any) => {
  const video = await prisma.video.update({
    where: {
      id: videoId,
    },
    data: { ...data },
    // if a field is not provided, it will not be updated
  });
  return video;
};

prisma.$disconnect();
