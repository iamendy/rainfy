import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moneriumClient from "../lib/monerium";
import axios from "axios";

const Integration = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");

  const handleRedirect = async () => {
    const b = await moneriumClient?.auth({
      client_id: process.env.NEXT_PUBLIC_MONERIUM_CLIENT_ID as string,
      code: router?.query?.code as string,
      code_verifier: window?.localStorage?.getItem("myCodeVerifier"),
      redirect_uri: "http://localhost:3000/integration",
    });

    console.log(b);
    window.localStorage.setItem("access_token", b.access_token);
    window.localStorage.setItem("user_id", b.userId);

    // // User is now authenticated, get authentication data
    const user = await moneriumClient.getAuthContext();
    // const tokens = await moneriumClient.getTokens();
    // const balances = await moneriumClient.getBalances();
    // const orders = await moneriumClient.getOrders();
    console.log(user);
    // const userTokens = tokens?.filter((d, i) => d.network === "chiado");
    // console.log(userTokens);
    // console.log(balances);
    // console.log(orders);

    // //setAccessToken(moneriumClient.bearerProfile?.access_token);
    // console.log(moneriumClient.bearerProfile);
    // console.log(moneriumClient?.codeVerifier);

    // const res = await axios.post(
    //   `https://api.monerium.dev/profiles/${moneriumClient?.bearerProfile?.userId}`,
    //   {
    //     client_id: process.env.NEXT_PUBLIC_MONERIUM_CLIENT_ID as string,
    //     grant_type: "authorization_code",
    //     code: router?.query?.code as string,
    //     code_verifier: window?.localStorage?.getItem("myCodeVerifier"),
    //     redirect_uri: "http://localhost:3000/integration/monerium",
    //   },
    //   { Authorization: `Bearer ${moneriumClient?.bearerProfile?.access_token}` }
    // );

    // console.log(res);
  };

  useEffect(() => {
    router?.query?.code && handleRedirect();
  }, [router]);

  return <div>integration</div>;
};
export default Integration;
