import type { ThemeOptions } from "@mui/material/styles";

export const components: ThemeOptions["components"] = {
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                fontSize: "1.125rem",
            },
        },
    },
};
