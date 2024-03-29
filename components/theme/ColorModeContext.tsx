import React from "react";
import type { ThemeOptions } from "@mui/material/styles";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
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
  mode: "light",
});

const componentsOverride: ThemeOptions["components"] = {
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: "1.125rem",
      },
    },
  },

  MuiCssBaseline: {
    styleOverrides: `
    @font-face {
      font-family: 'PlusJakartaSans';
      font-style: bold;
      font-weight: 800;
      src: url("/fonts/PlusJakartaSans-ExtraBold.woff");
      font-display: optional;
    }
    `,
  },
};

export const ColorModeContextProvider = ({
  children,
}: ColorModeContextProviderProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  React.useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...createPalette(mode),
        },
        typography: {
          fontFamily: `"IBM Plex Sans", sans-serif`,
          h1: { fontSize: "8em", fontFamily: `PlusJakartaSans` },
          h2: { fontFamily: `PlusJakartaSans` },
          h3: { fontFamily: `PlusJakartaSans` },
          h4: { fontFamily: `PlusJakartaSans` },
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
