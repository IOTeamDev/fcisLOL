import { getSemesterSubjects } from "@/src/lib/db/subjects/getSemesterSubjects";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    // the request will be like /api/content/semesters/1
    const subjects = await getSemesterSubjects(Number(id));

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subjects" });
  }
}
