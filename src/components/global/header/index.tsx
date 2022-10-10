import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import headerIcon from "../../../assets/developer_icon.png";

const Header = styled.header<{ widthPercentage: number }>`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  padding: 0 15px;
  box-shadow: 0px 15px 10px -15px ${({ theme }) => theme.color.white};
  .icon {
    width: 50px;
    position: absolute;
    bottom: 0;
    box-shadow: 0px 5px 10px -3px ${({ theme }) => theme.color.white};
    transform: translateX(${({ widthPercentage }) => widthPercentage}px);
    z-index: 1;
  }
  .progressionBar {
    width: ${({ widthPercentage }) => widthPercentage + 5}px;
    height: 5px;
    background-color: ${({ theme }) => theme.color.white};
    position: absolute;
    bottom: 0;
  }
`;

const GlobalHeader = ({ widthPercentage }: { widthPercentage: number }) => {
  return (
    <Header widthPercentage={widthPercentage}>
      <Link to="/">
        <img src={headerIcon} alt="headerIcon" className="icon" />
      </Link>
      <div className="progressionBar" />
    </Header>
  );
};

export default GlobalHeader;
