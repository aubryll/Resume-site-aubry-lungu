import { colors } from "@mui/material";

const common = {
  white: "#e6f1ff",
  blue: "#017FFF",
  lighterBlue: '#66B2FF',
  lightBlue: '#265D97',
  lightNavy: "#031E3C",
  navy: "#0B1929",
};

export const light = {
  primary: {
    main: "#1976d2",
  },
  secondary: {
    main: "#9c27b0",
  },
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: common.white,
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export const dark = {
  primary: {
    main: "#90caf9",
    
  },
  secondary: {
    main: common.blue,
    light: common.lighterBlue,
  },
  text: {
    primary: common.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
  },
  divider: common.lightBlue,
  background: {
    paper: common.lightNavy,
    default: common.navy,
  },
  action: {
    active: common.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: common.lightBlue,
    disabledOpacity: 0.38,
    focus: common.lightBlue,
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

type Palette = "light" | "dark";
export const createPalette = (value: Palette) => {
  return { light, dark }[value];
};
