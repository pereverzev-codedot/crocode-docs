import styled from "@emotion/styled";

const NewPageContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 100px;
  width: 600px;
  background: ${(props) => props.theme.palette.background.primary};
`;

export default NewPageContentWrapper;
