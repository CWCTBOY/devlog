import styled from "@emotion/styled";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { transition } from "../../styles/global/animation";
import GlobalAside from "./aside";
import GlobalHeader from "./header";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const GlobalMain = styled.main`
  width: calc(100% - 400px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  padding: 0 40px;
`;

const OutletContainer = styled.div<{ isBottom: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  overflow: scroll;
  border-radius: 10px;
  transition: ${transition};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GlobalContainer = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [widthPercentage, setWidthPercentage] = useState(0);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight, offsetWidth } =
      e.currentTarget;
    if (scrollTop === scrollHeight - clientHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
    const perScroll =
      ((offsetWidth - 60) / (scrollHeight - clientHeight)) * scrollTop;
    setWidthPercentage(perScroll);
  };
  return (
    <Container>
      <GlobalAside />
      <GlobalMain>
        <GlobalHeader widthPercentage={widthPercentage} />
        <OutletContainer onScroll={onScroll} isBottom={isBottom}>
          <Outlet context={{ isBottom, widthPercentage }} />
        </OutletContainer>
      </GlobalMain>
    </Container>
  );
};
export default GlobalContainer;
