import { getSubjectById } from "@/src/lib/db/subjects/getSubjectById";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    // the request will be like /api/content/subjects/1
    const subjects = await getSubjectById(Number(id));

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subjects" });
  }
}
