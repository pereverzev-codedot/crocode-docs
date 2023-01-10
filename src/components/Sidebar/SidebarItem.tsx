import { useCallback, useState, useContext } from "react";
import DocumentContext from "@context/DocumentContext";
import EmojiIcon from "@components/Emoji";
import {
  SidebarContentItemArrow,
  SidebarContentItemHeading,
  SidebarContentItemIcon,
  SidebarContentItemTitle,
} from "@components/Sidebar";
import SidebarContentItemChilds from "@components/Sidebar/SidebarContentItemChilds";
import SidebarContentItemWrapper from "@components/Sidebar/SidebarContentItemWrapper";
import { IDoc } from "@hooks/useDocuments";
import SidebarContentItemCircle from "@components/Sidebar/SidebarContentItemCircle";
import SidebarItemIconWrapper from "./SidebarContentItem/SidebarItemIconWrapper";
import SidebarContentItemEnd from "./SidebarContentItem/SidebarContentItemEnd";
import SidebarContext from "@context/SidebarContext";
import UserContext from "@context/UserContext";

interface IDocExtended extends IDoc {
  parent_id: string;
  handleNewPageActive: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const SidebarItem = ({
  id,
  title,
  icon,
  child_id,
  parent_id,
  handleNewPageActive,
}: IDocExtended) => {
  const { documents, getDocuments, activeDocument } = useContext(DocumentContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState<boolean>(false);
  const [openArrow, setOpenArrow] = useState<boolean>(false);

  const { user } = useContext(UserContext);

  const getDocumentsWrapper = useCallback(() => {
    setIsOpen(!isOpen);
    setOpenArrow(!openArrow);
    getDocuments(child_id, id, setLoading);
  }, [child_id, id, getDocuments, setIsOpen, isOpen, setOpenArrow, openArrow]);

  const handleItemHover = useCallback(() => {
    setHover(true);
  }, [setHover]);

  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, [setHover]);

  const { handleOpenModal, handleOpen } = useContext(SidebarContext);

  return (
    <SidebarContentItemWrapper>
      <SidebarContentItemHeading
        active={activeDocument?.id === id}
        onMouseOver={handleItemHover}
        onMouseLeave={handleMouseLeave}
      >
        {child_id.length ? (
          <SidebarContentItemArrow onClick={getDocumentsWrapper} openArrow={openArrow} />
        ) : (
          <SidebarContentItemCircle />
        )}
        <SidebarContentItemIcon
          onClick={user?.roles.includes("ADMIN") ? handleOpen : noop}
          data-id={id}
          data-parent_id={parent_id !== id ? parent_id : "root"}
        >
          <EmojiIcon id={icon} />
        </SidebarContentItemIcon>
        <SidebarContentItemTitle
          linkActive={activeDocument?.id === id}
          to={`/${title.replaceAll(" ", "_")}--${id}`}
        >
          {title}
        </SidebarContentItemTitle>

        {user?.roles.includes("ADMIN") ? (
          <SidebarContentItemEnd hover={hover}>
            <SidebarItemIconWrapper data-id={id} data-title={title} onClick={handleOpenModal}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.66675" cy="7.66667" r="1" fill="#696969" />
                <circle cx="8.3335" cy="7.66667" r="1" fill="#696969" />
                <circle cx="13" cy="7.66667" r="1" fill="#696969" />
              </svg>
            </SidebarItemIconWrapper>
            <SidebarItemIconWrapper
              onClick={handleNewPageActive}
              data-is_child="1"
              data-parent_id={id}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 12H4" stroke="#696969" />
                <path d="M12 4V20" stroke="#696969" />
              </svg>
            </SidebarItemIconWrapper>
          </SidebarContentItemEnd>
        ) : null}
      </SidebarContentItemHeading>
      <SidebarContentItemChilds isOpen={isOpen}>
        {documents?.length || !loading ? (
          documents
            ?.filter((el) => child_id.includes(el.id))
            ?.map((el) => (
              <SidebarItem
                key={el.id}
                {...el}
                parent_id={id}
                handleNewPageActive={handleNewPageActive}
              />
            ))
        ) : (
          <p>Loading...</p>
        )}
      </SidebarContentItemChilds>
    </SidebarContentItemWrapper>
  );
};

export default SidebarItem;
