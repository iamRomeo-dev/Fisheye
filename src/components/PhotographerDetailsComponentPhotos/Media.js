export const Media = ({ media, onClick }) => {
  return (
    <>
      {media.image && (
        <img
          src={`${process.env.PUBLIC_URL}/media/${media.image}`}
          alt={media.title}
          className="PhotographerDetails_photo"
          onClick={onClick}
        />
      )}
      {media.video && (
        <video
          src={`${process.env.PUBLIC_URL}/media/${media.video}`}
          type="video/mp4"
          alt={media.video}
          className="PhotographerDetails_photo"
          onClick={onClick}
        />
      )}
    </>
  );
};
