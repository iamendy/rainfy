import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const { address } = req?.query;

    try {
      const user = await prisma.user.findUnique({
        where: {
          //@ts-ignore
          address,
        },
      });

      res.status(200).json(user);
    } catch (e) {
      res.status(500).json({ msg: "error occured" });
    }
  }
}
