import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ logoutModal }: { logoutModal: boolean }) => css`
  ${logoutModal
    ? `
    visibility: visible;
    opacity: 1;
    `
    : `
    visibility: hidden;
    opacity: 0;
    `}
`;

const LogoutModal = styled("div")`
  position: absolute;
  top: 50px;
  right: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  width: 184px;
  background: ${(props) => props.theme.palette.background.primary};
  color: ${(props) => props.theme.palette.text.primary};
  box-shadow: ${(props) => props.theme.shadows.modal};
  cursor: pointer;
  transition: 0.3s;

  ${dynamicStyles};
`;

export default LogoutModal;
