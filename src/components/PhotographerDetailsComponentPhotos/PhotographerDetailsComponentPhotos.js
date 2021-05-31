import { useState } from "react";
import { useQuery } from "react-query";
import { fetchMediaByPhotogrpaherId } from "../../API";
import { HeartIcon } from "../Icons";
import { Lightbox } from "../Lightbox/Lightbox";
import "./PhotographerDetailsComponentPhotos.css";

export const PhotographerDetailsComponentPhotos = ({ userId, sortBy }) => {
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
          {sortBy === "likes" &&
            data
              .sort((a, b) => (a.likes > b.likes ? 1 : -1))
              .map((photo) => (
                <div key={photo.id}>
                  {photo.image && (
                    <img
                      src={`${process.env.PUBLIC_URL}/media/${photo.image}`}
                      alt={photo.image}
                      className="PhotographerDetails_photo"
                      onClick={() => {
                        setShowLightbox(true);
                      }}
                    />
                  )}
                  {photo.video && (
                    <video
                      src={`${process.env.PUBLIC_URL}/media/${photo.video}`}
                      type="video/mp4"
                      alt={photo.video}
                      className="PhotographerDetails_photo"
                      onClick={() => {
                        setShowLightbox(true);
                      }}
                    />
                  )}
                  <div className="PhotographerDetails_photo_figcaption">
                    <p>{photo.title}</p>
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

          {sortBy === "title" &&
            data
              .sort((a, b) => (a.title > b.title ? 1 : -1))
              .map((photo) => (
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
                      src={`${process.env.PUBLIC_URL}/media/${photo.video}`}
                      type="video/mp4"
                      alt={photo.video}
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

          {sortBy === "date" &&
            data
              .sort((a, b) => (a.date > b.date ? 1 : -1))
              .map((photo) => (
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
                      src={`${process.env.PUBLIC_URL}/media/${photo.video}`}
                      type="video/mp4"
                      alt={photo.video}
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
