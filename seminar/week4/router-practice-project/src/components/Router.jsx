import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostList />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
