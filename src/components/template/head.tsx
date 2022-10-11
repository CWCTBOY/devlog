import styled from "@emotion/styled";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Category, { TagProps } from "../global/category/category";

const TemplateHeader = styled.div`
  width: 100%;
  display: flex;
  margin: 0 0 20px 0;
  .headBox {
    .title {
      width: 615px;
      height: 50px;
      border: none;
      border-bottom: ${({ theme }) => `2px solid ${theme.color.lightGray}`};
      text-indent: 5px;
      font-size: ${({ theme }) => theme.font.size.xxl};
      color: ${({ theme }) => theme.color.white};
      background-color: transparent;
      &:focus {
        outline: none;
      }
    }
  }
`;

const Head = ({
  tags,
  setTags,
  children,
}: {
  tags: TagProps[];
  setTags: (tags: TagProps[]) => void;
  children: ReactJSXElement;
}) => {
  return (
    <TemplateHeader>
      <div className="headBox">
        <input
          className="title"
          name="title"
          type="text"
          placeholder="제목을 입력하세요. [최대 30자]"
          maxLength={30}
        />
        <Category tags={tags} setTags={setTags} />
      </div>
      {children}
    </TemplateHeader>
  );
};

export default Head;
