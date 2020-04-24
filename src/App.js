import React, { useState, useEffect, useRef } from "react";
import Spinner from "./components/Spinner.js";
import MainNavBar from "./components/MainNavBar.js";
import Moment from "react-moment";
import "bootstrap/dist/css/bootstrap.min.css";
import Geosuggest from "react-geosuggest";
import IosLocateOutline from "react-ionicons/lib/IosLocateOutline";

import "./App.css";

function App() {
  const [Weather, setWeather] = useState(null);
  const [WeatherFiveDay, setFiveDayWeather] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(false);
  const [Error, setError] = useState(false);
  const [name, setName] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchWeather(name);
    setIsSearching(true);
  };

  let gs = useRef(null);

  const weatherIcons = [];

  const getLocation = () => {
    setIsSearching(false);
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getDataApi(latitude, longitude);
      getFiveDayApi(latitude, longitude);
    });
  };

  const searchWeather = async (city) => {
    setIsSearching(true);
    const API_KEY = process.env.REACT_APP_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== "404") {
        setWeather(data);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  const getDataApi = async (lat, long) => {
    const API_KEY = process.env.REACT_APP_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      // console.log(data);
      setLoading(false);
      document.getElementById("focus").click();
    } catch (error) {
      setError(true);
    }
  };

  const getFiveDayApi = async (lat, long) => {
    const API_KEY = process.env.REACT_APP_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&src/img/sunset.svg&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      fiveDayWeatherFormater(data);
      // console.log(data);
    } catch (error) {
      setError(true);
    }
  };

  const fiveDayWeatherFormater = (data) => {
    const fiveDayW = data.list.filter((_, i) => i % 8 == 0);
    setFiveDayWeather(fiveDayW);
  };

  useEffect(getLocation, []);

  const w = Weather && Weather.weather[0].main;

  const appStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
  };

  const renderWeatherIcon =
    WeatherFiveDay &&
    WeatherFiveDay.map((e) => {
      weatherIcons.push(e.weather[0].icon);
    });

  const onSuggestSelect = (e) => {
    if (e) {
      getDataApi(e.location.lat, e.location.lng);
      getFiveDayApi(e.location.lat, e.location.lng);
      console.log(e.location.lat, e.location.lng);
    }
  };
  return (
    <div style={appStyle} className="container-fluid text-white ">
      <MainNavBar />
      <div>{renderWeatherIcon}</div>
      {!Loading ? (
        <div
          className="page-content page-container container-fluid"
          id="page-content"
        >
          <div className="padding">
            <div className="col-12 col-lg-8 mx-auto mb-2">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  className="d-flex container-fluid"
                  placeholder="Search"
                  className="geosuggest__input"
                  onChange={(e) => setName(e.target.value)}
                />
              </form>
              <button
                onClick={() => getLocation()}
                style={{
                  backgroundColor: "transparent",
                  color: "#dddddd",
                  position: "absolute",
                  zIndex: 1,
                  right: 20,
                  top: 12,
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  outline: "none",
                }}
              >
                <IosLocateOutline className="" />
              </button>
            </div>
            <div className="row container-fluid d-flex justify-content-center mx-auto">
              <div className="col-lg-8 grid-margin stretch-card">
                <div className="card card-weather">
                  <div className="card-body">
                    <div className="weather-date-location">
                      <h2>{Weather && Weather.name}</h2>
                      <h6 className="text-gray">
                        <Moment unix format="MMM D, YYYY">
                          {Weather && Weather.dt}
                        </Moment>
                      </h6>
                    </div>
                    <div className="weather-data d-flex">
                      <div className="mr-auto">
                        <h2 className="display-3">
                          {!isSearching &&
                            Weather &&
                            Math.round(Weather.main.temp)}
                          {isSearching &&
                            Math.round(
                              (Weather.main.temp - 273.15) * (9 / 5) + 32
                            )}
                          &deg;
                          <small>F</small>
                        </h2>
                        {Weather &&
                          Weather.weather[0].description
                            .charAt(0)
                            .toUpperCase() +
                            Weather.weather[0].description.slice(1)}
                        <br />

                        <h6>
                          Wind Speed: {Weather && Weather.wind.speed} Km/h
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 ">
                    <div className="d-flex weakly-weather">
                      <div className="weakly-weather-item mx-auto">
                        <p className="mb-1">
                          {" "}
                          <Moment format="ddd">
                            {WeatherFiveDay && WeatherFiveDay[0].dt_txt}
                          </Moment>
                        </p>{" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weatherIcons[0]}@2x.png`}
                        ></img>{" "}
                        <p className="mb-0">
                          {" "}
                          {WeatherFiveDay &&
                            Math.floor(WeatherFiveDay[0].main.temp)}
                          °
                        </p>
                      </div>
                      <div className="weakly-weather-item">
                        <p className="mb-1">
                          {" "}
                          <Moment format="ddd">
                            {WeatherFiveDay && WeatherFiveDay[1].dt_txt}
                          </Moment>
                        </p>{" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weatherIcons[1]}@2x.png`}
                        ></img>
                        <p className="mb-0">
                          {" "}
                          {WeatherFiveDay &&
                            Math.floor(WeatherFiveDay[1].main.temp)}
                          °
                        </p>
                      </div>
                      <div className="weakly-weather-item">
                        <p className="mb-1">
                          <Moment format="ddd">
                            {WeatherFiveDay && WeatherFiveDay[2].dt_txt}
                          </Moment>
                        </p>{" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weatherIcons[2]}@2x.png`}
                        ></img>{" "}
                        <p className="mb-0">
                          {" "}
                          {WeatherFiveDay &&
                            Math.floor(WeatherFiveDay[2].main.temp)}
                          °{" "}
                        </p>
                      </div>
                      <div className="weakly-weather-item">
                        <p className="mb-1">
                          {" "}
                          <Moment format="ddd">
                            {WeatherFiveDay && WeatherFiveDay[3].dt_txt}
                          </Moment>
                        </p>{" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weatherIcons[3]}@2x.png`}
                        ></img>{" "}
                        <p className="mb-0">
                          {" "}
                          {WeatherFiveDay &&
                            Math.floor(WeatherFiveDay[3].main.temp)}
                          °{" "}
                        </p>
                      </div>
                      <div className="weakly-weather-item">
                        <p className="mb-1">
                          {" "}
                          <Moment format="ddd">
                            {WeatherFiveDay && WeatherFiveDay[4].dt_txt}
                          </Moment>{" "}
                        </p>{" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weatherIcons[4]}@2x.png`}
                        ></img>{" "}
                        <p className="mb-0">
                          {" "}
                          {WeatherFiveDay &&
                            Math.floor(WeatherFiveDay[4].main.temp)}
                          °{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
      <footer></footer>
    </div>
  );
}

// const clouds = "clouds";

export default App;
