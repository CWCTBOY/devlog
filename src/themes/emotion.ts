import { Theme } from "@emotion/react";

const theme: Theme = {
  color: {
    black: "#000000",
    white: "#F2F2F2",
    lightGray: "#A6A6A6",
    darkGray: "#575759",
    highlight: "#96F2D7",
  },
  font: {
    size: {
      s: "10px",
      m: "14px",
      l: "18px",
      xl: "20px",
      xxl: "24px",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 600,
    },
  },
  borderRad: {
    min: "5px",
    default: "10px",
    max: "15px",
  },
};

export default theme;
