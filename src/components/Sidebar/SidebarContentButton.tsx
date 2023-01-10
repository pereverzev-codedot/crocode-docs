import styled from "@emotion/styled";

const SidebarContentButton = styled.aside`
  font-weight: 400;
  font-size: 14px;
  line-height: 115%;
  color: #696969;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export default SidebarContentButton;
