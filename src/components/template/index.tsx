import styled from "@emotion/styled";
import { useState } from "react";
import { tag, TagProps } from "../global/category/category";
import Editor from "./editor";
import Head from "./head";

const MdTemplateContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  .post {
    width: 200px;
    height: 50px;
    margin: auto 0 0 auto;
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    border: none;
    border-radius: ${({ theme }) => theme.borderRad.default};
    background-color: ${({ theme }) => theme.color.highlight};
    cursor: pointer;
  }
`;

const Template = () => {
  const [tags, setTags] = useState<TagProps[]>(tag);
  const selectedTags = tags.filter((tag) => tag.selected).map(({ tag }) => tag); // selected tags
  return (
    <MdTemplateContainer>
      <Head tags={tags} setTags={setTags}>
        <button className="post">NEW POST</button>
      </Head>
      <Editor />
    </MdTemplateContainer>
  );
};

export default Template;
