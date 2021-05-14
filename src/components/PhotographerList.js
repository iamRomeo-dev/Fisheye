import { Link } from "react-router-dom";
import img1 from "../MimiKeel.jpg";
import "./PhotographerList.css";
import { useQuery } from "react-query";
import { fetchPhotographers } from "../API";

export const PhotographerList = () => {
  const { data, status } = useQuery(
    "I Don't Know Why I need this parameter",
    fetchPhotographers
  );

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div className="PhotographerListWrapper">
          {data.photographers.map((photographer, index) => (
            <div className="PhotographerContainer" key={index}>
              <Link
                to={`/photographers/${photographer.id}`}
                className="PhotographerLink"
              >
                <>
                  <img
                    src={img1}
                    alt={photographer.name}
                    className="PhotographerLink_img"
                  />
                  <h2 className="PhotographerLink_name">{photographer.name}</h2>
                </>
              </Link>
                <h4 className="PhotographerCity">
                  {photographer.city}
                </h4>
                <h4 className="PhotographerTagline">
                  {photographer.tagline}
                </h4>
                <h4 className="PhotographerPrice">
                  {photographer.price}€/jour
                </h4>
              <ul className="Tags">
                {photographer.tags.map((tag, index) => (
                  <li className="Tag" key={index}>
                    <Link to={tag} className="TagLink">#{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
