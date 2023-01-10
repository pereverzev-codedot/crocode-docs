import ModalContent from "./Document/ModalContent";
import ModalContentBlock from "./Document/ModalContentBlock";
import ModalSearch from "./Document/ModalSearch";
import ModalSearchWrapper from "./Document/ModalSearchWrapper";
import ModalWrapperComponent from "./Modal/ModalWrapper/ModalWrapperComponent";

interface ISearch {
  searchActive: boolean;
  setSearchActive: (active: boolean) => void;
}

const SearchModal = ({ searchActive, setSearchActive }: ISearch) => {
  return (
    <ModalWrapperComponent handler={setSearchActive} state={searchActive} variant="">
      <ModalContent>
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
          <ModalSearch placeholder="Search..." type="text" />
        </ModalSearchWrapper>
        <ModalContentBlock title="TODAY" />
        <ModalContentBlock title="YESTERDAY" />
      </ModalContent>
    </ModalWrapperComponent>
  );
};

export default SearchModal;
