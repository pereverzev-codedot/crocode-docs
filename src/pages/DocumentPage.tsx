import { useState, useCallback } from "react";
import Sidebar from "@sections/Sidebar";
import Editor from "@sections/Editor";
import { SidebarWrapperButton } from "@components/Sidebar";
import DocumentWrapper from "@components/Document/DocumentWrapper";
import Breadcrumbs from "@sections/Breacrumbs";
import DocumentTop from "@components/Document/DocumentTop";
import DocumentTopWrapper from "@components/Document/DocumentTopWrapper";
import DocumentTopButton from "@components/Document/DocumentTopButton";
import DocumentTopLastEdited from "@components/Document/DocumentTopLastEdited";
import SidebarHeadingDotes from "@components/Sidebar/SidebarHeadingDotes";
import useDocuments from "@hooks/useDocuments";
import DocumentContext from "@context/DocumentContext";
import SettingsModal from "@components/ModalSettings";
import AuthPage from "./AuthPage";

export type isAttachedProps = {
  isAttached: boolean;
};

export interface IAuth {
  setOpenLoginModal: (active: boolean) => void;
  openLoginModal: boolean;
}

const DocumentPage = () => {
  const [isAttached, setIsAttached] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isOpenEditor, setIsOpenEditor] = useState<boolean>(false);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [handleEdit, setHandleEdit] = useState<any>(null);
  const {
    documents,
    error,
    activeDocument,
    getActiveDocument,
    getRootDocuments,
    getDocuments,
    updateDocuments,
    createDocument,
    restoreRemovedDocument,
    removedDocuments,
    getRemovedDocuments,
    deleteDocument,
  } = useDocuments();

  const handleToggleSidebar = useCallback((): void => {
    setIsAttached(!isAttached);
  }, [setIsAttached, isAttached]);

  const handleOpenerEditor = useCallback((): void => {
    setIsOpenEditor(!isOpenEditor);
  }, [isOpenEditor]);
  // @ts-ignore
  const updatedTime = () => {
    if (activeDocument?.updatedAt) {
      const editedDate = new Date(activeDocument?.updatedAt).getTime();
      const diffTime = (Date.now() - editedDate) / (60 * 60 * 24 * 1000);
      let visibleTime = "";

      if (diffTime < 0.04) {
        visibleTime = "1h";
      }

      if (diffTime > 0.04 && diffTime < 0.35) {
        visibleTime = "few hours";
      }

      if (diffTime > 0.35 && diffTime < 1) {
        visibleTime = "less then 1d";
      }

      if (diffTime > 1 && diffTime < 5) {
        visibleTime = "few days";
      }
      if (diffTime > 5 && diffTime < 30) {
        visibleTime = "less then month";
      }
      if (diffTime > 30) {
        visibleTime = "more then month";
      }

      return `Edited ${visibleTime} ago`;
    }
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        error,
        activeDocument,
        getActiveDocument,
        getRootDocuments,
        getDocuments,
        updateDocuments,
        createDocument,
        restoreRemovedDocument,
        getRemovedDocuments,
        removedDocuments,
        deleteDocument,
      }}
    >
      <Sidebar isAttached={isAttached} isOpen={isOpen} setIsOpen={setIsOpen} />
      <DocumentWrapper>
        <DocumentTop>
          <DocumentTopWrapper>
            <SidebarWrapperButton onClick={handleToggleSidebar} isAttached={isAttached}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4.58334L11.4167 11L5 17.4167" stroke="black" />
                <path d="M11 4.58334L17.4167 11L11 17.4167" stroke="black" />
              </svg>
            </SidebarWrapperButton>
            <Breadcrumbs activeDocument={activeDocument} />
          </DocumentTopWrapper>
          <DocumentTopWrapper>
            <DocumentTopButton>Share</DocumentTopButton>
            <DocumentTopLastEdited>{updatedTime()}</DocumentTopLastEdited>
            <SidebarHeadingDotes onClick={handleOpenerEditor}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.66675" cy="7.66667" r="1" fill="black" />
                <circle cx="8.3335" cy="7.66667" r="1" fill="black" />
                <circle cx="13" cy="7.66667" r="1" fill="black" />
              </svg>
            </SidebarHeadingDotes>
          </DocumentTopWrapper>
        </DocumentTop>
        <AuthPage setOpenLoginModal={setOpenLoginModal} openLoginModal={openLoginModal} />
        <SettingsModal
          isOpenEditor={isOpenEditor}
          setOpenLoginModal={setOpenLoginModal}
          openLoginModal={openLoginModal}
        />
        <Editor />
      </DocumentWrapper>
    </DocumentContext.Provider>
  );
};

export default DocumentPage;
