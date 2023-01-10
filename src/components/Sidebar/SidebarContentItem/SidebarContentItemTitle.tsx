import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";

interface IProps {
  linkActive: boolean;
}

const SidebarContentItemTitle = styled(RouterLink)<IProps>`
  color: ${(props) => props.theme.palette.text.placeholder};
  pointer-events: ${(props) => (props.linkActive ? "none" : "all")};
  padding: 6px 5px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 180px;
  white-space: nowrap;
`;

export default SidebarContentItemTitle;
