import styled from "@emotion/styled";

const ModalSettingsTop = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.palette.text.placeholder};
`;

export default ModalSettingsTop;
