import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { gnosisChiado } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

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
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
