import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MoneriumClient } from "@monerium/sdk";
import { useAccount, useSignMessage } from "wagmi";
import { useRouter } from "next/router";

const client = new MoneriumClient();

const Home = () => {
  const { address } = useAccount();
  const router = useRouter();
  // const handleAuth = async () => {
  //   console.log("here");

  //   await client.auth({
  //     client_id: "79691760-4dd0-11ee-b815-ee8d7d4f3bed",
  //     client_secret:
  //       "f2ee33906d0a5897f51d7af54fdf217297c3c9b09b7b144e636298e10e2bbca5",
  //   });

  //   const res = await client.getAuthContext();
  //   console.log(res);
  // };

  const { signMessageAsync } = useSignMessage({
    message: "I hereby declare that I am the address owner.",
    onSuccess(data) {
      processMonerium(data);
    },
  });

  const handleAuth = async () => {
    await signMessageAsync();
  };

  const processMonerium = async (signature: string) => {
    // Construct the authFlowUrl for your application and redirect your customer.
    let authFlowUrl = client.getAuthFlowURI({
      client_id: process.env.NEXT_PUBLIC_MONERIUM_CLIENT_ID as string,
      // optional automatic wallet selection:
      network: "chiado",
      chain: "gnosis",
      address: address,
      signature,
    });

    // Store the code verifier in localStorage
    window.localStorage.setItem("myCodeVerifier", client.codeVerifier);
    // Redirecting to the Monerium onboarding / Authentication flow.
    window.location.replace(authFlowUrl);
  };

  return (
    <main className="flex flex-col gap-y-5 px-4 py-3">
      <div className="flex justify-between items-center">
        <div>Hello world</div>
        <ConnectButton />
      </div>
      <div>
        <button
          className="p-2 bg-black text-white"
          onClick={() => handleAuth()}
        >
          {" "}
          Connect Monerium
        </button>
      </div>
    </main>
  );
};

export default Home;
