import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const { address } = req?.query;
    let isUser;

    try {
      const user = await prisma.user.findFirst({
        where: {
          //@ts-ignore
          address,
        },
      });

      if (user?.id) {
        isUser = true;
      } else {
        isUser = false;
      }

      res.status(200).json({ isUser });
    } catch (e) {
      res.status(500).json({ msg: "error occured" });
    }
  }
}
