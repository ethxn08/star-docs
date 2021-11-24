import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
function SliderFilms() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://swapi.dev/api/films").then((response) => {
      const res = response.data;
      setFilms(res);
    });
  }, []);

  useEffect(() => {
    if (films.length == 0) {
      setLoading(true);
      console.log(films);
    } else {
      setLoading(false);
      console.log(films);
    }
  }, [films]);

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
      .get(`https://swapi.dev/api/films/?search=${e.target.name}`)
      .then((response) => {
        const res = response.data;
        setData(res.results[0]);
        console.log(res.results[0]);
      });
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
              {films.results.map((film) => {
                return (
                  <div className="films">
                    <div className="films-header">
                      <h3 className="ant">
                        <Link to="/categories" className="card-link">
                          🔙
                        </Link>
                      </h3>
                      <h1 className="title">Films</h1>
                    </div>
                    <div className="films-content">
                      <span>{film.title}</span>

                      <span>{film.director}</span>

                      <span>{film.producer}</span>

                      <span>{film.release_date}</span>
                      <button
                        className="more-info"
                        name={film.title}
                        onClick={handlerModal}
                      >
                        More Info
                      </button>
                    </div>
                    <div className="films-footer">
                      <p>👈 Prev Page</p>
                      <p>Next Page 👉</p>
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

export default SliderFilms;
