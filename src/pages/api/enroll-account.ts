import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { address, email } = req.body;
    try {
      await prisma.user.create({
        data: {
          email,
          address,
        },
      });
      res.status(200).json({ msg: "success" });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          res.status(500).json({
            msg: "There is a unique constraint violation, a new user cannot be created with this email",
          });
        }
      }
      throw e;
    }
  }
}
