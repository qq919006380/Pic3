import React from "react";
import "../../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { bsc, bscTestnet, filecoin, filecoinCalibration } from "wagmi/chains";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/layout/Layout";
import PropTypes from "prop-types";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [filecoin, filecoinCalibration, bscTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Pic3",
  projectId: "d2ed2b1fc85148af7763557a31a7e332",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors,
});

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          <Layout>
            <NextNProgress options={{ showSpinner: false }} />
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </SnackbarProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
