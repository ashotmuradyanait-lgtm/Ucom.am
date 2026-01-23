import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Business from "./pages/Business.jsx";

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <Home />
        <Business />
      </main>

      <Footer />
    </div>
  );
}

export default App;
