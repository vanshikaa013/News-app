import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import WeatherContext from "../providers/weather/WeatherContext";
import { toast } from "react-toastify";
import { AOS } from "aos";
import "aos/dist/aos.css";

const WeatherCard = () => {
  const { dark } = useContext(ThemeContext);
  const { weather, dispatch } = useContext(WeatherContext);

  const getWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=adfed4fa1aec45749df72456240410&q=${city}&aqi=yes`
      );
      const data = await response.json();
      if (data.error) {
        toast.error("Please enter a valid city name");
      } else {
        dispatch({
          type: "Get_Weather",
          payload: data,
        });
      }
    } catch (error) {
      toast.error("something went wrong!!");
    }
  };

  const [city, setCity] = useState("");

  useEffect(() => {
    getWeather("Indore");
    
  }, []);

  const searchWeather = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity("");
  };
  return (
    <div
   
    id="Weather-card"
      className={
        dark
          ? "card p-3 rounded-10 bg-dark text-light shadow-lg"
          : "card p-3 rounded-0  shadow-lg"
      }
    >
      <form onSubmit={(e) => searchWeather(e)} className="my-3 d-flex">
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          placeholder="Enter City Name"
          className="form-control rounded-0 mx-2"
          required
        />
        <button className={dark ? "btn btn-outline-light text-light btn-sm rounded-0" : "btn btn-success btn-sm rounded-0"}>Search</button>
      </form>
      <h4>Today's Weather</h4>
      {!weather ? (
        <h1 className="text-center text-secondary">
          Loading..
        </h1>
      ) : (
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h1 className="display-3">{weather.current.temp_c}°C</h1>
            <h2
              className={
                dark
                  ? "display-6 text-secondary text-light"
                  : "display-6 text-secondary"
              }
            >
              {weather.location.name}
            </h2>
          </div>
          <div className="text-center">
            <img
              style={{ height: "100px", width: "90px" }}
              src={weather.current.condition.icon}
              alt="image"
            />
            <p>{weather.current.condition.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
