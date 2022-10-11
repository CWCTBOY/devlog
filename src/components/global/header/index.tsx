import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link, useLocation, useParams } from "react-router-dom";
import headerIcon from "../../../assets/developer_icon.png";

const Header = styled.header<{
  widthPercentage: number;
}>`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  padding: 0 15px;
  box-shadow: 0px 15px 10px -15px ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  z-index: 1;
  .title {
    position: absolute;
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
  .icon {
    width: 50px;
    position: absolute;
    bottom: 0;
    border-radius: 0 5px;
    transform: translateX(${({ widthPercentage }) => widthPercentage}px);
    z-index: 1;
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

const GlobalHeader = ({ widthPercentage }: { widthPercentage: number }) => {
  const { contentName } = useParams();
  const { pathname } = useLocation();
  return (
    <Header widthPercentage={widthPercentage}>
      {contentName && (
        <div className="title">
          <span>{contentName}</span>
        </div>
      )}
      {pathname === "/new-post" && (
        <div className="title">
          <span>NEW POST</span>
        </div>
      )}
      <Link to="/">
        <img src={headerIcon} alt="headerIcon" className="icon" />
      </Link>
      <div className="progressionBar" />
    </Header>
  );
};

export default GlobalHeader;
