import styled from "@emotion/styled";
import { useState } from "react";
import { tag, TagProps } from "../../global/category/category";
import Editor from "./editor";
import Head from "./head";

const MdTemplateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px 0;
`;

const Foot = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .cancel,
  .post {
    width: 100px;
    height: 28px;
    margin: 0 0 0 5px;
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    border: none;
    border-radius: ${({ theme }) => theme.borderRad.min};

    cursor: pointer;
  }
  .cancel {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
  .post {
    background-color: ${({ theme }) => theme.color.highlight};
  }
`;

const Template = () => {
  const [tags, setTags] = useState<TagProps[]>(tag);
  const selectedTags = tags.filter((tag) => tag.selected).map(({ tag }) => tag); // selected tags
  return (
    <MdTemplateContainer>
      <Head tags={tags} setTags={setTags} />
      <Editor />
      <Foot>
        <button className="cancel">cancel</button>
        <button className="post">post</button>
      </Foot>
    </MdTemplateContainer>
  );
};

export default Template;
