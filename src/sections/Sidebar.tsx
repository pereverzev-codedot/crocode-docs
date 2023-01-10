import { useCallback, useContext, useState } from "react";

import {
  SidebarWrapper,
  SidebarContent,
  SidebarContentButton,
  SidebarContentStack,
  SidebarFooter,
  SidebarFooterButton,
  SidebarHeading,
  SidebarLogo,
  SidebarUser,
  SidebarUserName,
  SidebarUserRole,
  SidebarItemsStack,
} from "@components/Sidebar";
import SidebarItem from "../components/Sidebar/SidebarItem";
import DocumentContext from "@context/DocumentContext";
import EmojiPicker from "@components/EmojiPicker";
import SidebarHeadingDotes from "@components/Sidebar/SidebarHeadingDotes";
import useEmojiPicker from "@hooks/useEmojiPicker";
import SearchModal from "@components/SearchModal";
import NewPageModal from "@components/NewPageModal/NewPageModal";
import SidebarContext from "@context/SidebarContext";
import useContextModal from "@hooks/useContextModal";
import SidebarItemsSettingsModal from "@components/Sidebar/SidebarContentItem/SidebarItemModalSettings/SidebarItemsSettingsModal";
import SidebarTrashLink from "@components/Sidebar/SidebarTrashLink";
import TrashModal from "@components/Sidebar/TrashModal/TrashModal";
import UserContext from "@context/UserContext";
import LogoutModal from "@components/Sidebar/LogoutModal";

interface PropsOpenSidebar {
  isAttached: boolean;
  isOpen: boolean;
  setIsOpen: (active: boolean) => void;
}

