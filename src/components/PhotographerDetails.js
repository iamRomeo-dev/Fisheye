import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchPhotographers } from "../API";
import "./PhotographerDetails.css";
import img1 from "../PhotographersID/MimiKeel.jpg";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

export const PhotographerDetails = ({ setFilter }) => {
  const { userId } = useParams(); // <- Get back the id from the url, given in the path (:userId)
  const [photographer, setPhotographer] = useState([]);

  const { data, status } = useQuery(
    "I Don't Know Why I need this parameter",
    fetchPhotographers
  );

  useEffect(() => {
    const aaa = () => {
      for (let i = 0; i < data.photographers.length; i++) {
        const IdNumber = data.photographers[i].id; // <- typeof id === Number
        const IdString = IdNumber.toString(); // <- typeof id === String

        if (IdString === userId) {
          // <- now i can compare the 2 values because they have the same typeof(String both of them)
          setPhotographer(data.photographers[i]);
        }
      }
    };
    aaa();
  }, [userId, setPhotographer, data.photographers]);

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
        <header>
        <Link to="/photographers" className="PhotographerDetails_header_logo">
        <img
          src={logo}
          alt="Fisheye Home page"
          onClick={() => setFilter("")}
        />
      </Link>
        </header>
          <div class="PhotographerDetails">
            <div class="PhotographerDetails_info">
              <div class="PhotographerDetails_info_contact">
                <h1 class="PhotographerDetails_info_contact_name">
                  {photographer.name}
                </h1>
                <button class="PhotographerDetails_info_contact_button">
                  Contactez-moi
                </button>
              </div>
              <h4 class="PhotographerDetails_info_contact_city">
                {photographer.city}, {photographer.country} 
              </h4>
              <h5 class="headerPhotographer_info_contact_tagline">
                {photographer.tagline}
              </h5>
              <ul className="Tags PhotographerDetails_info_contact_tags">
                {photographer.tags && photographer.tags.map((tag, index) => (
                  <li className="Tag" key={index}>
                    <button className="Tag_btn">#{tag}</button>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#" class="PhotographerDetails_picture_img">
              <img
                src={img1}
                alt={photographer.name}
              />
            </a>
          </div>
        </>
      )}
    </>
  );
};
