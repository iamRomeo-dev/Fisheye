import { useKey } from "../../usekey";
import "./Lightbox.css";

export const Lightbox = ({
  selectedPhoto,
  setSelectedPhoto,
  getPreviousPhoto,
  getNextPhoto,
}) => {

  // Keyboard utilisation
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
      <span onClick={() => setSelectedPhoto(null)} className="Escape_btn"  ariaLabel= "Close">
        X
      </span>

      <span
        className="Previous_btn"
        ariaLabel= "Previous"
        onClick={() => setSelectedPhoto(getPreviousPhoto())}
      >
        &#60;
      </span>

      <span
        className="Next_btn"
        ariaLabel= "Next"
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
