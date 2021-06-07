import { useState } from "react";
import "./ContactForm.css";

export const ContactForm = ({ showModal, setShowModal }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(message);
  };
  
  return (
    <>
      {showModal ? (
        <div className="ContactForm_wrapper">
          <div
            className="ContactForm_background_modal"
            onClick={() => setShowModal(false)}
          ></div>

          <form onSubmit={handleSubmitForm} className="ContactForm_form">
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
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
              />

              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                aria-label="lastname"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                aria-label="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                aria-label="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
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
