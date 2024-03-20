import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Common Elements/Footer";
import Navbar from "./Components/Common Elements/Navbar";
import MobileNavbar from "./Components/Common Elements/MobileNavbar";
import UniqueFeature from "./Components/Unique Features/UniqueFeature";
import Services from "./Components/Services/Services.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uniquefeature/:section" element={<UniqueFeature />} />
        <Route path="/services/:section/:subsection" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
