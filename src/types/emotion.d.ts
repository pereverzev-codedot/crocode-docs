import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: {
      values: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };

      up: (key: string) => string;
      down: (key: string) => string;
      between: (min: string, max: string) => string;
    };

    shadows: {
      modalMenu: string;
      modal: string;
      tooltip: string;
      bottom: string;
    };

    typography: {
      fontFamily: string;
    };

    palette: {
      accent: string;
      hover: string;
      darkHover: string;
      border: string;
      active: string;

      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
        placeholder: string;
      };
    };
  }
}
