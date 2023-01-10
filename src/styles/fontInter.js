import { css } from "@emotion/react";

const fontUrl = "/fonts/";

const fontInter = css`
  @font-face {
    font-family: "Inter";
    src: local("Inter-LightBETA"), url("${fontUrl}Inter-LightBETA.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: local("Inter-Medium"), url("${fontUrl}Inter-Medium.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    src: local("Inter-Regular"), url("${fontUrl}Inter-Regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;

export default fontInter;
