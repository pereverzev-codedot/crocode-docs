import DocumentContext from "@context/DocumentContext";
import { useContext, useState } from "react";

const useContextModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [positionModal, setPositionModal] = useState({ x: 0, y: 0 });
  const [docID, setDocID] = useState("");
  const { updateDocuments, deleteDocument } = useContext(DocumentContext);

  const [title, setTitle] = useState<string>("");

  const handleSetPositionModal = (x: number, y: number) => {
    setPositionModal({ x, y });
  };

  const handleOpenModal = (e: any) => {
    const elPos = e.target.getBoundingClientRect();
    const x = elPos.x;
    const y = elPos.y + elPos.height + 10;

    handleSetPositionModal(x, y);
    setDocID(e.target.dataset.id);
    setTitle(e.target.dataset.title);
    setIsOpenModal(y === positionModal.y && x === positionModal.x ? !isOpenModal : true);
  };

  const handleEditTitle = (title: string) => {
    updateDocuments(docID, "title", title);
  };

  const handleRemoveDocument = () => {
    deleteDocument(docID, false);
  };

  const handleCloseModal = () => (isOpenModal ? setIsOpenModal(false) : null);

  return {
    handleOpenModal,
    isOpenModal,
    handleCloseModal,
    handleEditTitle,
    positionModal,
    handleRemoveDocument,
    title,
  };
};

export default useContextModal;
