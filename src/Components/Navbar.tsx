import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <div className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="app-title">
          <Link className="link title-link" to="" onClick={goTop}>
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
          <Link className="link choose-link" to="/about">
            Choose Us
          </Link>
          <Link className="link join-link" to="/about">
            Join Us
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

      <div className="side-bar"></div>
    </div>
  );
}

export default Navbar;
