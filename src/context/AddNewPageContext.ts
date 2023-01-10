import { createContext } from "react";

interface IProps {
  id: string | null;
  handler: (e: any) => void;
}

const AddNewPage = createContext<IProps>({
  id: null,
  handler: () => null,
});

export default AddNewPage;
