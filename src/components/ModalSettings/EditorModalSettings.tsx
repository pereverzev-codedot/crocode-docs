import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IEditor {
  isOpenEditor: boolean;
}

const dynamicStyles = ({ isOpenEditor }: IEditor) => css`
  ${isOpenEditor
    ? `
    visibility: visible;
    opacity: 1;
    `
    : `
    visibility: hidden;
    opacity: 0;
    `}
`;

const EditorModalSettings = styled("section")`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 220px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15), 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  z-index: 8;
  transition: 0.2s;

  ${dynamicStyles}
`;

export default EditorModalSettings;
