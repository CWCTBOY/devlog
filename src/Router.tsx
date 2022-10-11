import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContainer from "./components/global";
import Home from "./pages";
import Content from "./pages/content";
import MdTemplate from "./pages/mdTemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalContainer />}>
          <Route path="/" element={<Home />} />
          <Route path=":contentName" element={<Content />} />
          <Route path="new-post" element={<MdTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
