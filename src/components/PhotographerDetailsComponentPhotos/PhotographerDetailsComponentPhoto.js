import { useState } from "react";
import { HeartIcon, HeartIconEmpty } from "../Icons";

export const PhotographerDetailsComponentPhoto = ({ data, photo, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleCount = () => {
    setIsOpen(!isOpen);
    if (isOpen === true) {
      return isOpen === 1;
    } else {
      return isOpen === 0;
    }
  };

  return (
    <div>
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
      <div className="PhotographerDetails_photo_figcaption">
        <p>{photo.title} </p>

        {isOpen ? (
          <span
            onClick={onToggleCount}
            className="PhotographerDetails_photo_figcaption_likes"
          >
            {photo.likes + 1} <HeartIcon />
          </span>
        ) : (
          <span
            onClick={onToggleCount}
            className="PhotographerDetails_photo_figcaption_likes"
          >
            {photo.likes} <HeartIconEmpty />
          </span>
        )}
      </div>
    </div>
  );
};
