import React from "react";
import type { ThemeOptions } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material";

const Colors = {
    DARK_BLUE: "#1C1259",
    LIGHT_PURPLE: "#CACAEA",
    PINK: "#EE4266",
    ORANGE: "#FF9B00",
    LIGHT_ORANGE: "#FFD28C",
    BLACK: "#000000",
};

type IColorModeContext = {
  toggleColorMode: () => void;
  mode: "dark" | "light";
};

type ColorModeContextProviderProps = {
    children: React.ReactNode
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "light",
});



export const componentsOverride: ThemeOptions["components"] = {
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                fontSize: "1.125rem",
            },
        },
    },
};

export const ColorModeContextProvider = ({children}: ColorModeContextProviderProps) => {
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


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
            primary: {
                main: Colors.DARK_BLUE,
                contrastText: '#fff'
            },
            secondary: {
                main: "#000000",
            },
        },

        typography: {
            fontFamily: `"IBM Plex Sans", sans-serif`,
            h1: { fontSize: "2.4em", fontFamily: "Plus Jakarta Sans" },
            h2: { fontSize: "2.1em", fontFamily: "Plus Jakarta Sans" },
            h3: { fontSize: "1.7em", fontFamily: "Plus Jakarta Sans" },
            h4: { fontSize: "1.4em", fontFamily: "Plus Jakarta Sans" },
            h5: { fontSize: "1.2em", fontFamily: "Plus Jakarta Sans" },
            h6: { fontSize: "1em", fontFamily: "Plus Jakarta Sans" },
            button: { textTransform: "none" },
        },
        components: {
            ...componentsOverride,
        },
    }),
    [mode]
  );

  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => React.useContext(ColorModeContext)