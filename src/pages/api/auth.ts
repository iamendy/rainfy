import type { NextApiRequest, NextApiResponse } from "next";

import { MoneriumClient } from "@monerium/sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    res.status(200).json({ msg: "connected" });

    // const client = new MoneriumClient();

    // await client.auth({
    //   client_id: process.env.MONERIUM_CLIENT_ID,
    //   client_secret: process.env.MONERIUM_CLIENT_SECRET
    // })

    // // User is now authenticated, get authentication data
    // await client.getAuthContext()
  }
}
