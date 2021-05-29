import { useState } from "react";
import "./ContactForm.css";

export const Lightbox = ({ showLightbox, setShowLightbox, photo }) => {
  return (
    <>
      {showLightbox ? (
        <div className="ContactForm_wrapper">
          <div
            className="ContactForm_background_modal"
            onClick={() => setShowLightbox(false)}
          ></div>

          <img
            src={`${process.env.PUBLIC_URL}/media/${photo.image}`}
            alt={photo.name}
            className="PhotographerDetails_photo"
            style={{
              position: "relative",
              zIndex: "9",
            }}
          />
        </div>
      ) : null}
    </>
  );
};
