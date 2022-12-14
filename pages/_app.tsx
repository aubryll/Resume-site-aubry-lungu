import "../styles/globals.css";
import "@fontsource/ibm-plex-sans";
import "@fontsource/dm-mono";
import "@fontsource/bungee-shade";
import "@fontsource/inter";
import type { AppProps } from "next/app";
import { Layout } from "@components/layout";
import React from "react";
import Head from "next/head";
import { ColorModeContextProvider } from "@components/theme/ColorModeContext";
import { StyledEngineProvider } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContextProvider>
        <ParallaxProvider>
          <React.Fragment>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </React.Fragment>
        </ParallaxProvider>
      </ColorModeContextProvider>
    </StyledEngineProvider>
  );
}
