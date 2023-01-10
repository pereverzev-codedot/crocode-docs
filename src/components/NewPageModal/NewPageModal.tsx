import { useState, useCallback } from "react";
import Input from "@components/Input";
import NewPageContentWrapper from "./NewPageContentWrapper";
import NewPageTitle from "./NewPageTitle";
import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";
import ModalButtonComponent from "@components/Modal/ModalButton/ModalButtonComponent";
import ChooseRootDocComponent from "./ChooseRootDocComponent";
import ModalCloseComponent from "@components/Modal/ModalWrapper/ModalCloseComponent";

interface INewPage {
  newPageActive: boolean;
  setNewPageActive: (active: boolean) => void;
  isChild: boolean;
  id: string;
}

export interface IValues {
  icon: string | null;
  id: string;
  title: string;
}

const NewPageModal = ({ newPageActive, setNewPageActive, isChild, id }: INewPage) => {
  const [title, setTitle] = useState<string>();
  const [values, setValues] = useState<IValues>({
    icon: "file_folder",
    id: "root",
    title: "root",
  });

  const handleChangeTitle = useCallback(
    (e: any) => {
      setTitle(e.target.value);
    },
    [setTitle],
  );

  const handleToggleClose = useCallback(() => {
    setNewPageActive(!newPageActive);
    setTitle("");
  }, [newPageActive, setNewPageActive, setTitle]);

  return (
    <ModalWrapperComponent handler={handleToggleClose} state={newPageActive} variant="">
      <NewPageContentWrapper>
        <ModalCloseComponent handler={handleToggleClose} state={newPageActive} />
        <NewPageTitle>NewPage</NewPageTitle>
        <Input
          value={title || ""}
          name="title"
          placeholder="Name"
          id="NewPageTitle"
          type="text"
          title="Name page"
          handler={handleChangeTitle}
        />
        {!isChild && <ChooseRootDocComponent values={values} setValues={setValues} />}
        <ModalButtonComponent
          name="Create"
          title={title || "New document"}
          id={isChild ? id : values.id}
          handleToggleClose={handleToggleClose}
        />
      </NewPageContentWrapper>
    </ModalWrapperComponent>
  );
};

export default NewPageModal;
