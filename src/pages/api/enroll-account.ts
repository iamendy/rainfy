import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

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
      res.status(500).json({ msg: "error occured" });
    }
  }
}
