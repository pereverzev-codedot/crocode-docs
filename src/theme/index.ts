const theme = {
  breakpoints: {
    values: {
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
      xxl: 1692,
    },

    up(key: string) {
      return `@media (min-width: ${this.values[key as keyof typeof this.values]}px)`;
    },
    down(key: string) {
      return `@media (max-width: ${this.values[key as keyof typeof this.values] - 0.02}px)`;
    },
    between(min: string, max: string) {
      return `@media (min-width: ${
        this.values[min as keyof typeof this.values]
      }px) and (max-width: ${this.values[max as keyof typeof this.values] - 0.02}px)`;
    },
  },

  typography: {
    fontFamily: "Inter",
  },

  shadows: {
    modalMenu: "0 0 1px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 0, 0, 0.1)",
    modal: "0 0 4px rgba(0, 0, 0, 0.1), 0 8px 40px rgba(0, 0, 0, 0.2);",
    tooltip: "0 0 2px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.1);",
    bottom: "inset -1px -0.5px 1px #D8D8D8;",
  },

  palette: {
    accent: "#7dbe3b",
    hover: "#eaeaea",
    darkHover: "#c0c0c0",
    border: "#d8d8d8",
    active: "#e0e0e0",
    background: {
      primary: "#fff",
      secondary: "#fbfbfa",
    },

    text: {
      primary: "#222",
      secondary: "#fff",
      placeholder: "#696969",
    },
  },
};

export default theme;
