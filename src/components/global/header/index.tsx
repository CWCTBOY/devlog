import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import headerIcon from "../../../assets/developer_icon.png";

const Header = styled.header<{
  widthPercentage: number;
  isBottom: boolean;
}>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding: 0 15px;
  box-shadow: 0px 15px 10px -15px ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  z-index: 1;
  .title {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${keyframes`
  0% {
    color: black;
  }
  100% {
    color: white;
  }
`} 0.8s ease forwards;
    font-size: ${({ theme }) => theme.font.size.xxl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
  .iconBox {
    .onScrollEnd {
      position: absolute;
      top: 25px;
      left: 40px;
      opacity: ${({ isBottom }) => (isBottom ? 1 : 0)};
      transform: translateX(${({ widthPercentage }) => widthPercentage}px);
      font-size: ${({ theme }) => theme.font.size.m};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      color: ${({ theme }) => theme.color.white};
    }
    .sad {
      position: absolute;
      top: 33px;
      left: 18px;
      opacity: ${({ isBottom }) => (isBottom ? 1 : 0)};
      transform: translateX(${({ widthPercentage }) => widthPercentage}px);
      font-size: 8px;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      color: ${({ theme }) => theme.color.black};
      z-index: 2;
    }
    .icon {
      width: 50px;
      position: absolute;
      bottom: 0;
      border-radius: 0 5px;
      transform: translateX(${({ widthPercentage }) => widthPercentage}px);
      z-index: 1;
    }
  }
  .progressionBar {
    width: ${({ widthPercentage }) => widthPercentage + 5}px;
    height: 5px;
    background: linear-gradient(to right, #7ffffe, #7f85fe);
    position: absolute;
    bottom: 0;
    z-index: 0;
  }
`;

const GlobalHeader = ({
  widthPercentage,
  isBottom,
  title,
  lastPathname,
}: {
  widthPercentage: number;
  isBottom: boolean;
  title?: string;
  lastPathname: string;
}) => {
  return (
    <Header widthPercentage={widthPercentage} isBottom={isBottom}>
      {title && (
        <div className="title">
          <span>{title}</span>
        </div>
      )}
      {lastPathname === "new-post" ? (
        <div className="title">
          <span>NEW POST</span>
        </div>
      ) : lastPathname === "edit-post" ? (
        <div className="title">
          <span>EDIT POST</span>
        </div>
      ) : lastPathname === "certification" ? (
        <div className="title">
          <span>Admin Certification</span>
        </div>
      ) : (
        <div className="title">
          <span>Devlog</span>
        </div>
      )}
      <Link to="/">
        <div className="iconBox">
          <span className="onScrollEnd">그만내려</span>
          <span className="sad">ㅠㅠ</span>
          <img src={headerIcon} alt="headerIcon" className="icon" />
        </div>
      </Link>
      <div className="progressionBar" />
    </Header>
  );
};

export default GlobalHeader;
