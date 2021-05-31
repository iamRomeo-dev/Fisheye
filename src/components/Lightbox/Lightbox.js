import { CloseCrossIcon } from "../Icons";
import "./Lightbox.css";

export const Lightbox = ({ showLightbox, setShowLightbox, photo }) => {
  return (
    <>
      {showLightbox ? (
        <div className="ContactForm_wrapper">
          <CloseCrossIcon />

          <div
            className="ContactForm_background_modal"
            onClick={() => setShowLightbox(false)}
          ></div>

          <img
            src={`${process.env.PUBLIC_URL}/media/${photo.image}`}
            alt={photo.name}
            className="Lightbox_photo"
          />
        </div>
      ) : null}
    </>
  );
};
