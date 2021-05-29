import { useState } from "react";
import { useQuery } from "react-query";
import { fetchMediaByPhotogrpaherId } from "../API";
import { HeartIcon } from "./Icons";
import { Lightbox } from "./Lightbox";
import "./PhotographerDetailsComponentPhotos.css";

export const PhotographerDetailsComponentPhotos = ({ userId }) => {
  const [count, setCount] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const { data, status } = useQuery(
    `fetchMediaByPhotogrpaherId/${userId}`,
    async () => fetchMediaByPhotogrpaherId(parseInt(userId)) // <- async () => Car je ne veux pas exécuter la fonction fetchPhotographerById(parseInt(userId)), alors je la déclare. ParseInt permet de mettre userId en Integer
  );

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div className="PhotographerDetails_photos_wrapper">
          {data &&
            data.map((photo) => (
              <div key={photo.id}>
                {photo.image && (
                  <img
                    src={`${process.env.PUBLIC_URL}/media/${photo.image}`}
                    alt={photo.title}
                    className="PhotographerDetails_photo"
                    onClick={() => {
                      setShowLightbox(true);
                    }}
                  />
                )}
                {photo.video && (
                  <video
                    controls
                    src={`${process.env.PUBLIC_URL}/media/${photo.video}`}
                    type="video/mp4"
                    className="PhotographerDetails_photo"
                    onClick={() => {
                      setShowLightbox(true);
                    }}
                  />
                )}
                <div className="PhotographerDetails_photo_figcaption">
                  <p>{photo.title} </p>
                  <span
                    onClick={() => setCount(count + 1)}
                    className="PhotographerDetails_photo_figcaption_likes"
                  >
                    {photo.likes + count} <HeartIcon />
                  </span>
                </div>
                <Lightbox
                  showLightbox={showLightbox}
                  setShowLightbox={setShowLightbox}
                  photo={photo}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};
