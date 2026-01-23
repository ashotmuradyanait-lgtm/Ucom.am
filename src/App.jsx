
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Business from "./pages/Business.jsx";

function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
        </Routes>

      <Footer />
    </Router>
  );
}
export default App;
