import { Outlet } from "react-router-dom";
import {
  Container,
  GlobalMain,
  OutletContainer,
} from "../../styles/global/container";
import GlobalAside from "./aside";
import GlobalHeader from "./header";

const GlobalContainer = () => {
  return (
    <Container>
      <GlobalAside />
      <GlobalMain>
        <GlobalHeader />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </GlobalMain>
    </Container>
  );
};
export default GlobalContainer;
