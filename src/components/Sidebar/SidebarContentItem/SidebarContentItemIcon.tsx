import styled from "@emotion/styled";

const SidebarContentItemIcon = styled.div`
  cursor: pointer;
  width: 26px;
  height: 26px;
  padding: 3px;

  em-emoji {
    pointer-events: none;
    & span {
      pointer-events: none;
    }
  }
`;

export default SidebarContentItemIcon;
