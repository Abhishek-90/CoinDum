import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex w-full fixed justify-center">
      <nav className="w-full max-w-1580px p-[12px] flex justify-between z-50 text-white">
        <Link to="/">
          <div className="coindum-logo text-2xl font-semibold border-solid border-2 border-white tracking-wider p-1 rounded">
            <p>COINDUM</p>
          </div>
        </Link>
        <div className="links p-2">
          <ul className="list-none flex justify-between text-lg font-semibold">
            <li className="mx-10">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Market</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
