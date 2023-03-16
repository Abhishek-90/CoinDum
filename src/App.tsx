import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CoinDetails from "./Pages/CoinDetails";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-t from-[#020024] via-[#02062a] to-[#0b1260] ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/detail/*" element={<CoinDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
