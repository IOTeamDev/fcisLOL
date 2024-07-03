import { getPendingVidoesBySubject } from "@/src/lib/db/videos/getPendingVideos";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const videos = await getPendingVidoesBySubject(
      req.body.subjectsIds as number[]
    );
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pending videos" });
  }
}
