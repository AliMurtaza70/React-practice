import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./Routes/dashboard/dashboard";
import CreateBlog from "./Routes/createblog/createBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
