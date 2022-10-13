import { BrowserRouter, Route, Routes } from "react-router-dom";
import Certification from "./components/admin/certificate";
import Template from "./components/admin/template";
import GlobalContainer from "./components/global";
import Home from "./pages";
import Content from "./pages/content";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalContainer />}>
          <Route path="/" element={<Home />} />
          <Route path=":contentInfo" element={<Content />} />
          <Route path="admin">
            <Route path="certification" element={<Certification />} />
            <Route path="new-post" element={<Template />} />
            <Route path="edit-post/:contentId" element={<Template />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
