import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IHover {
  hover: boolean;
}

const dynamicStyles = ({ hover }: IHover) => css`
  ${hover
    ? `opacity: 1; visibility: 1; pointer-events: all;`
    : `opacity: 0; visibility: 0; pointer-events: none;`}
`;
const SidebarContentItemEnd = styled.div`
  margin-left: auto;
  display: flex;
  gap: 6px;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
  transition: 0.3s;
  ${dynamicStyles}
`;

export default SidebarContentItemEnd;
