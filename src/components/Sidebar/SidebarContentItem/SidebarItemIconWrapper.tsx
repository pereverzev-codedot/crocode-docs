import styled from "@emotion/styled";

const SidebarItemIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  & > svg {
    pointer-events: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.darkHover};
  }
`;

export default SidebarItemIconWrapper;
