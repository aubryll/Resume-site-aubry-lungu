import { createTheme, } from "@mui/material/styles";
import { components } from "./Components";

const Colors = {
    DARK_BLUE: "#1C1259",
    LIGHT_PURPLE: "#CACAEA",
    PINK: "#EE4266",
    ORANGE: "#FF9B00",
    LIGHT_ORANGE: "#FFD28C",
    BLACK: "#000000",
};


export const AppTheme = createTheme({
        palette: {
            primary: {
                main: Colors.DARK_BLUE,
            },
            secondary: {
                main: Colors.ORANGE,
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
            ...components,
        },
    }) 