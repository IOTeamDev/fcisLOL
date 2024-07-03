import { createVideo } from "@/src/lib/db/videos/createVideo";
import { DeleteVideo } from "@/src/lib/db/videos/deleteVideo";
import { getVideoById } from "@/src/lib/db/videos/getVideoById";
import { updateVideo } from "@/src/lib/db/videos/updateVideo";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      if (req.query.id) {
        try {
          const video = await getVideoById(Number(req.query.id));
          res.status(200).json(video);
        } catch (error) {
          res.status(500).json({ error: "Failed to fetch video" });
        }
      }
      break;

    case "POST":
      try {
        const newVideo = await createVideo(req.body, req.body.userRole);
        res.status(201).json(newVideo);
      } catch (error) {
        res.status(500).json({ error: "Failed to create video" });
      }
      break;

    case "PUT":
      try {
        const updatedVideo = await updateVideo(
          Number(req.query.id),
          req.body.data
        );
        res.status(200).json(updatedVideo);
      } catch (error) {
        res.status(500).json({ error: "Failed to update video" });
      }
      break;

    case "DELETE":
      try {
        await DeleteVideo(req.body.id);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: "Failed to delete video" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
