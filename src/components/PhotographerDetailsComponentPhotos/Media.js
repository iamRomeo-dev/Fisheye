export const Media = ({ photo, onClick }) => {
  return (
    <>
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
    </>
  );
};
