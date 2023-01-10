import styled from "@emotion/styled";

const SidebarContentItemCircle = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    background-color: #696969;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

export default SidebarContentItemCircle;
