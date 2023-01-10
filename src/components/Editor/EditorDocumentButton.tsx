import styled from "@emotion/styled";

const EditorDocumentButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 6px 12px;
  border: 0.5px solid #000000;
  border-radius: 2px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 300;
  font-size: 14px;
  line-height: 115%;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export default EditorDocumentButton;
