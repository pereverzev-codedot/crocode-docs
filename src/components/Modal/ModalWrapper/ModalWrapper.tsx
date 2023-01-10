import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ modalActive }: { modalActive: boolean }) => css`
  ${modalActive
    ? `
    visibility: visible;
    opacity: 1;
    `
    : `
      visibility: hidden;
      opacity: 0;
    `}
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  width: 100%;
  height: 100%;

  ${dynamicStyles}
`;

export default ModalWrapper;
