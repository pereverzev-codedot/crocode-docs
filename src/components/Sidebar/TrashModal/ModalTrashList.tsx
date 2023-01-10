import styled from "@emotion/styled";

const ModalTrashList = styled.div`
  padding: 10px 7px;
  height: 178px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d6d6d6;
  }
`;

export default ModalTrashList;
