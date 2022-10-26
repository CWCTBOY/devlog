import styled from "@emotion/styled";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { transition } from "../../../styles/global/animation";
import Tag from "./tag";

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

export const tag: TagProps[] = [
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

const CategryContainer = styled.nav<{
  widthPercentage: number;
  isClicked?: boolean;
}>`
  display: flex;
  margin: 20px 0 0 0;
  transition: ${transition};
  transform: ${({ widthPercentage, isClicked }) =>
    (widthPercentage >= 23 || isClicked) && "translateY(-50px)"};
`;

const Category = ({
  tags,
  setTags,
  isClicked,
}: {
  tags: TagProps[];
  setTags: (tags: TagProps[]) => void;
  isClicked?: boolean;
}) => {
  const { widthPercentage }: { widthPercentage: number } = useOutletContext();
  return (
    <CategryContainer widthPercentage={widthPercentage} isClicked={isClicked}>
      <ul>
        {tags.map(({ id, tag, selected }) => (
          <Tag key={id} selected={selected} tags={tags} setTags={setTags}>
            {tag}
          </Tag>
        ))}
      </ul>
    </CategryContainer>
  );
};

export default Category;
