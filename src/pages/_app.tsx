import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { gnosisChiado } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../components/Layout";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--inter",
});

const { chains, publicClient } = configureChains(
  [gnosisChiado],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Rainfy",
  projectId: projectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`${inter.variable} overflow-hidden`}>
      {isLoaded && (
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} modalSize="compact">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RainbowKitProvider>
        </WagmiConfig>
      )}
    </main>
  );
}

export default MyApp;
