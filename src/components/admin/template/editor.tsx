import styled from "@emotion/styled";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor as Template } from "@toast-ui/react-editor";
import { createRef, RefObject } from "react";

const EditorContainer = styled.div`
  height: calc(100% - 120px);
  border-radius: 10px;
`;

const Editor = ({
  contents,
  setContent,
}: {
  contents: string;
  setContent: (contents: any) => void;
}) => {
  const textRef: RefObject<any> = createRef();
  const handleChangeInput = () => {
    const text = textRef.current.getInstance().getHTML();
    setContent(text);
  };
  return (
    <EditorContainer>
      <Template
        ref={textRef}
        height="100%"
        theme="dark"
        hideModeSwitch={true}
        initialEditType="markdown"
        useCommandShortcut={true}
        autofocus={false}
        onChange={handleChangeInput}
        initialValue={contents}
      />
    </EditorContainer>
  );
};

export default Editor;
