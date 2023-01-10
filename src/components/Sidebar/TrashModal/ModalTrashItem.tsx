import styled from "@emotion/styled";

const ModalTrashItem = styled.div`
  width: 100%;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export default ModalTrashItem;
