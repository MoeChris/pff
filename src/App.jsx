
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarTop from "./components/NavbarTop";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Home />
      {/* <Routes>
        <Route path="home" element={<Home />} />
      </Routes> */}
    </Router>
  );
}

export default App;
