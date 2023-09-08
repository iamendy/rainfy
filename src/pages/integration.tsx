import { useEffect } from "react";
import { useRouter } from "next/router";
import { MoneriumClient } from "@monerium/sdk";
const client = new MoneriumClient();

const Integration = () => {
  const router = useRouter();

  const handleRedirect = async () => {
    await client?.auth({
      client_id: process.env.NEXT_PUBLIC_MONERIUM_CLIENT_ID as string,
      code: router?.query?.code as string,
      code_verifier: window.localStorage.getItem("myCodeVerifier"),
    });

    // User is now authenticated, get authentication data
    const user = await client.getAuthContext();
    console.log(user);
  };

  useEffect(() => {
    router?.query?.code && handleRedirect();
  }, [router]);

  return <div>integration</div>;
};
export default Integration;
