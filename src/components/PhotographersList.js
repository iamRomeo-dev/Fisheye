import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../MimiKeel.jpg";
import "./PhotographersList.css";

export const PhotographersList = () => {
  const url =
    "https://iamromeo-dev.github.io/aaaaaaaaaaaaaaaaaaaaaaaaaaa/data.json";

  const [photographers, setPhotographers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setPhotographers(result.photographers);
      });
  }, [photographers, setPhotographers, isLoading]);

  return (
    <>
      {photographers ? (
        <div>
          {photographers.map((photographer, index) => (
            <div className="PhotographerContainer" key={index}>
              <Link
                to={`/photographers/${photographer.id}`}
                className="PhotographerID"
              >
                <>
                  <img src={img1} alt="Mimi Keel" />
                  <h2 className="photographerName">{photographer.name}</h2>
                </>
              </Link>
              <div className="PhotographerDescription">
                <h4 className="city">{photographer.city}</h4>
                <h5 className="slogan">{photographer.tagline}</h5>
                <h6 className="price">{photographer.price}</h6>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {isLoading ? <span>Loading...</span> : null}
    </>
  );
};
