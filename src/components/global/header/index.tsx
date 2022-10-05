import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import headerIcon from "../../../assets/developer_icon.png";

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px 0;
  box-shadow: 0px 15px 10px -15px ${({ theme }) => theme.color.white};
  .icon {
    width: 50px;
    box-shadow: 0px 5px 10px -5px ${({ theme }) => theme.color.white};
  }
`;

const GlobalHeader = () => {
  return (
    <Header>
      <Link to="/">
        <img src={headerIcon} alt="headerIcon" className="icon" />
      </Link>
    </Header>
  );
};

export default GlobalHeader;
