import "@emotion/react";
declare module "@emotion/react" {
  export interface Theme {
    color: {
      black: string;
      white: string;
      lightGray: string;
      darkGray: string;
      highlight: string;
    };
    font: {
      size: {
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
      };
      weight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
    };
    borderRad: {
      min: string;
      default: string;
      max: string;
    };
  }
}
