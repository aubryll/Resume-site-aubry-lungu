import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";


export const DesktopComponent = (component: OverridableComponent<any>) =>
  styled(component)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

