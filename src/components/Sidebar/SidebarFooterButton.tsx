import styled from "@emotion/styled";

const SidebarFooterButton = styled.button`
  padding: 17px 10px;
  color: ${(props) => props.theme.palette.text.placeholder};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export default SidebarFooterButton;
