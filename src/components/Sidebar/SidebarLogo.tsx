import styled from "@emotion/styled";

const SidebarLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 115%;
  color: ${(props) => props.theme.palette.text.secondary};
`;

export default SidebarLogo;
