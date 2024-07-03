import { getPendingFilesBySubject } from "@/src/lib/db/files/getPenddingFiles";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { subjects } = req.body;

  if (
    !Array.isArray(subjects) ||
    subjects.some((subject) => typeof subject !== "number")
  ) {
    res.status(400).json({ error: "Invalid subjects array" });
    return;
  }

  try {
    const files = await getPendingFilesBySubject(subjects);
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pending files" });
  }
}
