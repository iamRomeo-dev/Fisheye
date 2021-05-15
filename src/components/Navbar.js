import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ setFilter }) => {
  // useEffect(() => {
  //     getUsers(search).then((users) => setUsers(users));
  //   }, [search]);

  return (
    <header>
      <Link to="" className="logo">
        <img src="public/img/logo.svg" alt="Fisheye Home page" />
      </Link>
      <nav aria-label="Main navigation">
        <ul className="Tags">
          <li className="Tag">
            <Link to="#" className="TagLink">
              #Portrait
            </Link>
          </li>
          <li className="Tag">
            <Link to="#" className="TagLink">
              #Art
            </Link>
          </li>
          <li className="Tag">
            <Link to="#" className="TagLink">
              #Fashion
            </Link>
          </li>
          <li className="Tag">
            <Link to="#" className="TagLink">
              #Architecture
            </Link>
          </li>
          <li className="Tag">
            <Link to="#" className="TagLink">
              #Travel
            </Link>
          </li>
          <li className="Tag">
            <button onClick={() => setFilter("sports")} className="">
              sports
            </button>
          </li>
          <li className="Tag">
            <Link to="#" className="TagLink">
              #Animals
            </Link>
          </li>
          <li className="Tag">
            <button onClick={() => setFilter("events")} className="">
              events
            </button>
          </li>
        </ul>
      </nav>
      <h1 className="NosPhotographes">Nos photographes</h1>
    </header>
  );
};
