import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ setFilter }) => {
  return (
    <header>
      <Link to="/photographers" className="PhotographerList_header_logo">
        <img
          src={`${process.env.PUBLIC_URL}/logo.svg`}
          alt="Fisheye Home page"
          onClick={() => setFilter("")}
        />
      </Link>
      <nav aria-label="Main navigation" className="Navbar_tags">
        {/* Ancore to Lilly Keel id */}
        <a href="#243" className="Hidden_link">
          Passer au contenu
        </a>
        <ul className="Tags">
          <li className="Tag">
            <button
              onClick={() => setFilter("portrait")}
              className="Tag_btn Pointer"
            >
              #Portrait
            </button>
          </li>
          <li className="Tag">
            <button
              onClick={() => setFilter("art")}
              className="Tag_btn Pointer"
            >
              #Art
            </button>
          </li>
          <li className="Tag">
            <button
              onClick={() => setFilter("fashion")}
              className="Tag_btn Pointer"
            >
              #Fashion
            </button>
          </li>
          <li className="Tag">
            <button
              onClick={() => setFilter("architecture")}
              className="Tag_btn Pointer"
            >
              #Architecture
            </button>
          </li>
          <li className="Tag">
            <button
              onClick={() => setFilter("travel")}
              className="Tag_btn Pointer"
            >
              #Travel
            </button>
          </li>
          <li className="Tag">
            <button
              onClick={() => setFilter("sports")}
              className="Tag_btn Pointer"
            >
              #Sports
            </button>
          </li>
          <li className="Tag">
            <button
              onClick={() => setFilter("animals")}
              className="Tag_btn Pointer"
            >
              #Animals
            </button>
          </li>
          <li className="Tag">
            <button
              onClick={() => setFilter("events")}
              className="Tag_btn Pointer"
            >
              #Events
            </button>
          </li>
        </ul>
      </nav>
      <h1 className="NosPhotographes">Nos photographes</h1>
    </header>
  );
};
