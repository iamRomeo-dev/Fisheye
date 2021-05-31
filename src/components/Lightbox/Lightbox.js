import "./Lightbox.css";

export const Lightbox = ({ showLightbox, setShowLightbox, photo }) => {
  return (
    <>
      {showLightbox ? (
        <div className="ContactForm_wrapper" id={photo.id}>
          <span
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              color: "#901c1c",
              fontWeight: "bold",
            }}
          >
            X
          </span>

          <div
            className="ContactForm_background_modal"
            onClick={() => setShowLightbox(false)}
          ></div>

          {photo.image && (
            <img
              src={`${process.env.PUBLIC_URL}/media/${photo.image}`}
              alt={photo.name}
              className="Lightbox_photo"
            />
          )}

          {photo.video && (
            <video
              controls
              src={`${process.env.PUBLIC_URL}/media/${photo.video}`}
              alt={photo.video}
              type="video/mp4"
              className="Lightbox_photo"
            />
          )}
        </div>
      ) : null}
    </>
  );
};
