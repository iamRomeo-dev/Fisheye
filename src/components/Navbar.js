import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

export const Navbar = ({ setFilter }) => {
  return (
    <header>
      <Link to="/photographers" className="PhotographerList_header_logo">
        <img
          src={logo}
          alt="Fisheye Home page"
          onClick={() => setFilter("")}
        />
      </Link>
      <nav aria-label="Main navigation" className="Navbar_tags">
        <ul className="Tags">
          <li className="Tag">
            <button onClick={() => setFilter("portrait")} className="Tag_btn">
              #Portrait
            </button>
          </li>
          <li className="Tag">
            <button onClick={() => setFilter("art")} className="Tag_btn">
              #Art
            </button>
          </li>
          <li className="Tag">
            <button onClick={() => setFilter("fashion")} className="Tag_btn">
              #Fashion
            </button>
          </li>
          <li className="Tag">
            <button
              onClick={() => setFilter("architecture")}
              className="Tag_btn"
            >
              #Architecture
            </button>
          </li>
          <li className="Tag">
            <button onClick={() => setFilter("travel")} className="Tag_btn">
              #Travel
            </button>
          </li>
          <li className="Tag">
            <button onClick={() => setFilter("sports")} className="Tag_btn">
              #Sports
            </button>
          </li>
          <li className="Tag">
            <button onClick={() => setFilter("animals")} className="Tag_btn">
              #Animals
            </button>
          </li>
          <li className="Tag">
            <button onClick={() => setFilter("events")} className="Tag_btn">
              #Events
            </button>
          </li>
        </ul>
      </nav>
      <h1 className="NosPhotographes">Nos photographes</h1>
    </header>
  );
};
