import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchPhotographerById } from "../../API";
import "./PhotographerDetails.css";
import { Link } from "react-router-dom";
import { PhotographerDetailsComponentInfo } from "../PhotographerDetailsComponentInfo/PhotographerDetailsComponentInfo";
import { PhotographerDetailsComponentPhotos } from "../PhotographerDetailsComponentPhotos/PhotographerDetailsComponentPhotos";

export const PhotographerDetails = ({ setFilter }) => {
  const { userId } = useParams(); // <- Get back the id from the url, given in the path (:userId)
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState("title");
  const { data: photographer, status } = useQuery(
    `fetchPhotographerById/${userId}`,
    async () => fetchPhotographerById(parseInt(userId)) // <- async () => Car je ne veux pas exécuter la fonction fetchPhotographerById(parseInt(userId)), alors je la déclare. ParseInt permet de mettre userId en Integer
  );

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
                src={`${process.env.PUBLIC_URL}/logo.svg`}
                alt="Fisheye Home page"
                onClick={() => setFilter("")}
              />
            </Link>
          </header>
          <div>
            <PhotographerDetailsComponentInfo
              photographer={photographer}
              showModal={showModal}
              setShowModal={setShowModal}
            />

            <div className="PhotographerDetails_dropdownSort">
              <label
                htmlFor="dropdown"
                className="PhotographerDetails_dropdown_label"
              >
                Trier par{" "}
              </label>
              <select
                name="dropdown"
                id="dropdown"
                className="PhotographerDetails_dropdown"
              >
                <option value="popularité" onClick={() => setSortBy("likes")}>
                  Popularité
                </option>
                <option value="date" onClick={() => setSortBy("date")}>
                  Date
                </option>
                <option value="titre" onClick={() => setSortBy("title")}>
                  Titre
                </option>
              </select>
            </div>

            <PhotographerDetailsComponentPhotos
              userId={userId}
              sortBy={sortBy}
              photographer={photographer}
            />
          </div>
        </>
      )}
    </>
  );
};
