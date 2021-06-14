import { useState } from "react";
import { useKey } from "../../usekey";
import "./ContactForm.css";

export const ContactForm = ({ showModalForm, setShowModalForm, photographer }) => {
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

  // Keyboard utilisation of contact form
  function handleEscapeContactForm() {
    setShowModalForm(false);
  }

  useKey("Escape", handleEscapeContactForm);

  return (
    <>
      {showModalForm ? (
        <div className="ContactForm_wrapper">
          <div
            className="ContactForm_background_modal"
            onClick={() => setShowModalForm(false)}
          ></div>

          <form onSubmit={handleSubmitForm} className="ContactForm_form">
            <div className="ContactForm_header">
              <h2 className="H2_title">Contactez-moi</h2>
              <span
                className="ContactForm_header_XClose"
                aria-label="Close modal"
                onClick={() => setShowModalForm(false)}
              >
                &#215;
              </span>
            </div>
            <h2 className="H2_name">{photographer.name}</h2>

            <div className="ContactForm_body">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                id="firstname"
                aria-labelledby="firstname"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
                autoFocus
              />

              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                aria-labelledby="lastname"
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
                aria-labelledby="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                aria-labelledby="message"
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
