import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";


export const MobileComponent = (component: OverridableComponent<any>) =>
  styled(component)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
