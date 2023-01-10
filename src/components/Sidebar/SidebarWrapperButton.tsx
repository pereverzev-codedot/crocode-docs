import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ISidebar {
  isAttached: boolean;
}

const dynamicStyles = ({ isAttached }: ISidebar) => css`
  ${isAttached
    ? `
    position: absolute;
    left: -20px;
    top: 17px;
    transform: rotate(180deg);
    `
    : `
    left: 0;
    top: 0;
    `}
`;

const SidebarWrapperButton = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fbfbfa;
  border: 0.5px solid #d8d8d8;
  cursor: pointer;
  z-index: 2;

  ${dynamicStyles};
`;

export default SidebarWrapperButton;
