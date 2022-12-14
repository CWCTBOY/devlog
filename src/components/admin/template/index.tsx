import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { tokenCheck } from "../../../hooks/certificate/temporalCertification";
import { TagProps } from "../../../interfaces/category";
import Forbidden from "../../common/static/Forbidden";
import { tag } from "../../global/category/category";
import Editor from "./editor";
import Head from "./head";
import { ArticleProps } from "../../../interfaces/article"; // * req schema
import Helmet from "../../global/helmet";
import { useLocation } from "react-router-dom";
import useApi from "../../../hooks/api/axiosInterceptor";

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
  justify-content: space-between;
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
  .left {
    .addThumbnail {
      width: 100px;
      height: 28px;
      font-size: ${({ theme }) => theme.font.size.m};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      border: none;
      border-radius: ${({ theme }) => theme.borderRad.min};
      cursor: pointer;
    }
  }
  .right {
    .cancel {
      background-color: ${({ theme }) => theme.color.lightGray};
    }
    .post {
      background-color: ${({ theme }) => theme.color.highlight};
    }
  }
`;

const Template = () => {
  const [tags, setTags] = useState<TagProps[]>(tag);
  const selectedTags = tags.filter((tag) => tag.selected).map(({ tag }) => tag);
  const [content, setContent] = useState("# Hello World!");
  const loc = useLocation().pathname.split("/")[2];
  const post = async () => {
    const contentList = content.split(">")[1];
    const title = contentList.slice(0, contentList[1].length - 5);
    const request = {
      title,
      content,
      selectedTags,
    };
    console.log(request);
    console.log(selectedTags);

    const { data, status } = await useApi.post("/article/new", request);
    if (status === 201) {
      console.log(data);
    }
  };
  return (
    <>
      <Helmet route={loc === "new-post" ? "Post" : "Edit"} />
      {tokenCheck() ? (
        <MdTemplateContainer>
          <Head tags={tags} setTags={setTags} />
          <Editor contents={content} setContent={setContent} />
          <Foot>
            <div className="left">
              <button className="addThumbnail">thumbnail</button>
            </div>
            <div className="right">
              <button className="cancel">cancel</button>
              <button className="post" onClick={post}>
                post
              </button>
            </div>
          </Foot>
        </MdTemplateContainer>
      ) : (
        <Forbidden />
      )}
    </>
  );
};

export default Template;
