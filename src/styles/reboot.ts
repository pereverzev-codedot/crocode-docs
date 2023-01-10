import { css, Theme } from "@emotion/react";

const reboot = (theme: Theme) => css`
  body {
    font-family: ${theme.typography.fontFamily};
  }

  a[href],
  button,
  label {
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    display: flex;
    min-height: 100vh;
  }
`;

export default reboot;
