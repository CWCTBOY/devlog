import styled from "@emotion/styled";
import { transition } from "../../styles/global/animation";
import Category, { tag } from "../global/category/category";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ContentsProps } from "../../interfaces/article";
import { TagProps } from "../../interfaces/category";
import Helmet from "../global/helmet";
import useApi from "../../hooks/api/axiosInterceptor";
import GridContent from "./gridContent";
/**
 * @description dummyImage
 */
import code1 from "../../assets/dummy/code1.avif";
import code2 from "../../assets/dummy/code2.avif";
import code3 from "../../assets/dummy/code3.avif";
import code4 from "../../assets/dummy/code4.avif";
import code5 from "../../assets/dummy/code5.avif";
import code6 from "../../assets/dummy/code6.avif";
import code7 from "../../assets/dummy/code7.avif";
import code8 from "../../assets/dummy/code8.avif";
import code9 from "../../assets/dummy/code9.avif";
import code10 from "../../assets/dummy/code10.avif";
import code11 from "../../assets/dummy/code11.avif";
import code12 from "../../assets/dummy/code12.avif";
import code13 from "../../assets/dummy/code13.avif";

const dummyThumbnail = [
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9,
  code10,
  code11,
  code12,
  code13,
];

const HeadConatiner = styled.div<{ isClicked: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MasonryContainer = styled.div<{ isClicked: boolean }>`
  column-count: 3;
  column-gap: 15px;
  transition: ${transition};
  opacity: ${({ isClicked }) => (isClicked ? 0 : 1)};
  padding: 10px 0 20px 0;
`;

const Title = styled.div<{ isClicked: boolean }>`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.white};
  margin: 25px 0 5px 0;
  transition: ${transition};
  opacity: ${({ isClicked }) => (isClicked ? 0 : 1)};
`;

const Masonry = () => {
  const {
    isClicked,
  }: { isClicked: boolean; setIsClicked: (isClicked: boolean) => void } =
    useOutletContext();
  const [contents, setContents] = useState<ContentsProps[]>();
  const [tags, setTags] = useState<TagProps[]>(tag);
  const selectedTags = tags.filter((tag) => tag.selected).map(({ tag }) => tag); // selected tags
  useEffect(() => {
    (async () => {
      const { data, status } = await useApi.get<ContentsProps[]>("article/all");
      if (status === 200) {
        data.forEach((item) => {
          if (!item.thumbnailUrl) {
            item.thumbnailUrl =
              dummyThumbnail[Math.floor(Math.random() * dummyThumbnail.length)];
          }
        });
        setContents(data);
      }
    })();
  }, [tags]);
  return (
    <>
      <Helmet route="Home" />
      <HeadConatiner isClicked={isClicked}>
        <Category isClicked={isClicked} tags={tags} setTags={setTags} />
      </HeadConatiner>
      <Title isClicked={isClicked}>Articles</Title>
      <MasonryContainer isClicked={isClicked}>
        {contents?.map((content) => (
          <GridContent key={content.id} content={content} />
        ))}
      </MasonryContainer>
    </>
  );
};

export default Masonry;
