import React, { useContext, useEffect } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsCard = ({ news }) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  

  const { dark } = useContext(ThemeContext);
  return (
    <div data-aos="fade-up"
      className={
        dark
          ? "card p-3 rounded-10 mb-3 bg-dark text-light shadow-md"
          : "card p-3 rounded-0 mb-3 shadow-lg"
      }

    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ height: "200px" }}
            src={news.urlToImage}
            className="container-fluid"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{news.title}</h4>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <small
                className={
                  dark ? " display-8 text-light" : " display-8 text-muted"
                }
              >
                Date : {new Date (news.publishedAt).toDateString('en-IN')}
              </small>
            </p>
            <p className="card-text">
              <small className={dark ? " text-light" : " text-muted"}>
                Source : {news.author}
              </small>
            </p>

            <a
              href={news.url}
              target="_blank"
              className={
                dark
                  ? "btn btn-sm float-end my-2 btn-outline-light  q"
                  : "btn btn-sm btn-outline-dark float-end my-2 "
              }
            >
              Read Full News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
