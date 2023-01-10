import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";

const Link = styled(RouterLink)`
  font-size: 14px;
  font-weight: 300;
  line-height: 115%;
  color: #696969;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export default Link;
