import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./Routes/dashboard/dashboard";
import CreateBlog from "./Routes/createblog/createBlog";
import BlogPage from "./components/blogPage/BlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
