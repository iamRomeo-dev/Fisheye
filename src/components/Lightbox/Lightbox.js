import "./Lightbox.css";

export const Lightbox = ({
  selectedPhoto,
  setSelectedPhoto,
  getPreviousPhoto,
  getNextPhoto,
}) => {
  return (
    <div className="ContactForm_wrapper">
      <span
        onClick={() => setSelectedPhoto(null)}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          color: "#901c1c",
          fontWeight: "bold",
          zIndex: "11",
          cursor: "pointer",
        }}
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
        className="ContactForm_background_modal"
        onClick={() => setSelectedPhoto(null)}
      ></div>

      {selectedPhoto.image && (
        <img
          src={`${process.env.PUBLIC_URL}/media/${selectedPhoto.image}`}
          alt={selectedPhoto.name}
          className="Lightbox_photo"
        />
      )}

      {selectedPhoto.video && (
        <video
          controls
          src={`${process.env.PUBLIC_URL}/media/${selectedPhoto.video}`}
          alt={selectedPhoto.video}
          type="video/mp4"
          className="Lightbox_photo"
        />
      )}
    </div>
  );
};
