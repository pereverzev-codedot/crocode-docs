import { createContext } from "react";

interface IProps {
  handleOpen: (e: any) => void;
  handleClose: (e: any) => void;
  handleChooseIcon: (e: any) => void;
  isOpen: boolean;
  position: { x: number; y: number };
  handleOpenModal: (e: any) => void;
  handleCloseModal: () => void;
  handleEditTitle: (e: any) => void;
  handleRemoveDocument: (e: any) => void;
  isOpenModal: boolean;
  positionModal: { x: number; y: number };
  title: string;
}

const SidebarContext = createContext<IProps>({
  handleOpen: () => null,
  handleClose: () => null,
  handleChooseIcon: () => null,
  isOpen: false,
  position: { x: 0, y: 0 },
  handleOpenModal: () => null,
  handleCloseModal: () => null,
  handleEditTitle: () => null,
  handleRemoveDocument: () => null,
  isOpenModal: false,
  positionModal: { x: 0, y: 0 },
  title: "",
});

export default SidebarContext;
