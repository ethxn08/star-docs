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
            <span>#</span>
            <span className="title-separator"></span>
            {data.name}
          </h1>
          <h3>Model: {data.model}</h3>
        </div>
        <div className="modal-body">
          <h4>Manufacturer: {data.manufacturer}</h4>
          <h4>Cost in Credits: {data.cost_in_credits}</h4>
          <h4>Class: {data.starship_class}</h4>
          <h4>Passengers: {data.passengers}</h4>
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
