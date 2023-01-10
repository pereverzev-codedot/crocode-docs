import styled from "@emotion/styled";

const SidebarHeadingDotes = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }

  & > svg {
    pointer-events: none;
  }
`;

export default SidebarHeadingDotes;
