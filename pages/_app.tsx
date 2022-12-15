import "../styles/globals.css";
import "@fontsource/ibm-plex-sans";
import type { AppProps } from "next/app";
import { Layout } from "@components/layout";
import React from "react";
import Head from "next/head";
import { ColorModeContextProvider } from "@components/theme/ColorModeContext";
import { StyledEngineProvider } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContextProvider>
        <ParallaxProvider>
          <React.Fragment>
            <Head>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <meta name="description" content="Aubry Lungu" />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest" />
              <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
              />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff" />
              <title>Aubry Lungu</title>
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Analytics/>
          </React.Fragment>
        </ParallaxProvider>
      </ColorModeContextProvider>
    </StyledEngineProvider>
  );
}
