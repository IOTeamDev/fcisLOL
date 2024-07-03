// ### Small Doc
// #### Base URL
// /api/users

// #### Methods and Usage

// 1. Get User by Email
//    - Method: GET
//    - Endpoint: `/api/user?email=<email>&includeVideos=<boolean>&includeSubjects=<boolean>&includeFiles=<boolean>&includeLinks=<boolean>`
//    - Example: `/api/user?email=john.doe@example.com&includeVideos=true&includeSubjects=false&includeFiles=false&includeLinks=true`
//    - Response: Returns the user details.

// 2. Get User by ID
//    - Method: GET
//    - Endpoint: `/api/user?id=<id>&includeVideos=<boolean>&includeSubjects=<boolean>&includeFiles=<boolean>&includeLinks=<boolean>`
//    - Example: `/api/user?id=1&includeVideos=true&includeSubjects=false&includeFiles=false&includeLinks=true`
//    - Response: Returns the user details.

// 3. Get User Videos by Status
//    - Method: GET
//    - Endpoint: `/api/user?userId=<userId>&status=<status>`
//    - Example: `/api/user?userId=1&status=APPROVED`
//    - Response: Returns the list of videos for the user with the specified status.

// 4. Update User Profile
//    - Method: PUT
//    - Endpoint: `/api/user`
//    - Body: JSON object containing user data
//      ```json
//      {
//        "email": "john.doe@example.com",
//        "data": {
//          "firstName": "John",
//          "lastName": "Doe",
//          "email": "john.doe@example.com",
//          "password": "newpassword123"
//        }
//      }
//      ```
//    - Response: Returns the updated user details.

// - Make sure to replace `<email>`, `<id>`, `<userId>`, `<status>` with actual values.
// - `status` for videos can be one of `PENDING`, `APPROVED`, `REJECTED`.

import type { NextApiRequest, NextApiResponse } from "next";
import { getUserByEmail, getUserById } from "@/src/lib/db/user/getUser";
import { updateUserData } from "@/src/lib/db/user/updateUserProfile";
import { getUserVideos } from "@/src/lib/db/user/getUserVideos";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      if (req.query.email) {
        try {
          const user = await getUserByEmail(
            req.query.email.toString(),
            req.query.includeVideos === "true",
            req.query.includeSubjects === "true",
            req.query.includeFiles === "true",
            req.query.includeLinks === "true"
          );
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ error: "Failed to fetch user by email" });
        }
      } else if (req.query.id) {
        try {
          const user = await getUserById(
            Number(req.query.id),
            req.query.includeVideos === "true",
            req.query.includeSubjects === "true",
            req.query.includeFiles === "true",
            req.query.includeLinks === "true"
          );
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ error: "Failed to fetch user by ID" });
        }
      } else if (req.query.userId && req.query.status) {
        try {
          const videos = await getUserVideos(
            Number(req.query.userId),
            req.query.status as "PENDING" | "APPROVED" | "REJECTED"
          );
          res.status(200).json(videos);
        } catch (error) {
          res.status(500).json({ error: "Failed to fetch user videos" });
        }
      }
      break;

    case "PUT":
      try {
        const updatedUser = await updateUserData(req.body.email, req.body.data);
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(500).json({ error: "Failed to update user profile" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
