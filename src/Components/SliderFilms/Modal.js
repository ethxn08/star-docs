import React, { useEffect } from "react";

function Modal({ closeModal, data }) {
  const handlerCloseModal = (e) => {
    closeModal(false);
    console.log(data);
  };

  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="close-button">
          <button onClick={handlerCloseModal}>X</button>
        </div>
        <div className="modal-title">
          <h1>
            <span>#{data.episode_id} </span>
            <span className="title-separator"></span>
            {data.title}
          </h1>
          <h3>Director: {data.director}</h3>
        </div>
        <div className="modal-body">
          <p>{data.opening_crawl}</p>
          <h4>Release Date: {data.release_date}</h4>
        </div>
        <div className="modal-footer">
          <button onClick={handlerCloseModal} className="btn-footer">
            Okay !
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
