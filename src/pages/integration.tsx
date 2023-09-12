import { useEffect } from "react";
import { useRouter } from "next/router";
import moneriumClient from "../lib/monerium";
import axios from "axios";
import Loader from "../components/icons/Loader";
import { useAccount } from "wagmi";

const Integration = () => {
  const router = useRouter();
  const { address } = useAccount();

  const handleAuth = async () => {
    await moneriumClient?.auth({
      client_id: process.env.NEXT_PUBLIC_MONERIUM_CLIENT_ID as string,
      code: router?.query?.code as string,
      code_verifier: window?.localStorage?.getItem("myCodeVerifier"),
      redirect_uri: "http://localhost:3000/integration",
    });

    // // User is now authenticated, get authentication data
    const { email } = await moneriumClient.getAuthContext();

    console.log(email);

    axios
      .post("/api/enroll-account", {
        address,
        email,
      })
      .then((d) => router.push("/dashboard"))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    router?.query?.code && handleAuth();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-full flex-col">
      <Loader />
      Creating savings environment
    </div>
  );
};
export default Integration;
