import React from "react";
import { Link } from "react-router-dom";
function Categories() {
  return (
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
          <span>Contact-me</span>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
