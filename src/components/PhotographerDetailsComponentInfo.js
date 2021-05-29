import { ContactForm } from "./ContactForm";
import "./PhotographerDetailsComponentInfo.css";
import "./PhotographerDetails.css";

export const PhotographerDetailsComponentInfo = ({
  photographer,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <ContactForm showModal={showModal} setShowModal={setShowModal} />
      <div className="PhotographerDetails">
        <div className="PhotographerDetails_info">
          <div className="PhotographerDetails_info_contact">
            <h1 className="PhotographerDetails_info_contact_name">
              {photographer.name}
            </h1>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="PhotographerDetails_info_contact_button"
            >
              Contactez-moi
            </button>
          </div>
          <h4 className="PhotographerDetails_info_contact_city">
            {photographer.city}, {photographer.country}
          </h4>
          <h5 className="headerPhotographer_info_contact_tagline">
            {photographer.tagline}
          </h5>
          <ul className="Tags PhotographerDetails_info_contact_tags">
            {photographer.tags &&
              photographer.tags.map((tag, index) => (
                <li className="Tag" key={index}>
                  <button className="Tag_btn">#{tag}</button>
                </li>
              ))}
          </ul>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/photographers/${photographer.portrait}`}
          alt={photographer.name}
          className="PhotographerDetails_picture_img"
        />
      </div>
    </>
  );
};
