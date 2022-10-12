import styled from "@emotion/styled";
import GridContent from "./gridContent";
/*
dummyImageProducer
*/
import code1 from "../../assets/dummy/code1.png";
import code2 from "../../assets/dummy/code2.jpeg";
import code3 from "../../assets/dummy/code3.jpeg";
import code4 from "../../assets/dummy/code4.jpeg";
import { MdModeEditOutline } from "react-icons/md";
import { transition } from "../../styles/global/animation";
import Category, { tag, TagProps } from "../global/category/category";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { tokenCheck } from "../../certificate/temporalCertification";

export interface ContentsProps {
  id: number;
  image: string;
  title: string;
  view: number;
  comment: number;
  tags: (
    | "Algorithm"
    | "Web"
    | "Database"
    | "Network"
    | "CS"
    | "Python"
    | "Java"
    | "Spring"
  )[];
}

const dummyData: ContentsProps[] = [
  {
    id: 1,
    image: code1,
    title: "How MVC Pattern Works?",
    view: 100,
    comment: 123,
    tags: ["Java", "Spring"],
  },
  {
    id: 2,
    image: code3,
    title: "Spring Container Beans Technology",
    view: 100,
    comment: 123,
    tags: ["Java", "Spring"],
  },
  {
    id: 3,
    image: code2,
    title: "TCP Protocol",
    view: 100,
    comment: 123,
    tags: ["Network"],
  },
  {
    id: 4,
    image: code4,
    title: "UDP Protocol",
    view: 100,
    comment: 123,
    tags: ["Network"],
  },
  {
    id: 5,
    image: code4,
    title: "How React Works?",
    view: 100,
    comment: 123,
    tags: ["Web"],
  },
  {
    id: 6,
    image: code2,
    title: "Destructuring in JavaScript",
    view: 100,
    comment: 123,
    tags: ["Web"],
  },
  {
    id: 7,
    image: code3,
    title: "CRA vs Next.js",
    view: 100,
    comment: 123,
    tags: ["Web"],
  },
  {
    id: 8,
    image: code1,
    title: "We don't need Redux, but needs Recoil",
    view: 100,
    comment: 123,
    tags: ["Web"],
  },
  {
    id: 9,
    image: code3,
    title: "My First Spring Project",
    view: 100,
    comment: 123,
    tags: ["Java", "Spring"],
  },
  {
    id: 10,
    image: code2,
    title: "How JWT Authentication Transmits",
    view: 100,
    comment: 123,
    tags: ["Web", "Java", "Spring", "Network"],
  },
  {
    id: 11,
    image: code1,
    title: "We understand how React Router works",
    view: 100,
    comment: 123,
    tags: ["Web"],
  },
  {
    id: 12,
    image: code4,
    title: "TypeScript vs JavaScript",
    view: 100,
    comment: 123,
    tags: ["Web"],
  },
];

const HeadConatiner = styled.div<{ isClicked: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .adminPost {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 28px;
    margin: 20px 0 0 0;
    border: none;
    border-radius: ${({ theme }) => theme.borderRad.min};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.lightGray};
    cursor: pointer;
    transition: ${transition};
    opacity: ${({ isClicked }) => (isClicked ? 0 : 1)};
    &:hover {
      color: ${({ theme }) => theme.color.black};
      background-color: ${({ theme }) => theme.color.highlight};
    }
  }
`;

const MasonryContainer = styled.div<{ isClicked: boolean }>`
  column-count: 3;
  column-gap: 15px;
  transition: ${transition};
  opacity: ${({ isClicked }) => (isClicked ? 0 : 1)};
`;

const Title = styled.div<{ isClicked: boolean }>`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.white};
  margin: 30px 0 5px 0;
  transition: ${transition};
  opacity: ${({ isClicked }) => (isClicked ? 0 : 1)};
`;

const Masonry = () => {
  const {
    isClicked,
    setIsClicked,
  }: { isClicked: boolean; setIsClicked: (isClicked: boolean) => void } =
    useOutletContext();
  const navigate = useNavigate();
  const [tags, setTags] = useState<TagProps[]>(tag);
  const selectedTags = tags.filter((tag) => tag.selected).map(({ tag }) => tag); // selected tags
  return (
    <>
      <HeadConatiner isClicked={isClicked}>
        <Category isClicked={isClicked} tags={tags} setTags={setTags} />
        {tokenCheck() && (
          <button
            className="adminPost"
            onClick={() => {
              setIsClicked(true);
              setTimeout(() => {
                setIsClicked(false);
                navigate("admin/new-post");
              }, 200);
            }}
          >
            <MdModeEditOutline />
          </button>
        )}
      </HeadConatiner>
      <Title isClicked={isClicked}>Articles</Title>
      <MasonryContainer isClicked={isClicked}>
        {dummyData.map((content) => (
          <GridContent key={content.id} content={content} />
        ))}
      </MasonryContainer>
    </>
  );
};

export default Masonry;
