import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MdSignalCellularNoSim } from "react-icons/md";
import Helmet from "../../global/helmet";

const NotYetCreatedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `} 0.8s ease-out forwards;
  .text {
    font-size: ${({ theme }) => theme.font.size.xxl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.white};
    margin-left: 10px;
  }
`;
const NotYetCreated = () => {
  return (
    <>
      <Helmet route="Not Created" />
      <NotYetCreatedContainer>
        <MdSignalCellularNoSim size={70} color="#F60062" />
        <span className="text">
          Not yet Created. <br /> This page will be show up after the SERVER
          built.
        </span>
      </NotYetCreatedContainer>
    </>
  );
};

export default NotYetCreated;
