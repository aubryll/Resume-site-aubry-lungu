import "../styles/globals.css";
import "@fontsource/roboto";
import "@fontsource/ibm-plex-sans";
import "@fontsource/plus-jakarta-sans";
import type { AppProps } from "next/app";
import { Layout } from "@components/layout";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { AppTheme } from "../components/theme";
import Head from "next/head";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const MyLayout = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default function MyApp(props: AppProps) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        ...AppTheme,
        palette: {
          ...AppTheme.palette,
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyLayout {...props} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
