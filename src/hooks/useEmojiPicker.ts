import DocumentContext from "@context/DocumentContext";
import { useContext, useState } from "react";

const useEmojiPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [docID, setDocID] = useState("");
  const { updateDocuments } = useContext(DocumentContext);

  const handleSetPosition = (x: number, y: number) => {
    setPosition({ x, y });
  };

  const handleOpen = (e: any) => {
    const elPos = e.target.getBoundingClientRect();
    const x = elPos.x;
    const y = elPos.y + elPos.height + 10;

    handleSetPosition(x, y);
    setDocID(e.target.dataset.id);
    setIsOpen(y === position.y && x === position.x ? !isOpen : true);
  };

  const handleChooseIcon = (e: any) => {
    updateDocuments(docID, "icon", e.id);
  };

  const handleClose = () => (isOpen ? setIsOpen(false) : null);

  return {
    handleOpen,
    handleClose,
    handleChooseIcon,
    isOpen,
    position,
  };
};

export default useEmojiPicker;
