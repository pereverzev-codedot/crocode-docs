import { OutputData } from "@editorjs/editorjs/types/data-formats/output-data";
import { createContext } from "react";
import { IDoc, IDocuments } from "../hooks/useDocuments";

type IGetDocuments = (
  form: string[],
  id: string,
  loadingHandler: React.Dispatch<React.SetStateAction<boolean>>,
) => Promise<void>;
type INoop = () => void;

type IGetDocument = (id: string) => Promise<void>;

type IUpdateDocuments = (
  itemId: string,
  key: "icon" | "title" | "content",
  value: string | OutputData,
) => void;

type ICreateDocuments = (id: string, title: string) => void;

type IRestoreRemovedDocument = (id: string) => Promise<void>;

type IDeleteDocument = (id: string, flag?: boolean) => Promise<void>;

export interface IData {
  documents: IDocuments;
  error: string | null;
  activeDocument: IDoc | null;
  getActiveDocument: IGetDocument | INoop;
  getRootDocuments: INoop;
  getDocuments: IGetDocuments | INoop;
  updateDocuments: IUpdateDocuments | INoop;
  createDocument: ICreateDocuments | INoop;
  restoreRemovedDocument: IRestoreRemovedDocument | INoop;
  removedDocuments: IDocuments;
  getRemovedDocuments: INoop;
  deleteDocument: IDeleteDocument | INoop;
}

const noop = () => null;

const DocumentContext = createContext<IData>({
  documents: null,
  activeDocument: null,
  getActiveDocument: noop,
  getRootDocuments: noop,
  getDocuments: noop,
  updateDocuments: noop,
  createDocument: noop,
  error: null,
  restoreRemovedDocument: noop,
  removedDocuments: null,
  getRemovedDocuments: noop,
  deleteDocument: noop,
});

export default DocumentContext;
