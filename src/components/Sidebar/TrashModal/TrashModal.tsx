import { useCallback, useContext, useState } from "react";
import ModalSearch from "@components/Document/ModalSearch";
import ModalSearchWrapper from "@components/Document/ModalSearchWrapper";
import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";
import ModalTrashContent from "./ModalTrashContent";
import ModalTrashList from "./ModalTrashList";
import ModalCloseComponent from "@components/Modal/ModalWrapper/ModalCloseComponent";
import ModalTrashItemComponent from "./ModalTrashItemComponent";
import DocumentContext from "@context/DocumentContext";

interface ITrash {
  trashModalOpen: boolean;
  setTrashModalOpen: (active: boolean) => void;
}

const TrashModal = ({ trashModalOpen, setTrashModalOpen }: ITrash) => {
  const { removedDocuments } = useContext(DocumentContext);
  const [search, setSearch] = useState<string>("");

  const handleChangeInput = useCallback(
    (e: any) => {
      setSearch(e.target.value);
    },
    [setSearch],
  );
  return (
    <ModalWrapperComponent handler={setTrashModalOpen} state={trashModalOpen} variant="">
      <ModalTrashContent>
        <ModalCloseComponent handler={setTrashModalOpen} state={trashModalOpen} />
        <ModalSearchWrapper>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.33229" cy="7.19252" r="5.35902" stroke="black" />
            <path d="M10.9915 11.1389L14.0271 14.1667" stroke="black" />
          </svg>
          <ModalSearch
            placeholder="Search..."
            type="text"
            value={search}
            onChange={handleChangeInput}
          />
        </ModalSearchWrapper>
        <ModalTrashList>
          {removedDocuments &&
            removedDocuments.map((el) => (
              <ModalTrashItemComponent
                key={el.id}
                el={el}
                trashModalOpen={trashModalOpen}
                setTrashModalOpen={setTrashModalOpen}
              />
            ))}
        </ModalTrashList>
      </ModalTrashContent>
    </ModalWrapperComponent>
  );
};

export default TrashModal;
