import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

interface ISidebar {
  theme?: Theme;
  isAttached: boolean;
  isOpen: boolean;
}

const dynamicStyles = ({ theme, isAttached, isOpen }: ISidebar) => css`
  ${!isAttached
    ? `
    transition: 0.5s;
    position: fixed;
    left: 0;
    background-color: ${theme?.palette.background.primary};
    box-shadow: ${theme?.shadows.modalMenu};
    height: 84%;
    top: 8%;
    border-radius: 0 5px 5px 0;
    z-index: 100;

    &::before {
        z-index: -1;
        content: "";
        height: 100vh;
        position: absolute;
        transform: translateY(-8%);
        width: calc(100% + 50px);
        margin-top: 90px;
    }

    ${
      isOpen
        ? `
        transform:translateX(0);
        opacity: 1;
    `
        : `
        transform: translateX(-100%);
        opacity: 0;
    `
    }
    `
    : `
    box-shadow: ${theme?.shadows.bottom};
    background-color: ${theme?.palette.background.secondary};
    `}
`;

const SidebarWrapper = styled("aside")<ISidebar>`
  width: 340px;
  display: flex;
  flex-direction: column;

  ${dynamicStyles};
`;

export default SidebarWrapper;
