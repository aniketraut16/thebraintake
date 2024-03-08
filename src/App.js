import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Common Elements/Footer";
import Navbar from "./Components/Common Elements/Navbar";
import MobileNavbar from "./Components/Common Elements/MobileNavbar";

function App() {
  return (
    <Router>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
