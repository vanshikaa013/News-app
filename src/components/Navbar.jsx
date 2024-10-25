import React, { useContext, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import fetchNews from "../providers/News/NewsAction";
import NewsContext from "../providers/News/NewsContext";

const Navbar = () => {
  const { dark } = useContext(ThemeContext);
  const [Topic, setTopic] = useState("");
  const { dispatch } = useContext(NewsContext);

  const handleNews = (e) => {
    e.preventDefault();
    getNews(Topic);
    setTopic("");
  };

  const getNews = async (Topic) => {
    const data = await fetchNews(Topic);
    dispatch({
      type: "Search",
      payload: data,
    });
  };

  return (
    <nav id="Navbar" className={`navbar navbar-expand-lg ${dark ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-lg`}>
      <div className="container-fluid px-3">
        <a className={`navbar-brand ${dark ? "text-light fw-bold" : "text-dark fw-bold"}`} href="#">
          Kal-Tak
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-1">
            <li className="nav-item">
              <a className={`nav-link ${dark ? "text-light" : "text-dark"} active`} aria-current="page" href="#" onClick={() => getNews("International")}>
                International
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${dark ? "text-light" : "text-dark"}`} href="#" onClick={() => getNews("Politics")}>
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${dark ? "text-light" : "text-dark"}`} href="#" onClick={() => getNews("Business")}>
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${dark ? "text-light" : "text-dark"}`} href="#" onClick={() => getNews("Sports")}>
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${dark ? "text-light" : "text-dark"}`} href="#" onClick={() => getNews("Bollywood")}>
                Bollywood
              </a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleNews}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              required
              onChange={(e) => setTopic(e.target.value)}
              value={Topic}
            />
            <button className={dark ? "btn btn-outline-light" : "btn btn-outline-success"} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
