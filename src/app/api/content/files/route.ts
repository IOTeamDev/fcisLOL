import type { NextApiRequest, NextApiResponse } from "next";
import { createFile } from "@/src/lib/db/files/createFile";
import { deleteFile } from "@/src/lib/db/files/deleteFile";
import { getFileById } from "@/src/lib/db/files/getFileById";
import { updateFile } from "@/src/lib/db/files/updateFile";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      if (req.query.id) {
        try {
          const file = await getFileById(Number(req.query.id));
          // the request will be like /api/content/files/1
          res.status(200).json(file);
        } catch (error) {
          res.status(500).json({ error: "Failed to fetch file" });
        }
      }
      break;

      case 'POST':
        try {
            const newFile = await createFile(req.body, req.body.userRole);
            res.status(201).json(newFile);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create file' });
        }
        break;

    case "PUT":
      try {
        const updatedFile = await updateFile(Number(req.query.id), req.body.data);
        res.status(200).json(updatedFile);
      } catch (error) {
        res.status(500).json({ error: "Failed to update file" });
      }
      break;

    case "DELETE":
      try {
        await deleteFile(req.body.id);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: "Failed to delete file" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
