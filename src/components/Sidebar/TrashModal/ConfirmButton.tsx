import styled from "@emotion/styled";

const ConfirmButton = styled.button`
  padding: 8px 20px;
  background-color: #dc143c;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s;
  color: ${(props) => props.theme.palette.text.secondary};
  cursor: pointer;

  &:hover {
    background-color: #8b0000;
  }
`;

export default ConfirmButton;
