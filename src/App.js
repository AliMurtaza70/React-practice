import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./Routes/dashboard/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/about" element={<About />} /> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
