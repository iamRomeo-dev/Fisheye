import { useState } from "react";
import { HeartIcon, HeartIconEmpty } from "../Icons";
import { Media } from "./Media";
import "./PhotographerDetailsComponentPhotos.css";

export const PhotographerDetailsComponentPhoto = ({ media, onClick }) => {
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
      <button
        className="PhotographerDetails_photo_btn"
        aria-label="media link"
        onClick={onClick}
      >
        <Media media={media} onClick={onClick} />
      </button>
      <div className="PhotographerDetails_photo_figcaption">
        <p>{media.title}</p>

        {isLiked ? (
          <button
            onClick={onToggleLike}
            className="PhotographerDetails_photo_figcaption_likes"
          >
            {media.likes + 1} <HeartIcon />
          </button>
        ) : (
          <button
            onClick={onToggleLike}
            className="PhotographerDetails_photo_figcaption_likes"
          >
            {media.likes} <HeartIconEmpty />
          </button>
        )}
      </div>
    </div>
  );
};
