import { useState } from "react";
import { HeartIcon, HeartIconEmpty } from "../Icons";
import { Lightbox } from "../Lightbox/Lightbox";

export const PhotographerDetailsComponentPhoto = ({ photo }) => {
  // const [count, setCount] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

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
        {/* <span
          onClick={() => setCount(count + 1)}
          className="PhotographerDetails_photo_figcaption_likes"
        >
          {photo.likes + count} <HeartIcon />
        </span> */}

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
      <Lightbox
        showLightbox={showLightbox}
        setShowLightbox={setShowLightbox}
        photo={photo}
      />
    </div>
  );
};
