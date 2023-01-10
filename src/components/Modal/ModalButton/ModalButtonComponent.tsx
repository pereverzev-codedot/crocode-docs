import DocumentContext from "@context/DocumentContext";
import { useCallback, useContext } from "react";
import ModalButton from "./ModalButton";

interface IPropsButton {
  name: string;
  title: string;
  id: string;
  handleToggleClose: (active: boolean) => void;
}

const ModalButtonComponent = ({ name, title, id, handleToggleClose }: IPropsButton) => {
  const { createDocument } = useContext(DocumentContext);

  const handleCreateDocument = useCallback(() => {
    createDocument(id, title);
    handleToggleClose(false);
  }, [id, title, createDocument, handleToggleClose]);

  return <ModalButton onClick={handleCreateDocument}>{name}</ModalButton>;
};

export default ModalButtonComponent;
