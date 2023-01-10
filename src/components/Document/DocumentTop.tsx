import styled from "@emotion/styled";

const DocumentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.palette.background.primary};
  box-shadow: ${(props) => props.theme.shadows.bottom};
  padding: 23px 40px 22px;
  position: absolute;
  top: 0;
  z-index: 7;
  left: 0;
  width: 100%;
`;

export default DocumentTop;
