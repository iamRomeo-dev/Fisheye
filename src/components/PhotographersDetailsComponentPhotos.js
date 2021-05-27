import { useQuery } from "react-query";
import { fetchMediaByPhotogrpaherId } from "../API";
import { HeartIcon } from "./Icons";
import "./PhotographerDetails.css";

export const PhotographersDetailsComponentPhotos = ({ userId, img4 }) => {
  const { data, status } = useQuery(
    `fetchMediaByPhotogrpaherId/${userId}`,
    async () => fetchMediaByPhotogrpaherId(parseInt(userId)) // <- async () => Car je ne veux pas exécuter la fonction fetchPhotographerById(parseInt(userId)), alors je la déclare. ParseInt permet de mettre userId en Integer
  );
// console.log(data[1].title)
  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
       <div
       className="PhotographerDetails_photos_wrapper"
       // style={{ opacity: showModal ? "0.5" : "1" }}
     >
          {data &&
            data.map((photo) => (
              <div key={photo.id}>
                 <img
            src={`${process.env.PUBLIC_URL}/photographers/${data.image}`}
            alt={data.title}
            className="PhotographerLink_img"
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
      )}
    </>
  );
};
