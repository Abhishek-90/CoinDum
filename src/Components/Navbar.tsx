import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="app-title">
          <Link className="link title-link" to="/">
            Coindum
          </Link>
        </div>
        <div className="nav-links">
          <Link className="link home-link" to="/">
            Home
          </Link>
          <Link className="link about-link" to="/about">
            About
          </Link>
        </div>
        <div className="connect-section">
          <a
            className="link twitter-link"
            href="https://twitter.com"
            target="_blank"
          >
            <FaTwitter className="twitter-icon" />
          </a>
          <a
            className="link discord-link"
            href="https://discord.com"
            target="_blank"
          >
            <FaDiscord className="discord-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
