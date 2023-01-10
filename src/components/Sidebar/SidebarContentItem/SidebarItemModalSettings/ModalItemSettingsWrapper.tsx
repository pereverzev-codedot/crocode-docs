import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IActive {
  isOpen: boolean;
  position: any;
}

const dynamicStyles = ({ isOpen, position }: IActive) => css`
  ${isOpen
    ? `
  opacity: 1;
  visibility: visible;
    `
    : `
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
    `};

  top: ${position.y}px;
  left: ${position.x}px;
`;

const ModalItemSettingsWrapper = styled.div`
  width: 184px;
  background: ${(props) => props.theme.palette.background.primary};
  transition: 0.3s;
  position: absolute;
  z-index: 3;

  ${dynamicStyles}
`;

export default ModalItemSettingsWrapper;
