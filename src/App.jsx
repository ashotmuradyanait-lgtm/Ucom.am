// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// Dummy components (կարող ես փոխել քո իսկական ֆայլերով)
function Header() { return <header style={{textAlign: "center"}}>Header</header>; }
function Footer() { return <footer style={{textAlign: "center"}}>Footer</footer>; }
function Home() { return <div style={{textAlign: "center"}}>Home էջ</div>; }
function Business() { return <div style={{textAlign: "center"}}>Business էջ</div>; }

// Կոճակ կոմպոնենտ, որը աշխատում է և route, և արտաքին URL
function GoButton() {
  const navigate = useNavigate();

  const handleClick = (destination) => {
    if (destination.startsWith("http")) {
      window.open(destination, "_blank", "noopener,noreferrer");
    } else {
      navigate(destination);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => handleClick("/business")} style={buttonStyle}>
        Գնալ Business էջ
      </button>
      <button
        onClick={() => handleClick("https://instagram.com/myprofile")}
        style={{ ...buttonStyle, marginLeft: "10px" }}
      >
        Գնալ իմ Instagram
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

function App() {
  return (
    <Router>
      <Header />

      <main style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
        </Routes>

        <GoButton />
      </main>

      <Footer />
    </Router>
  );
}

export default App;

