import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleMobile = () => {
    setMobile(!mobile);
  };

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
          <Link className="link home-link" to="/" onClick={goTop}>
            Home
          </Link>
          <a className="link about-link" href="#market">
            About
          </a>
          <Link className="link choose-link" to="#choose">
            Choose Us
          </Link>
          <Link className="link join-link" to="#join">
            Join Us
          </Link>
        </div>
        <div className="connect-section">
          <a
            className="link twitter-link"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="twitter-icon" />
          </a>
          <a
            className="link discord-link"
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord className="discord-icon" />
          </a>
        </div>

        <button className="menu-btn" onClick={handleMobile}>
          <AiOutlineMenu className="hamburger-icon" />
        </button>
      </div>

      <div className={`menu ${mobile ? "open" : "close"}`}>
        <button className="btn btn-close" onClick={handleMobile}>
          <IoIosClose className="close-icon" />
        </button>

        <div className="links">
          <Link className="link home-link" to="/" onClick={handleMobile}>
            Home
          </Link>
          <Link className="link about-link" to="/about" onClick={handleMobile}>
            About
          </Link>
          <Link className="link choose-link" to="/about" onClick={handleMobile}>
            Choose Us
          </Link>
          <Link className="link join-link" to="/about" onClick={handleMobile}>
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
