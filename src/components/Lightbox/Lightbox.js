import { useEffect, useRef } from "react";
import "./Lightbox.css";

// Handle the key navigation
const useKey = (key, cb) => {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      if (event.key === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [key]);
};

export const Lightbox = ({
  selectedPhoto,
  setSelectedPhoto,
  getPreviousPhoto,
  getNextPhoto,
}) => {
  // Set the callback of the useKey func
  function handlePreviousPhotoKeySelection() {
    setSelectedPhoto(getPreviousPhoto());
  }

  function handleNextPhotoKeySelection() {
    setSelectedPhoto(getNextPhoto());
  }

  function handleEscapePhotoKeySelection() {
    setSelectedPhoto(null);
  }

  //2 parameters : the key pressed, and the action
  useKey("ArrowLeft", handlePreviousPhotoKeySelection);
  useKey("ArrowRight", handleNextPhotoKeySelection);
  useKey("Escape", handleEscapePhotoKeySelection);

  return (
    <div className="ContactForm_wrapper">
      <span
        onClick={() => setSelectedPhoto(null)}
       className="Escape_btn"
      >
        X
      </span>

      <span
        className="Previous_btn"
        onClick={() => setSelectedPhoto(getPreviousPhoto())}
      >
        &#60;
      </span>

      <span
        className="Next_btn"
        onClick={() => setSelectedPhoto(getNextPhoto())}
      >
        &#62;
      </span>

      <div
        className="Lightbox_background_modal"
        onClick={() => setSelectedPhoto(null)}
      ></div>

      {selectedPhoto.image && (
        <div className="Lightbox_photo_container">
          <img
            src={`${process.env.PUBLIC_URL}/media/${selectedPhoto.image}`}
            alt={selectedPhoto.name}
            className="Lightbox_photo"
          />
          <span>{selectedPhoto.title}</span>
        </div>
      )}

      {selectedPhoto.video && (
        <div className="Lightbox_photo_container">
          <video
            controls
            src={`${process.env.PUBLIC_URL}/media/${selectedPhoto.video}`}
            alt={selectedPhoto.video}
            type="video/mp4"
            className="Lightbox_photo"
          />
          <span>{selectedPhoto.title}</span>
        </div>
      )}
    </div>
  );
};
