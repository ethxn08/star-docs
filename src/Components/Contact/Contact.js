import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";

function Modal({ closeModal }) {
  const handlerCloseModal = (e) => {
    closeModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="close-button">
          <button onClick={handlerCloseModal}>X</button>
        </div>
        <div className="modal-title">
          <h1>Contact-me</h1>
        </div>
        <div className="modal-body">
          <Formik
            initialValues={{ name: "", email: "", comment: "" }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <p>Type your Name</p>
              <Field name="name" type="text" placeholder="Name,..." required />
              <br />
              <p>Type your email</p>
              <Field
                name="email"
                type="email"
                placeholder="Email,..."
                required
              />
              <br />
              <p>Type your Comment</p>
              <Field name="comment" type="text" placeholder="Comment,..." />
              <br />
              <button type="submit" className="btn-footer">
                Send !
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default Modal;
