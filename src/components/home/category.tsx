import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { transition } from "../../styles/global/animation";
import Tag from "./tag";

const CategryContainer = styled.div<{ widthPercentage: number }>`
  display: flex;
  position: fixed;
  margin: 20px 0 20px 0;
  transition: ${transition};
  opacity: ${({ widthPercentage }) => (widthPercentage >= 60 ? 0 : 1)};
  transform: ${({ widthPercentage }) =>
    widthPercentage >= 60 && "translateY(-200px)"};
`;

export interface TagProps {
  id: number;
  tag:
    | "Algorithm"
    | "Web"
    | "Database"
    | "Network"
    | "CS"
    | "Python"
    | "Java"
    | "Spring";
  selected: boolean;
}

const tag: TagProps[] = [
  {
    id: 0,
    tag: "Algorithm",
    selected: false,
  },
  {
    id: 1,
    tag: "Web",
    selected: false,
  },
  {
    id: 2,
    tag: "Database",
    selected: false,
  },
  {
    id: 3,
    tag: "Network",
    selected: false,
  },
  {
    id: 4,
    tag: "CS",
    selected: false,
  },
  {
    id: 5,
    tag: "Java",
    selected: false,
  },
  {
    id: 6,
    tag: "Spring",
    selected: false,
  },
  {
    id: 7,
    tag: "Python",
    selected: false,
  },
];

const Category = () => {
  const { widthPercentage }: { widthPercentage: number } = useOutletContext();
  useEffect(() => {
    console.log(widthPercentage);
  });
  const [tags, setTags] = useState(tag);
  const selectedTags = tags.filter((tag) => tag.selected).map(({ tag }) => tag); // selected tags
  return (
    <CategryContainer widthPercentage={widthPercentage}>
      {tags.map(({ id, tag, selected }) => (
        <Tag key={id} selected={selected} tags={tags} setTags={setTags}>
          {tag}
        </Tag>
      ))}
    </CategryContainer>
  );
};

export default Category;
