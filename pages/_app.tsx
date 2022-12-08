import "../styles/globals.css";
import "@fontsource/roboto";
import "@fontsource/ibm-plex-sans";
import "@fontsource/plus-jakarta-sans";
import type { AppProps } from "next/app";
import { Layout } from "@components/layout";
import React from "react";
import Head from "next/head";
import { ColorModeContextProvider } from "@components/context/ColorModeContext";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeContextProvider>
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
    </ColorModeContextProvider>
  );
}
