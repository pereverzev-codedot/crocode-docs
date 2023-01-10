import styled from "@emotion/styled";

const EditorContainer = styled("div")`
  width: 100%;
  position: relative;
  padding: 0 100px;
  height: 100%;

  .codex-editor {
    height: 100%;

    &__redactor {
      min-height: 100%;
    }
  }
  .image-tool__image-picture {
    width: 100%;
  }
`;

export default EditorContainer;
