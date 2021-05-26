import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchPhotographers } from "../API";
import "./PhotographerDetails.css";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { PhotographerDetailsComponentInfo } from "./PhotographerDetailsComponentInfo";
import { ArrowIcon, HeartIcon } from "./Icons";
// import { dataJSON } from '../data';
import img1 from "../PhotographersID/MimiKeel.jpg";
import img2 from "../PhotographersID/MimiKeel.jpg";
import img3 from "../PhotographersID/MimiKeel.jpg";
import img4 from "../PhotographersID/MimiKeel.jpg";

export const PhotographerDetails = ({ setFilter }) => {
  const { userId } = useParams(); // <- Get back the id from the url, given in the path (:userId)
  const [photographer, setPhotographer] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { data, status } = useQuery(
    "I Don't Know Why I need this parameter",
    fetchPhotographers
  );

  // Get the photographer by Id using the URL Id
  useEffect(() => {
    const aaa = () => {
      for (let i = 0; i < data.photographers.length; i++) {
        const IdNumber = data.photographers[i].id; // <- typeof id === Number
        const IdString = IdNumber.toString(); // <- typeof id === String

        //Now i can compare the 2 values because they have the same typeof(String both of them)
        if (IdString === userId) {
          setPhotographer(data.photographers[i]);
        }
      }
    };
    aaa();
  }, [userId, setPhotographer, data.photographers]);

  // Filter the photographer photos using the URL Id
  useEffect(() => {
    let photosTab = data.media.filter(
      (media) => Number(userId) === media.photographerId
    );
    setPhotos(photosTab);
  }, [data.media, userId]);

  console.log("PHOTO BY PHOTOGRAPHER");
  console.log(photos);

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <header>
            <Link
              to="/photographers"
              className="PhotographerDetails_header_logo"
            >
              <img
                src={logo}
                alt="Fisheye Home page"
                onClick={() => setFilter("")}
              />
            </Link>
          </header>
          <PhotographerDetailsComponentInfo photographer={photographer} />
          <div>
            <label htmlFor="dropdown" className="PhotographerDetails_dropdown_label">Trier par </label>
            <select
              name="dropdown"
              id="dropdown"
              className="PhotographerDetails_dropdown"
            >
              <option value="popularité">Popularité</option>
              <option value="date">Date</option>
              <option value="titre">Titre</option>
              {/* <ArrowIcon /> */}
            </select>
          </div>

          <div className="PhotographerDetails_photos_wrapper">
            {photos &&
              photos.map((photo) => (
                <div>
                  <img
                    src={img4}
                    alt={photos}
                    key={photo.id}
                    className="PhotographerDetails_photo"
                  />
                  <div className="PhotographerDetails_photo_figcaption">
                    <p>{photo.title} </p>
                    <span className="PhotographerDetails_photo_figcaption_likes">
                      {photo.likes} <HeartIcon />
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};