const Sidebar = ({ isAttached, isOpen, setIsOpen }: PropsOpenSidebar): JSX.Element => {
  const { getRemovedDocuments, documents } = useContext(DocumentContext);
  const { user, logout } = useContext(UserContext);

  const {
    handleOpen: emojiPickerHandlerOpen,
    handleClose: emojiPickerHandlerClose,
    handleChooseIcon: emojiPickerHandleChooseIcon,
    isOpen: emojiPickerIsOpen,
    position: emojiPickerPos,
  } = useEmojiPicker();

  const {
    handleOpenModal: sidebarModalOpener,
    handleCloseModal: sidebarModalClose,
    handleEditTitle: itemEditName,
    isOpenModal: sidebarModalOpen,
    positionModal: positionModal,
    handleRemoveDocument,
    title: title,
  } = useContextModal();

  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [newPageActive, setNewPageActive] = useState<boolean>(false);
  const [isChild, setIsChild] = useState<boolean>(false);
  const [id, setId] = useState<string>("root");
  const [trashModalOpen, setTrashModalOpen] = useState<boolean>(false);
  const [logoutModal, setLogoutModal] = useState<boolean>(false);

  const handleSidebarClose = useCallback((): void => {
    if (!isAttached) {
      setIsOpen(false);
    }
  }, [setIsOpen, isAttached]);

  const handleOpenLogoutModal = useCallback((): void => {
    setLogoutModal(!logoutModal);
  }, [setLogoutModal, logoutModal]);

  const handleCloseLogoutModal = useCallback((): void => {
    setLogoutModal(false);
  }, [setLogoutModal]);

  const handleSidebarOpen = useCallback((): void => {
    if (!isAttached) {
      setIsOpen(true);
    }
  }, [setIsOpen, isAttached]);

  const handleSearchClick = useCallback((): void => {
    setSearchActive(true);
  }, [setSearchActive]);

  const handleOpenTrashModal = useCallback((): void => {
    getRemovedDocuments();
    setTrashModalOpen(!trashModalOpen);
  }, [setTrashModalOpen, trashModalOpen, getRemovedDocuments]);

  const handleNewPageActive = useCallback(
    (e: any): void => {
      setNewPageActive(true);
      setIsChild(!!Number(e.target.dataset.is_child));
      setId(e.target.dataset.parent_id);
    },
    [setNewPageActive],
  );

  return (
    <>
      <SearchModal searchActive={searchActive} setSearchActive={setSearchActive} />

      <SidebarWrapper
        onMouseLeave={handleSidebarClose}
        onMouseEnter={handleSidebarOpen}
        isAttached={isAttached}
        isOpen={isOpen}
      >
        {user?.token ? (
          <SidebarHeading onMouseLeave={handleCloseLogoutModal}>
            <SidebarLogo>
              {user?.nickname
                .split(" ")
                .map((el) => el[0])
                .join("")}
            </SidebarLogo>
            <SidebarUser>
              <SidebarUserName>{user?.nickname}</SidebarUserName>
              <SidebarUserRole>{user?.roles[0]}</SidebarUserRole>
            </SidebarUser>
            <SidebarHeadingDotes onClick={handleOpenLogoutModal}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.66675" cy="7.66667" r="1" fill="black" />
                <circle cx="8.3335" cy="7.66667" r="1" fill="black" />
                <circle cx="13" cy="7.66667" r="1" fill="black" />
              </svg>
              <LogoutModal logoutModal={logoutModal} onClick={logout}>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.6233 8.50018L2.10474 8.50018" stroke="black" />
                  <path
                    d="M8.93042 10.6833L10.4117 9.20852C10.8043 8.81769 10.8044 8.18219 10.4119 7.79129L8.93042 6.31591"
                    stroke="black"
                  />
                  <path
                    d="M6.27612 5.41667L6.27612 3.33334C6.27612 2.78105 6.72384 2.33334 7.27612 2.33334L12.8953 2.33334C13.4476 2.33334 13.8953 2.78105 13.8953 3.33334L13.8953 13.6667C13.8953 14.219 13.4476 14.6667 12.8953 14.6667L7.27612 14.6667C6.72384 14.6667 6.27612 14.219 6.27612 13.6667L6.27612 11.5833"
                    stroke="black"
                  />
                </svg>
                Log out
              </LogoutModal>
            </SidebarHeadingDotes>
          </SidebarHeading>
        ) : null}
        <SidebarContent>
          <SidebarContentButton onClick={handleSearchClick}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.33229" cy="7.19252" r="5.35902" stroke="black" />
              <path d="M10.9915 11.1389L14.0271 14.1667" stroke="black" />
            </svg>
            Search
          </SidebarContentButton>
          <SidebarContentStack>
            {!documents ? (
              <p>Loading...</p>
            ) : (
              <SidebarContext.Provider
                value={{
                  handleOpen: emojiPickerHandlerOpen,
                  handleClose: emojiPickerHandlerClose,
                  handleChooseIcon: emojiPickerHandleChooseIcon,
                  isOpen: emojiPickerIsOpen,
                  position: emojiPickerPos,
                  handleOpenModal: sidebarModalOpener,
                  handleCloseModal: sidebarModalClose,
                  handleEditTitle: itemEditName,
                  handleRemoveDocument,
                  isOpenModal: sidebarModalOpen,
                  positionModal: positionModal,
                  title: title,
                }}
              >
                <SidebarItemsStack>
                  {documents!.length > 0 &&
                    documents
                      ?.filter((el) => el.parent_id === null)
                      ?.map((el) => (
                        <SidebarItem
                          key={el.id}
                          {...el}
                          parent_id={el.id}
                          handleNewPageActive={handleNewPageActive}
                        />
                      ))}
                </SidebarItemsStack>
                {documents!.length === 0 && (
                  <div>
                    You don&apos;t have any documents. <br /> Create a new one.
                  </div>
                )}
                <EmojiPicker />
                <SidebarItemsSettingsModal />
                {user?.roles.includes("ADMIN") && (
                  <>
                    <SidebarTrashLink onClick={handleOpenTrashModal}>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0001 4.5H12.5001C12.5001 4.22386 12.2762 4 12.0001 4V4.5ZM4.00008 4.5V4C3.72394 4 3.50008 4.22386 3.50008 4.5H4.00008ZM4.72795 14.3547L4.95494 13.9092L4.72795 14.3547ZM4.14541 13.772L3.6999 13.999L4.14541 13.772ZM11.8549 13.772L11.4094 13.545L11.8549 13.772ZM11.2719 14.3547L11.0449 13.9092L11.2719 14.3547ZM2.66675 4C2.39061 4 2.16675 4.22386 2.16675 4.5C2.16675 4.77614 2.39061 5 2.66675 5V4ZM13.3334 5C13.6096 5 13.8334 4.77614 13.8334 4.5C13.8334 4.22386 13.6096 4 13.3334 4V5ZM10.6667 4.5V5C10.9429 5 11.1667 4.77614 11.1667 4.5H10.6667ZM5.33341 4.5H4.83341C4.83341 4.77614 5.05727 5 5.33341 5V4.5ZM10.5652 3.32308L11.0271 3.13174L10.5652 3.32308ZM9.84366 2.60149L10.035 2.13955V2.13955L9.84366 2.60149ZM11.5001 4.5V12.3667H12.5001V4.5H11.5001ZM9.86688 14H6.13354V15H9.86688V14ZM4.50008 12.3667V4.5H3.50008V12.3667H4.50008ZM4.00008 5H12.0001V4H4.00008V5ZM6.13354 14C5.75194 14 5.49572 13.9996 5.29839 13.9835C5.10687 13.9678 5.01529 13.9399 4.95494 13.9092L4.50095 14.8002C4.72581 14.9147 4.96367 14.9595 5.21696 14.9802C5.46445 15.0004 5.76842 15 6.13354 15V14ZM3.50008 12.3667C3.50008 12.7318 3.49969 13.0357 3.51991 13.2831C3.5406 13.5364 3.58534 13.7742 3.6999 13.999L4.59091 13.545C4.56015 13.4847 4.53223 13.3931 4.51659 13.2017C4.50047 13.0044 4.50008 12.7483 4.50008 12.3667H3.50008ZM4.95494 13.9092C4.79822 13.8293 4.67084 13.7019 4.59091 13.545L3.6999 13.999C3.87563 14.3439 4.15591 14.6244 4.50095 14.8002L4.95494 13.9092ZM11.5001 12.3667C11.5001 12.7483 11.4997 13.0045 11.4836 13.2018C11.468 13.3932 11.4401 13.4847 11.4094 13.545L12.3004 13.999C12.415 13.7741 12.4597 13.5363 12.4803 13.283C12.5005 13.0357 12.5001 12.7317 12.5001 12.3667H11.5001ZM9.86688 15C10.232 15 10.5359 15.0004 10.7832 14.9802C11.0365 14.9595 11.2741 14.9147 11.4989 14.8002L11.0449 13.9092C10.9845 13.9399 10.893 13.9678 10.7017 13.9835C10.5046 13.9996 10.2485 14 9.86688 14V15ZM11.4094 13.545C11.3296 13.7016 11.202 13.8291 11.0449 13.9092L11.4989 14.8002C11.8436 14.6245 12.1245 14.3442 12.3004 13.999L11.4094 13.545ZM2.66675 5H13.3334V4H2.66675V5ZM10.6667 4H5.33341V5H10.6667V4ZM7.33342 3H8.66675V2H7.33342V3ZM5.83341 4.5C5.83341 4.18253 5.83369 3.96947 5.84494 3.80449C5.85589 3.644 5.87554 3.56586 5.89685 3.51442L4.97297 3.13174C4.89278 3.32533 4.86168 3.52502 4.84726 3.73642C4.83314 3.94333 4.83341 4.19621 4.83341 4.5H5.83341ZM7.33342 2C7.02963 2 6.77671 1.99973 6.56976 2.01385C6.35834 2.02827 6.1586 2.05936 5.96499 2.13955L6.34767 3.06343C6.39909 3.04214 6.47726 3.02248 6.63782 3.01153C6.80284 3.00027 7.01595 3 7.33342 3V2ZM5.89685 3.51442C5.98147 3.31012 6.14359 3.14797 6.34767 3.06343L5.96499 2.13955C5.51566 2.32567 5.159 2.68263 4.97297 3.13174L5.89685 3.51442ZM11.1667 4.5C11.1667 4.19618 11.167 3.9433 11.1529 3.73637C11.1384 3.52496 11.1073 3.3253 11.0271 3.13174L10.1032 3.51442C10.1246 3.56589 10.1442 3.64406 10.1552 3.80454C10.1665 3.9695 10.1667 4.18256 10.1667 4.5H11.1667ZM8.66675 3C8.98422 3 9.19728 3.00027 9.36225 3.01153C9.52274 3.02248 9.60088 3.04213 9.65232 3.06343L10.035 2.13955C9.84141 2.05937 9.64173 2.02827 9.43033 2.01385C9.22342 1.99973 8.97053 2 8.66675 2V3ZM11.0271 3.13174C10.8411 2.68256 10.4843 2.32564 10.035 2.13955L9.65232 3.06343C9.85647 3.148 10.0187 3.31019 10.1032 3.51442L11.0271 3.13174Z"
                          fill="black"
                        />
                        <path d="M7 7.5L7 11.5" stroke="black" />
                        <path d="M9 7.5L9 11.5" stroke="black" />
                      </svg>
                      Trash
                    </SidebarTrashLink>
                    <TrashModal
                      trashModalOpen={trashModalOpen}
                      setTrashModalOpen={setTrashModalOpen}
                    />
                    <NewPageModal
                      id={id}
                      newPageActive={newPageActive}
                      setNewPageActive={setNewPageActive}
                      isChild={isChild}
                    />
                  </>
                )}
              </SidebarContext.Provider>
            )}
          </SidebarContentStack>
        </SidebarContent>
        {user?.roles.includes("ADMIN") && (
          <SidebarFooter>
            <SidebarFooterButton
              onClick={handleNewPageActive}
              data-is_child="0"
              data-parent_id="root"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 12H4" stroke="black" />
                <path d="M12 4V20" stroke="black" />
              </svg>
              New page
            </SidebarFooterButton>
          </SidebarFooter>
        )}
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
