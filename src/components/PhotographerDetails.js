import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchPhotographerById } from "../API";
import "./PhotographerDetails.css";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { PhotographerDetailsComponentInfo } from "./PhotographerDetailsComponentInfo";
import { PhotographerDetailsComponentPhotos } from "./PhotographerDetailsComponentPhotos";

export const PhotographerDetails = ({ setFilter }) => {
  const { userId } = useParams(); // <- Get back the id from the url, given in the path (:userId)
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState("likes");
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
        {/* Try to put an overlay onClick behind the contact form. 
        Le css est en cours dans PhotographerDetails .overlay
        (Position:relative; z-index:10 sur le contact form pour etre davant l'overlay)
        (Position:relative; z-index:4 sur l'overlay pour etre derriere le contact form maius devant le reste) */}

         {/* <div className="overlay"></div> */}
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
          <div>
            <PhotographerDetailsComponentInfo
              photographer={photographer}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            {/* <div style={{ opacity: showModal ? "0.5" : "1" }}> */}
            <div>
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

            <PhotographerDetailsComponentPhotos userId={userId} />
          </div>
        </>
      )}
    </>
  );
};
