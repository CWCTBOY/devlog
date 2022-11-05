import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MdWarningAmber } from "react-icons/md";
import Helmet from "../../global/helmet";

const NotFoundContainer = styled.div`
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

const NotFound = () => {
  return (
    <>
      <Helmet route="404" />
      <NotFoundContainer>
        <MdWarningAmber size={70} color="#1E71F5" />
        <span className="text">404 NotFound</span>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
