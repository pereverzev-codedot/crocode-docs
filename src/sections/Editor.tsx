import { useCallback, useContext } from "react";
import DocumentContext from "@context/DocumentContext";
import useEditor from "@hooks/useEditor";
import {
  EditorContainer,
  EditorWrapper,
  EditorDocumentTitle,
  EditorDocumentButton,
} from "@components/Editor";
import EmojiIcon from "@components/Emoji";
import UserContext from "@context/UserContext";

const _CONTAINER_ID = "editorjs";

const Editor = (): JSX.Element => {
  const { user } = useContext(UserContext);
  const { activeDocument } = useContext(DocumentContext);
  const { saveData, isEdit, editDocument } = useEditor(_CONTAINER_ID, false);

  return (
    <EditorWrapper>
      {activeDocument && (
        <EditorDocumentTitle className="editor-js--document-heading">
          <div className="editor-js--document-title">
            <EmojiIcon id={activeDocument?.icon} />
            {activeDocument.title}
          </div>
        </EditorDocumentTitle>
      )}
      <EditorContainer id={_CONTAINER_ID} />
      {user?.roles.includes("ADMIN") && (
        <EditorDocumentButton onClick={isEdit ? saveData : editDocument}>
          {isEdit ? "Save" : "Edit"}
        </EditorDocumentButton>
      )}
    </EditorWrapper>
  );
};

export default Editor;
