"use server";
import prisma from "@/src/lib/PrismaClient";

enum Status {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export const getSubjectVideosByStatus = async (
  status?: string,
  SubjectId?: number
) => {
  switch (status) {
    case Status.PENDING:
      try {
        const videos = await prisma.video.findMany({
          where: { status: "PENDING" },
        });
        return videos;
      } catch (err) {
        throw err;
      }
    case Status.APPROVED:
      try {
        const videos = await prisma.video.findMany({
          where: { status: "APPROVED", subjectId: SubjectId },
        });
        return videos;
      } catch (err) {
        throw err;
      }
    case Status.REJECTED:
      try {
        const videos = await prisma.video.findMany({
          where: { status: "REJECTED" },
        });
        return videos;
      } catch (err) {
        throw err;
      }
    default:
      try {
        const videos = await prisma.video.findMany();
        return videos;
      } catch (err) {
        throw err;
      }
  }
};

prisma.$disconnect();
