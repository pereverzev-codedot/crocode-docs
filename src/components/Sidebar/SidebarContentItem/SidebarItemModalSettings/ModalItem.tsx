import styled from "@emotion/styled";

const ModalItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 8px;
  background-color: ${(props) => props.theme.palette.background.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }

  &:not(:last-child) {
    border-bottom: 0.5px solid #d8d8d8;
  }
`;

export default ModalItem;
