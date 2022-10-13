import styled from "@emotion/styled";
import React from "react";
import { transition } from "../../../styles/global/animation";
import { TagProps } from "./category";

const TagBox = styled.li<{ selected: boolean }>`
  display: inline-block;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.color.highlight : theme.color.white};
  border-radius: ${({ theme }) => theme.borderRad.min};
  margin: 0 5px 5px 0;
  padding: 5px 10px;
  transition: ${transition};
  color: ${({ theme, selected }) =>
    selected ? theme.color.black : theme.color.white};
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.highlight : theme.color.black};
  &:hover {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.highlight};
    border: 1px solid ${({ theme }) => theme.color.highlight};
    transform: translateY(3px);
  }
  cursor: pointer;
`;

const Tag = ({
  selected,
  tags,
  setTags,
  children,
}: {
  selected: boolean;
  tags: TagProps[];
  setTags: (arg: TagProps[]) => void;
  children: React.ReactNode;
}) => {
  const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const newTags = [...tags];
    for (let i = 0; i < newTags.length; i++) {
      if (newTags[i].tag === e.currentTarget.innerText) {
        newTags[i].selected = !newTags[i].selected;
        break;
      }
    }
    setTags(newTags);
  };
  return (
    <TagBox selected={selected} onClick={onClick}>
      {children}
    </TagBox>
  );
};

export default Tag;
