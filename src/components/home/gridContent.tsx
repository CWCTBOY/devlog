import styled from "@emotion/styled";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ContentsProps } from ".";
import { transition } from "../../styles/global/animation";
import { MdChatBubbleOutline, MdRemoveRedEye } from "react-icons/md";

const Content = styled.div<{ isBottom: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRad.min};
  cursor: pointer;
  overflow: hidden;
  margin: 0 0 15px 0;
  transition: ${transition};
  box-shadow: 22px 25px 17px -22px rgba(150, 242, 215, 0.3);
  transform: ${({ isBottom }) => isBottom && `rotate(2deg)`};
  &:hover {
    transform: rotate(-2deg);
    box-shadow: 22px 25px 17px -12px rgba(150, 242, 215, 0.4);
    transform-origin: bottom left;
  }
`;

const Thumbnail = styled.img`
  width: 150%;
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
  content: { image, title, view, comment, tags },
  setIsClicked,
}: {
  content: ContentsProps;
  setIsClicked: (arg: boolean) => void;
}) => {
  const nav = useNavigate();
  const { isBottom }: { isBottom: boolean } = useOutletContext();
  return (
    <Content
      isBottom={isBottom}
      onClick={() => {
        setIsClicked(true);
        setTimeout(() => {
          nav(`${title}`);
        }, 200);
      }}
    >
      <Thumbnail src={image} />
      <ContentLayer>
        <div className="head">
          <span className="title">{title}</span>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="foot">
          <div className="comment">
            <MdChatBubbleOutline />
            <span className="text">{comment}</span>
          </div>
          <div className="view">
            <MdRemoveRedEye />
            <span className="text">{view}</span>
          </div>
        </div>
      </ContentLayer>
    </Content>
  );
};

export default GridContent;
