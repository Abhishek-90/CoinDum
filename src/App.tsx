import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./dist/styles.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
