import styled from "@emotion/styled";

const ModalContent = styled.div`
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
`;

export default ModalContent;
