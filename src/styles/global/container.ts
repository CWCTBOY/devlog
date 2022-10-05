import styled from "@emotion/styled";

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
  height: calc(100% - 120px);
  padding: 0 15px;
  overflow: scroll;
`;

export { Container, GlobalMain, OutletContainer };
