import { useQuery } from "react-query";
import { fetchMediaByPhotogrpaherId } from "../../API";
import { PhotographerDetailsComponentPhoto } from "./PhotographerDetailsComponentPhoto";
import "./PhotographerDetailsComponentPhotos.css";

export const PhotographerDetailsComponentPhotos = ({ userId, sortBy }) => {
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
                <PhotographerDetailsComponentPhoto photo={photo} />
              ))}

          {sortBy === "title" &&
            data
              .sort((a, b) => (a.title > b.title ? 1 : -1))
              .map((photo) => (
                <PhotographerDetailsComponentPhoto photo={photo} />
              ))}

          {sortBy === "date" &&
            data
              .sort((a, b) => (a.date > b.date ? 1 : -1))
              .map((photo) => (
                <PhotographerDetailsComponentPhoto photo={photo} />
              ))}
        </div>
      )}
    </>
  );
};
