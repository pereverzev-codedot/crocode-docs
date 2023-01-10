import { useCallback, useContext, useState, useEffect } from "react";
import Input from "@components/Input";
import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";
import SidebarContext from "@context/SidebarContext";
import ModalChangeTitleButton from "./ModalChangeTitleButton";
import ModalWrapperRename from "./ModalWrapperRename";
import NewPageTitle from "@components/NewPageModal/NewPageTitle";

interface IProps {
  setIsOpenEditModal: (active: boolean) => void;
  isOpenEditModal: boolean;
  handleOpenEditModal: () => void;
}

const ModalChangeTitle = ({ setIsOpenEditModal, isOpenEditModal, handleOpenEditModal }: IProps) => {
  const { handleEditTitle, title } = useContext(SidebarContext);

  const [name, setName] = useState<string>(title);

  const handleChangeName = useCallback((e: any) => {
    setName(e.target.value);
  }, []);

  const submit = useCallback(() => {
    handleOpenEditModal();
    handleEditTitle(name);
  }, [handleEditTitle, name, handleOpenEditModal]);

  useEffect(() => {
    setName(title);
  }, [title]);

  return (
    <ModalWrapperComponent handler={setIsOpenEditModal} state={isOpenEditModal} variant="">
      <ModalWrapperRename>
        <NewPageTitle>Rename</NewPageTitle>
        <Input
          value={name}
          name="title"
          placeholder="New name"
          id="title"
          type="text"
          title="New document name"
          handler={handleChangeName}
        />
        <ModalChangeTitleButton onClick={submit}>Rename</ModalChangeTitleButton>
      </ModalWrapperRename>
    </ModalWrapperComponent>
  );
};

export default ModalChangeTitle;
