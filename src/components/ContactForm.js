import "./ContactForm.css";

export const ContactForm = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="ContactForm_wrapper">
          <div
            className="ContactForm_background_modal"
            onClick={() => setShowModal(false)}
          ></div>

          <form className="ContactForm_form">
            <div className="ContactForm_header">
              <h2>CONTACTEZ MOI</h2>
              <span
                className="ContactForm_header_XClose"
                aria-label="Close modal"
                onClick={() => setShowModal(false)}
              >
                X
              </span>
            </div>
            <div className="ContactForm_body">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                id="firstname"
                aria-label="firstname"
                // value={name}
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
                required
              />

              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                aria-label="lastname"
                // value={username}
                // onChange={(e) => {
                //   setUsername(e.target.value);
                // }}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                aria-label="email"
                // value={phone}
                // onChange={(e) => {
                //   setPhone(e.target.value);
                // }}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                aria-label="message"
                // value={phone}
                // onChange={(e) => {
                //   setPhone(e.target.value);
                // }}
              />

              <button type="submit" className="ContactForm_Submit_btn">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};
