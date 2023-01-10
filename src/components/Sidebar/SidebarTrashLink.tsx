import styled from "@emotion/styled";

const SidebarTrashLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 115%;
  color: ${(props) => props.theme.palette.text.placeholder};
  padding: 6px 10px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export default SidebarTrashLink;
