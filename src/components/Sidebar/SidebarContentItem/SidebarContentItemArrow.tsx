import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IArrow {
  openArrow: boolean;
}

const dynamicStyles = ({ openArrow }: IArrow) => css`
  ${openArrow ? `transform: rotate(90deg)` : ``}
`;

const SidebarContentItemArrow = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.3s;
  border-radius: 2px;
  transition: 0.3s;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) => props.theme.palette.darkHover};
  }

  &::before,
  &::after {
    width: 7px;
    height: 1px;
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.palette.text.placeholder};
  }

  &::before {
    top: 10px;
    transform: rotate(45deg);
  }

  &::after {
    bottom: 10px;
    transform: rotate(-45deg);
  }

  ${dynamicStyles}
`;

export default SidebarContentItemArrow;
