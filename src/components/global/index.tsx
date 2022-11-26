import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useApi from "../../hooks/api/axiosInterceptor";
import { ContentsProps } from "../../interfaces/article";
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

const OutletContainer = styled.div`
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

export interface OutletContextProps {
  isBottom: boolean;
  widthPercentage: number;
  isClicked: boolean;
  smoothNavigate: (path: string) => void;
}

const GlobalContainer = () => {
  const [content, setContent] = useState<ContentsProps>();
  const [isClicked, setIsClicked] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [widthPercentage, setWidthPercentage] = useState(0);
  const pathname = useLocation().pathname.split("/");

  useEffect(() => {
    if ("article" === pathname[1]) {
      const contentId = pathname[2];
      (async () => {
        const { data, status } = await useApi.get(`article/${contentId}`);
        if (status === 200) {
          setContent(data);
        }
      })();
    } else {
      setContent(undefined);
    }
  }, [pathname[1]]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight, offsetWidth } =
      e.currentTarget;
    scrollTop >= scrollHeight - clientHeight
      ? setIsBottom(true)
      : setIsBottom(false);
    if (scrollTop === 0) {
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
        <GlobalHeader
          widthPercentage={widthPercentage}
          isBottom={isBottom}
          title={content?.title}
          lastPathname={pathname[2]}
        />
        <OutletContainer onScroll={onScroll}>
          <Outlet
            context={{ isBottom, widthPercentage, isClicked, setIsClicked }}
          />
        </OutletContainer>
      </GlobalMain>
    </Container>
  );
};

export default GlobalContainer;
