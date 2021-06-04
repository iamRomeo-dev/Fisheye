import { useState } from "react";
import { useQuery } from "react-query";
import { fetchMediaByPhotogrpaherId } from "../../API";
import { PhotographerDetailsComponentPhoto } from "./PhotographerDetailsComponentPhoto";
import "./PhotographerDetailsComponentPhotos.css";
import { Lightbox } from "../Lightbox/Lightbox";

export const PhotographerDetailsComponentPhotos = ({ userId, sortBy }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { data, status } = useQuery(
    `fetchMediaByPhotogrpaherId/${userId}`,
    async () => fetchMediaByPhotogrpaherId(parseInt(userId)) // <- async () => Car je ne veux pas exécuter la fonction fetchPhotographerById(parseInt(userId)), alors je la déclare. ParseInt permet de mettre userId en Integer
  );

  //Ligthbox Next and Previous
  const getSelectedPhotoIndex = () => {
    return data.findIndex((photo) => photo.id === selectedPhoto.id);
  };

  const getPreviousPhoto = () => {
    const selectedPhotoIndex = getSelectedPhotoIndex();
    return data[(selectedPhotoIndex - 1 + data.length) % data.length];
  };

  const getNextPhoto = () => {
    const selectedPhotoIndex = getSelectedPhotoIndex();
    return data[(selectedPhotoIndex + 1) % data.length];
  };

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div className="PhotographerDetails_photos_wrapper">
          {sortBy === "likes" &&
            data
              .sort((a, b) => (a.likes > b.likes ? 1 : -1))
              .map((photo, index) => (
                <PhotographerDetailsComponentPhoto
                  data={data}
                  photo={photo}
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                />
              ))}

          {sortBy === "title" &&
            data
              .sort((a, b) => (a.title > b.title ? 1 : -1))
              .map((photo, index) => (
                <PhotographerDetailsComponentPhoto
                  data={data}
                  photo={photo}
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                />
              ))}

          {sortBy === "date" &&
            data
              .sort((a, b) => (a.date > b.date ? 1 : -1))
              .map((photo, index) => (
                <PhotographerDetailsComponentPhoto
                  data={data}
                  photo={photo}
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                />
              ))}
        </div>
      )}

      {selectedPhoto && (
        <>
          <Lightbox
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
            getPreviousPhoto={getPreviousPhoto}
            getNextPhoto={getNextPhoto}
          />
        </>
      )}
    </>
  );
};
