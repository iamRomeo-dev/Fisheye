import { useState } from "react";
import { HeartIcon, HeartIconEmpty } from "../Icons";
import "./PhotographerDetailsComponentPhotos.css";

export const PhotographerDetailsComponentPhoto = ({ photo, onClick }) => {
  const [isLiked, setisLiked] = useState(false);

  const onToggleLike = () => {
    setisLiked(!isLiked);
    if (isLiked === true) {
      return isLiked === 1;
    } else {
      return isLiked === 0;
    }
  };

  return (
    <div>
    <button className="PhotographerDetails_photo_btn" aria-label="media link" onClick={onClick}>
      {photo.image && (
        <img
          src={`${process.env.PUBLIC_URL}/media/${photo.image}`}
          alt={photo.title}
          className="PhotographerDetails_photo"
          onClick={onClick}
        />
      )}
      {photo.video && (
        <video
          src={`${process.env.PUBLIC_URL}/media/${photo.video}`}
          type="video/mp4"
          alt={photo.video}
          className="PhotographerDetails_photo"
          onClick={onClick}
        />
      )}
       </button>
      <div className="PhotographerDetails_photo_figcaption">
        <p>{photo.title}</p>

        {isLiked ? (
          <span
            onClick={onToggleLike}
            className="PhotographerDetails_photo_figcaption_likes"
          >
            {photo.likes + 1} <HeartIcon />
          </span>
        ) : (
          <span
            onClick={onToggleLike}
            className="PhotographerDetails_photo_figcaption_likes"
          >
            {photo.likes} <HeartIconEmpty />
          </span>
        )}
      </div>
   
    </div>
  );
};
