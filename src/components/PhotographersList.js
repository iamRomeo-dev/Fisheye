import { Link } from "react-router-dom";
import img1 from "../MimiKeel.jpg";
import "./PhotographersList.css";
import { useQuery } from "react-query";
import { fetchPhotographers } from "../API";

export const PhotographersList = () => {
  const { data, status } = useQuery(
    "I Don't Know Why I need this parameter",
    fetchPhotographers
  );

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.photographers.map((photographer, index) => (
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
      )}
    </>
  );
};
