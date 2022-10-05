import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContainer from "./components/global";
import Home from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalContainer />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
