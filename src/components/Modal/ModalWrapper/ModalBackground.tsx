import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface IVariant {
  variant: string;
}

const dynamicStyles = ({ variant }: IVariant) => css`
  ${variant === "transparent" ? `background : "transparent"` : `background: rgba(0, 0, 0, 0.4)`}
`;

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${dynamicStyles}
`;

export default ModalBackground;
