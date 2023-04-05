import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./dist/styles.css";
import Home from "./Pages/Home";
import CoinDetails from "./Pages/CoinDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coinDetails/*" element={<CoinDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
