import { useMemo, useContext, useEffect, useState, useCallback } from "react";
import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import DragDrop from "editorjs-drag-drop";
// @ts-ignore
import Undo from "editorjs-undo";
import tools from "@config/editorTools";
import DocumentContext from "@context/DocumentContext";
import UserContext from "@context/UserContext";

const useEditor = (_CONTAINER_ID: string, readOnly: boolean) => {
  const { user } = useContext(UserContext);
  const { activeDocument, updateDocuments } = useContext(DocumentContext);
  const [editorReady, setEditorReady] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const editor = useMemo(
    () =>
      new EditorJS({
        onReady: () => {
          new DragDrop(editor);
          new Undo({ editor });
          setEditorReady(true);
        },
        holder: _CONTAINER_ID,
        readOnly,
        tools,
        placeholder: "Please select document",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    if (editorReady && !isEdit) {
      editor.readOnly.toggle(true);
    }
  }, [user, activeDocument, editor, editorReady, isEdit]);

  useEffect(() => {
    if (editorReady) {
      setTimeout(() => {
        if (activeDocument?.content !== null && activeDocument?.content !== undefined) {
          editor.render(activeDocument?.content);
        }
      }, 1);
    }
  }, [activeDocument, editorReady, editor]);

  const editDocument = () => {
    if (editorReady) {
      if (user?.roles.includes("ADMIN")) {
        editor.readOnly.toggle(false);
        setIsEdit(true);
      }
    }
  };

  const saveData = useCallback(async () => {
    return await editor?.save().then((outputData) => {
      updateDocuments(activeDocument!.id, "content", outputData);
      setIsEdit(false);
    });
  }, [activeDocument, editor, updateDocuments]);

  return { editor, isEdit, saveData, editDocument };
};

export default useEditor;
