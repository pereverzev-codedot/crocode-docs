import styled from "@emotion/styled";

const ModalTrashIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center
  cursor: pointer;
  transition: 0.3s;

  & > svg{
    pointer-events: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.darkHover};
  }
`;

export default ModalTrashIconWrapper;
