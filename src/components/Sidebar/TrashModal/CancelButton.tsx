import styled from "@emotion/styled";

const CancelButton = styled.button`
  padding: 8px 20px;
  background-color: ${(props) => props.theme.palette.hover};
  display: flex;
  transition: 0.3s;
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.darkHover};
  }
`;

export default CancelButton;
