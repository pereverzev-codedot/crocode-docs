import { useCallback, useEffect, useState, useContext } from "react";
import UserContext from "@context/UserContext";
import { useHttp } from "./useHttp";
import { OutputData } from "@editorjs/editorjs/types/data-formats/output-data";
import { useParams, useNavigate } from "react-router-dom";
import { _BASE_URL } from "@config/variables";

interface IBreadcrumbs {
  id: string;
  parent_id: string;
  icon: string;
  title: string;
  child_id: string[];
}
export interface IDoc {
  parent_id: string | null;
  id: string;
  title: string;
  icon: string;
  child_id: string[];
  content?: OutputData | null;
  updatedAt?: Date;
  createdAt?: Date;
  breadcrumbs?: IBreadcrumbs[] | null;
}

interface ISuccessResponse<T> {
  data: T;
  success: boolean;
}

export type IDocuments = IDoc[] | null;

const _defaultContent = {
  time: Date.now(),
  blocks: [
    {
      id: "8_Os0SK9d2",
      type: "paragraph",
      data: { text: "Write here your awesome story" },
    },
  ],
  version: "2.24.3",
};

const _defaultDocument = (
  title: string,
  id: string,
  parent_id: "root" | string,
  creatorId: string,
) => {
  return {
    id: id,
    title: title,
    icon: "page_facing_up",
    parent_id: parent_id === "root" ? null : parent_id,
    child_id: [],
    content: _defaultContent,
    creatorId: creatorId,
  } as IDoc;
};

const useDocuments = () => {
  const [documents, setDocuments] = useState<IDocuments>(null);
  const [removedDocuments, setRemovedDocuments] = useState<IDocuments>(null);
  const [activeDocument, setActiveDocument] = useState<IDoc | null>(null);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const { documentId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { request, error } = useHttp();

  const getRootDocuments = useCallback(async () => {
    const response = (await request(`${_BASE_URL}/docs`, "GET")) as ISuccessResponse<IDoc[]>;
    if (response.success === false) {
      return setDocuments([]);
    } else {
      setDocuments(response.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request]);

  const getActiveDocument = useCallback(
    async (id: string) => {
      const localDocument = documents!.find((doc) => doc.id === id);
      let unionDoc = {} as IDoc;
      if (localDocument?.content) {
        setActiveDocument(localDocument);
      } else {
        const res = await request(`${_BASE_URL}/docs/doc`, "POST", { id: id });
        unionDoc = { ...localDocument, ...res.data.data, breadcrumbs: res.data.array };
      }
      setDocuments([...documents!.map((el) => (el.id === id ? { ...el, ...unionDoc } : el))]);
      setActiveDocument({ ...localDocument, ...unionDoc });
    },
    [documents, request],
  );

  const getDocuments = async (
    form: string[],
    id: string,
    loadingHandler: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    loadingHandler(true);
    const response = (await request(`${_BASE_URL}/docs/children`, "POST", {
      idx: [...form],
    })) as ISuccessResponse<IDoc[]>;

    setDocuments((currState) => {
      return [
        ...currState!.filter((el) => !response.data.find((newEl) => newEl.id === el.id)),
        ...response.data,
      ] as IDocuments;
    });
    loadingHandler(false);
  };

  const updateDocuments = async (
    itemId: string,
    key: "title" | "icon" | "content",
    value: string | OutputData,
  ) => {
    const data = await request(
      `${_BASE_URL}/docs`,
      "PATCH",
      {
        id: itemId,
        [key]: value,
      },
      {
        Authorization: `Bearer ${user?.token}`,
      },
    );

    setDocuments([...documents!.map((el) => (el.id === itemId ? { ...el, [key]: value } : el))]);
  };

  const createDocument = async (id: string, title: string) => {
    const newId = `${Date.now()}`;
    const newDocument = _defaultDocument(title, newId, id, user?.id || "");
    const data = await request(`${_BASE_URL}/docs`, "POST", newDocument, {
      Authorization: `Bearer ${user?.token}`,
    });

    setDocuments([
      ...documents!.map((el) => (el.id === id ? { ...el, child_id: [...el.child_id, newId] } : el)),
      newDocument,
    ]);
  };

  const deleteDocument = async (id: string, flag = false) => {
    const data = await request(
      `${_BASE_URL}/docs`,
      "DELETE",
      { id, flag },
      {
        Authorization: `Bearer ${user?.token}`,
      },
    );
    const remDocs = removedDocuments?.length ? [...removedDocuments] : [];
    if (flag) {
      setRemovedDocuments([...removedDocuments!.filter((el) => el.id !== id)]);
    }
    if (!flag) {
      setRemovedDocuments([...documents!.filter((el) => el.id === id), ...remDocs]);
    }
    setDocuments([...documents!.filter((el) => el.id !== id)]);
  };

  const getRemovedDocuments = async () => {
    const data = await request(`${_BASE_URL}/docs/trash`, "GET", null, {
      Authorization: `Bearer ${user?.token}`,
    });

    if (data.success) {
      setRemovedDocuments(data.data);
    }
  };

  const restoreRemovedDocument = async (id: string) => {
    const data = await request(
      `${_BASE_URL}/docs/trash`,
      "POST",
      { id },
      {
        Authorization: `Bearer ${user?.token}`,
      },
    );

    setRemovedDocuments(data);
  };

  const duplicateDocument = async (id: string) => {
    const data = await request(
      `${_BASE_URL}/docs/duplicate`,
      "POST",
      { id },
      {
        Authorization: `Bearer ${user?.token}`,
      },
    );
  };

  useEffect(() => {
    getRootDocuments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getRootDocuments]);

  useEffect(() => {
    if (isFirstRender && documents) {
      if (documentId) {
        getActiveDocument(documentId.split("--").reverse()[0]);
        navigate(`/${documentId}`);
      } else {
        if (documents.length > 0) {
          const { title, id } = documents[0];
          getActiveDocument(id);
          navigate(`/${title}--${id}`);
        }
      }
      setIsFirstRender(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documents, getActiveDocument, isFirstRender]);

  useEffect(() => {
    if (documentId && !isFirstRender) {
      getActiveDocument(documentId.split("--").reverse()[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentId]);

  return {
    documents,
    activeDocument,
    error,
    getRootDocuments,
    getActiveDocument,
    getDocuments,
    updateDocuments,
    createDocument,
    restoreRemovedDocument,
    getRemovedDocuments,
    deleteDocument,
    removedDocuments,
    duplicateDocument,
  };
};

export default useDocuments;
