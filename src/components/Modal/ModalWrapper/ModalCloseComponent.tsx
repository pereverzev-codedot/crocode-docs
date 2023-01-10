import { useCallback } from "react";
import ModalCloseIconWrapper from "./ModalCloseIconWrapper";

interface IProps {
  state: boolean;
  handler: (active: boolean) => void;
}

const ModalCloseComponent = ({ state, handler }: IProps) => {
  const handleCloseModal = useCallback(() => {
    handler(!state);
  }, [handler, state]);

  return (
    <ModalCloseIconWrapper onClick={handleCloseModal}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 18L6 6M18 6L6 18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ModalCloseIconWrapper>
  );
};

export default ModalCloseComponent;
