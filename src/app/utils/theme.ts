import { createTheme } from "@mantine/core";

export const theme = createTheme({
  white: "#fff8ff",
  black: "#212121",
  primaryColor: "red",

  // theme?.colors?.primary?.[9]
  colors: {
    primary: [
      "#ea6e43",
      "#C41E3A",
      "#CE93D8",
      "#BA68C8",
      "#dadada",
      "#bcbcbc",
      "#5e5e5e",
      "#0b0f19",
      "#181818",
      "#141414",
    ],
  },

  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    xxl: "105em",
  },
});
