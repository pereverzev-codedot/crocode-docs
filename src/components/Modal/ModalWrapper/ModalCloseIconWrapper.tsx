import styled from "@emotion/styled";

const ModalCloseIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }

  & > svg {
    pointer-events: none;
  }
`;

export default ModalCloseIconWrapper;
