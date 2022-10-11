import styled from "@emotion/styled";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor as Template } from "@toast-ui/react-editor";
import React, { createRef, RefObject, useEffect, useState } from "react";
// import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

const EditorContainer = styled.div`
  height: calc(100% - 120px);
  border-radius: 10px;
`;

const Editor = () => {
  const textRef: RefObject<any> = createRef();
  const [descriptions, setDescriptions] = useState("# Write your post here");
  const handleChangeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setDescriptions(textRef.current?.getInstance().getMarkdown());
    console.log(e.currentTarget);
  };
  // useEffect(() => {
  //   console.log(descriptions);
  // });
  return (
    <EditorContainer>
      <Template
        // ref={textRef}
        previewStyle="vertical"
        height="100%"
        theme="dark"
        initialEditType="markdown"
        useCommandShortcut={true}
        autofocus={false}
        onChange={(e: any) => {
          handleChangeInput(e);
        }}
        initialValue={descriptions}
      />
    </EditorContainer>
  );
};

export default Editor;
