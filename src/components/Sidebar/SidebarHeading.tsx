import styled from "@emotion/styled";

const SidebarHeading = styled("div")`
  position: relative;
  padding: 17px 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid ${(props) => props.theme.palette.border};
`;

export default SidebarHeading;
