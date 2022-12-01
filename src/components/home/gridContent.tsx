import styled from "@emotion/styled";
import { useNavigate, useOutletContext } from "react-router-dom";
import { transition } from "../../styles/global/animation";
import { MdRemoveRedEye, MdOutlineThumbUp } from "react-icons/md";
import { ContentsProps } from "../../interfaces/article";

const Content = styled.div<{ isBottom: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRad.min};
  background-color: gray;
  cursor: pointer;
  overflow: hidden;
  margin: 0 0 15px 0;
  transition: ${transition};
  box-shadow: ${({ isBottom }) =>
    isBottom
      ? "22px 25px 17px -12px rgba(148, 241, 214, 0.2)"
      : " 22px 25px 17px -22px rgba(255, 255, 255, 0.3)"};
  transform: ${({ isBottom }) => isBottom && `rotate(1deg)`};
  &:hover {
    transform: translateY(-5px);
    box-shadow: 22px 25px 17px -12px rgba(255, 255, 255, 0.4);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const ContentLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 10px;
  .head {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      display: inline-block;
      width: 100%;
      font-size: ${({ theme }) => theme.font.size.xxl};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      line-height: 120%;
      color: ${({ theme }) => theme.color.white};
    }
    .tags {
      display: flex;
      color: ${({ theme }) => theme.color.highlight};
      .tag {
        margin: 0 4px 0 0;
      }
    }
  }
  .foot {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .comment,
    .view {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.color.white};
      font-size: ${({ theme }) => theme.font.size.m};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      margin: 0 0 0 5px;
      .text {
        margin: 0 0 0 5px;
      }
    }
  }
`;

const GridContent = ({
  content: { id, title, thumbnailUrl, tags, view, likeCount },
}: {
  content: ContentsProps;
}) => {
  const {
    isBottom,
    setIsClicked,
  }: { isBottom: boolean; setIsClicked: (isClicked: boolean) => void } =
    useOutletContext();
  const navigate = useNavigate();

  return (
    <Content
      isBottom={isBottom}
      onClick={() => {
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
          navigate(`article/${id}`);
        }, 200);
      }}
    >
      <Thumbnail src={thumbnailUrl} />
      <ContentLayer>
        <div className="head">
          <span className="title">{title}</span>
          <div className="tags">
            {/* {tags.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))} */}
          </div>
        </div>
        <div className="foot">
          <div className="view">
            <MdRemoveRedEye />
            <span className="text">{view}</span>
          </div>
          <div className="view">
            <MdOutlineThumbUp />
            <span className="text">{likeCount}</span>
          </div>
        </div>
      </ContentLayer>
    </Content>
  );
};

export default GridContent;
