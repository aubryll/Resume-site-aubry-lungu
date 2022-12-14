import React from "react";
import type { ThemeOptions } from "@mui/material/styles";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { createPalette } from "./createPalette";



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

const componentsOverride: ThemeOptions["components"] = {
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
        //color: colors.secondary,
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      //variant: 'h6',
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
          ...createPalette(mode),
        },

        typography: {
          fontFamily: `"IBM Plex Sans", sans-serif`,
          h1: { fontFamily: `"Bungee Shade", cursive` },
          h2: { fontFamily: `"Bungee Shade", cursive` },
          h3: { fontFamily: `"Bungee Shade", cursive` },
          h4: { fontFamily: `"Bungee Shade", cursive` },
          button: { textTransform: "none", fontWeight: 800 },
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
