import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IFont {
  active: boolean;
  value: string;
}

const dynamicStyles = ({ active, value }: IFont) => css`
  font-family: ${value};

  ${active
    ? `
    color: #7DBE3B;
    `
    : `
    color: #000;
    `};
`;

const ModalSettingsFont = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  pointer-events: none;

  ${dynamicStyles}
`;

export default ModalSettingsFont;
