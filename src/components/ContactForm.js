import "./ContactForm.css";

export const ContactForm = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="ContactForm_background_modal">
          <form showModal={showModal}>
            <label>
              Name:
              <input
                type="text"
                // value={name}
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
                required
              />
            </label>

            <label>
              Username:
              <input
                type="text"
                // value={username}
                // onChange={(e) => {
                //   setUsername(e.target.value);
                // }}
                required
              />
            </label>

            <label>
              Phone:
              <input
                type="tel"
                // value={phone}
                // onChange={(e) => {
                //   setPhone(e.target.value);
                // }}
              />
            </label>

            <button type="submit">Save</button>
            <button
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              Close
            </button>
          </form>
          
          
        </div>
      ) : null}
    </>
  );
};
