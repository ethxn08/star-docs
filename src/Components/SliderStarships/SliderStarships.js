import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function SliderStarships() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://swapi.dev/api/starships").then((response) => {
      const res = response.data;
      setNextPage(res.next);
      setPrevPage(res.previous);
      setStarships(res);
    });
  }, []);

  useEffect(() => {
    if (starships.length == 0) {
      setLoading(true);
      console.log(starships);
    } else {
      setLoading(false);
      console.log(starships);
    }
  }, [starships]);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  const handlerModal = (e) => {
    setModalShow(true);
    axios
      .get(`https://swapi.dev/api/starships/?search=${e.target.name}`)
      .then((response) => {
        const res = response.data;
        setData(res.results[0]);
        console.log(res.results[0]);
      });
  };
  const handlerNextPage = () => {
    console.log("Next");
    if (nextPage != null) {
      axios.get(nextPage).then((response) => {
        const res = response.data;
        setNextPage(res.next);
        setPrevPage(res.previous);
        setStarships(res);
      });
    }
  };
  const handlerPrevPage = () => {
    console.log("Prev");
    if (prevPage != null) {
      axios.get(prevPage).then((response) => {
        const res = response.data;
        setNextPage(res.next);
        setPrevPage(res.previous);
        setStarships(res);
      });
    }
  };
  return (
    <div className="container-slider">
      {loading == true ? (
        <div>Loading,...</div>
      ) : (
        <>
          {modalShow ? (
            <Modal closeModal={setModalShow} data={data} />
          ) : (
            <Slider {...settings}>
              {starships.results.map((starship) => {
                return (
                  <div className="films">
                    <div className="films-header">
                      <h3 className="ant">
                        <Link to="/categories" className="card-link">
                          🔙
                        </Link>
                      </h3>
                      <h1 className="title">Starships</h1>
                    </div>
                    <div className="films-content">
                      <span>{starship.name}</span>

                      <span>{starship.model}</span>

                      <span>{starship.manufacturer}</span>
                      <button
                        className="more-info"
                        name={starship.name}
                        onClick={handlerModal}
                      >
                        More Info
                      </button>
                    </div>
                    <div className="films-footer">
                      <p onClick={handlerPrevPage}>👈 Prev Page</p>
                      <p onClick={handlerNextPage}>Next Page 👉</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          )}
        </>
      )}
    </div>
  );
}

export default SliderStarships;
