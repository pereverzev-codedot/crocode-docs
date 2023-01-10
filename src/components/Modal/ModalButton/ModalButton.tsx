import styled from "@emotion/styled";

const ModalButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.palette.accent};
  color: ${(props) => props.theme.palette.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 20px;
  font-weight: 500;
`;

export default ModalButton;
