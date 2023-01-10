import { useCallback } from "react";
import ModalBackground from "./ModalBackground";
import ModalWrapper from "./ModalWrapper";

interface IModal {
  handler: (active: boolean) => void;
  state: boolean;
  variant: string;
  children: React.ReactNode;
}

const ModalWrapperComponent = ({ handler, state, variant = "", children }: IModal) => {
  const handleOpenModal = useCallback(() => {
    handler(!state);
  }, [handler, state]);

  return (
    <ModalWrapper modalActive={state}>
      <ModalBackground onClick={handleOpenModal} variant={variant} />
      {children}
    </ModalWrapper>
  );
};

export default ModalWrapperComponent;
