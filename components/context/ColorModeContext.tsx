import React from "react";
import type { ThemeOptions } from "@mui/material/styles";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

const colors = {
  navy: "#0a192f",
  lightNavy: "#112240",
  lightestNavy: "#233554",
  slate: "#8892b0",
  lightSlate: "#a8b2d1",
  lightestSlate: "#ccd6f6",
  white: "#e6f1ff",
  green: "#64ffda",
};

type IColorModeContext = {
  toggleColorMode: () => void;
  mode: "dark" | "light";
};

type ColorModeContextProviderProps = {
  children: React.ReactNode;
};

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "dark",
});

export const componentsOverride: ThemeOptions["components"] = {
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: "1.125rem",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      outlined: {
        color: colors.green,
      },
    },
  },
};

export const ColorModeContextProvider = ({
  children,
}: ColorModeContextProviderProps) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: colors.navy,
            paper: colors.navy,
          },
          primary: {
            main: colors.navy,
            contrastText: colors.white,
          },
          secondary: {
            main: colors.green,
          },
          text: {
            primary: colors.white,
          },
          divider: colors.white,
        },

        typography: {
          fontFamily: `"IBM Plex Sans", sans-serif`,
          h1: { fontFamily: `"Bungee Shade", cursive` },
          h2: { fontFamily: `"Bungee Shade", cursive` },
          h3: { fontFamily: `"Bungee Shade", cursive` },
          h4: { fontFamily: `"Bungee Shade", cursive` },
          button: { textTransform: "none", fontFamily: `"DM Mono", monospace` },
        },
        components: {
          ...componentsOverride,
        },
      }),
    [mode]
  );

  const responsiveFontTheme = responsiveFontSizes(theme);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={responsiveFontTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
