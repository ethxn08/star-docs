import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact";
function Categories() {
  const [modalShow, setModalShow] = useState(false);
  const handlerModal = (e) => {
    setModalShow(true);
  };
  return (
    <>
      {modalShow ? (
        <Contact closeModal={setModalShow} />
      ) : (
        <div className="categories">
          <div className="categories-header">
            <h1>Categories</h1>
          </div>
          <div className="categories-content">
            <Link to="/films" className="category-link">
              <span>Films</span>
            </Link>
            <Link to="/starships" className="category-link">
              <span>Starships</span>
            </Link>
            <Link to="/vehicles" className="category-link">
              <span>Vehicles</span>
            </Link>
            <Link to="/contact-me" className="category-link">
              <span onClick={handlerModal}>Contact-me</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Categories;
