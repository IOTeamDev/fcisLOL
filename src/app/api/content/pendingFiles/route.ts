import { getPendingFilesBySubject } from "@/src/lib/db/files/getPenddingFiles";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const files = await getPendingFilesBySubject(
      req.body.subjectsIds as number[]
    );
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pending files" });
  }
}
