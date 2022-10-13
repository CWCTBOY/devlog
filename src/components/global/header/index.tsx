import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link, useLocation, useParams } from "react-router-dom";
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
    background-color: ${({ theme }) => theme.color.white};
    position: absolute;
    bottom: 0;
    z-index: 0;
  }
`;

const GlobalHeader = ({
  widthPercentage,
  isBottom,
}: {
  widthPercentage: number;
  isBottom: boolean;
}) => {
  const contentName = useParams().contentInfo?.split("_")[1];
  const pathname = useLocation().pathname.split("/")[2];
  return (
    <Header widthPercentage={widthPercentage} isBottom={isBottom}>
      {contentName && (
        <div className="title">
          <span>{contentName}</span>
        </div>
      )}
      {pathname === "new-post" ? (
        <div className="title">
          <span>NEW POST</span>
        </div>
      ) : pathname === "edit-post" ? (
        <div className="title">
          <span>EDIT POST</span>
        </div>
      ) : pathname === "certification" ? (
        <div className="title">
          <span>Admin Certification</span>
        </div>
      ) : null}
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
