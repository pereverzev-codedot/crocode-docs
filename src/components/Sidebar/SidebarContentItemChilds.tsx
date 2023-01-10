import styled from "@emotion/styled";

interface IProps {
  isOpen: boolean;
}

const SidebarContentItemChilds = styled("div")<IProps>`
  padding-left: 10px;
  max-height: 1000px;
  transition: 0.5s cubic-bezier(1, 0, 1, 0);
  overflow: hidden;

  ${(props) => !props.isOpen && "max-height: 0px; transition: 1s cubic-bezier(0, 1, 0, 1);"}
`;

export default SidebarContentItemChilds;
