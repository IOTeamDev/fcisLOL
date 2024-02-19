"use server";
import prisma from "@/src/lib/PrismaClient";
import { Status } from "@prisma/client";
import getVideoThumbnail from "../../getVideoThumbnail";

export const createVideo = async (video: any, userRole: string) => {
  try {
    video.thumbnail = await getVideoThumbnail(video.url);
  } catch (err) {
    throw new Error();
  }
  let status: Status;
  switch (userRole) {
    case "ADMIN" || "SUPREADMIN":
      status = "PENDING";
    default:
      status = "PENDING";
      break;
  }
  try {
    const videos = await prisma.video.create({
      data: {
        url: video.url,
        title: video.title,
        description: video.description,
        thumbnail: video.thumbnail,
        subjectId: video.subject,
        userId: video.user,
        status: "PENDING",
      },
    });
    return videos;
  } catch (err) {
    throw err;
  }
};

prisma.$disconnect();
