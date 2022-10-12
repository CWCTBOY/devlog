import styled from "@emotion/styled";
import Category, { TagProps } from "../../global/category/category";

const TemplateHead = styled.div`
  width: 100%;
  display: flex;
  margin: 0 0 20px 0;
`;

const Head = ({
  tags,
  setTags,
}: {
  tags: TagProps[];
  setTags: (tags: TagProps[]) => void;
}) => {
  return (
    <TemplateHead>
      <Category tags={tags} setTags={setTags} />
    </TemplateHead>
  );
};

export default Head;
