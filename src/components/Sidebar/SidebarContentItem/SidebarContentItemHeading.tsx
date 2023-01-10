import styled from "@emotion/styled";

interface ISidebarContentItemHeading {
  active: boolean;
}

const SidebarContentItemHeading = styled("div")<ISidebarContentItemHeading>`
  padding: 0 10px;
  display: flex;
  gap: 6px;
  transition: 0.3s;
  align-items: center;
  transition: 0.3s;
  background-color: ${(props) => (props.active ? props.theme.palette.active : "transparent")};

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export default SidebarContentItemHeading;
