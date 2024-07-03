import { getPendingLinksBySubject } from "@/src/lib/db/link/getPenddingLink";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const files = await getPendingLinksBySubject(
      req.body.subjectsIds as number[]
    );
    // the request will be like /api/content/pendingLinks
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pending files" });
  }
}
