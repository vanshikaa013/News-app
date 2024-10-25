import React, { useContext } from "react";
import NewsContext from "../providers/News/NewsContext";
import ThemeContext from "../providers/theme/ThemeContext";

const Slider = () => {
  const { allNews } = useContext(NewsContext);
  const {dark} = useContext(ThemeContext)

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner d-flex pt-5">
        {allNews.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.title}>
            <img
              src={item.urlToImage}
              className="d-block w-100"
              alt={item.title}
              style={{ height: '300px', objectFit: 'contain' }}
            />
            <p className={dark ? "my-3 fs-6 text-center text-light" : "my-3 fs-6 text-center text-light" }>{item.title}</p>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
