import { useContext } from "react";
import styled from "@emotion/styled";
import data from "@emoji-mart/data";
//@ts-ignore
import Picker from "@emoji-mart/react";
import ModalWrapperComponent from "./Modal/ModalWrapper/ModalWrapperComponent";
import SidebarContext from "@context/SidebarContext";

interface IComponentProps {
  isOpen: boolean;
  position: { x: number; y: number };
}

const Component = styled("div")<IComponentProps>`
  position: absolute;
  z-index: 3;
  transition: 0.3s;

  ${(props) =>
    props.isOpen
      ? `
  opacity: 1;
  visibility: visible;
    `
      : `
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
    `};

  top: ${(props) => props.position.y}px;
  left: ${(props) => props.position.x}px;
`;

const EmojiPicker = (): JSX.Element => {
  const { isOpen, handleClose, position, handleChooseIcon } = useContext(SidebarContext);

  return (
    <ModalWrapperComponent handler={handleClose} state={isOpen} variant="transparent">
      <Component isOpen={isOpen} position={position}>
        <Picker onEmojiSelect={handleChooseIcon} data={data} />
      </Component>
    </ModalWrapperComponent>
  );
};

export default EmojiPicker;
