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
  const [Error, setError] = useState(false);
  let gs = useRef(null);

  const weatherIcons = [];

  console.log("bla", gs);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getDataApi(latitude, longitude);
      getFiveDayApi(latitude, longitude);
    });
  };

  const getDataApi = async (lat, long) => {
    const API_KEY = "008eb2e476bb4ac1ce396f0211fba6fc";
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
    const API_KEY = "008eb2e476bb4ac1ce396f0211fba6fc";
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
    // marginBottom: "-30px",
    // height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `url('https://source.unsplash.com/random/800x800?${w}?weather?sig={{ range(1, 123) | random }}')`,
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
      {/* {Error && <h1>My bad</h1>} */}
      {!Loading ? (
        <div
          className="page-content page-container container-fluid"
          id="page-content"
        >
          <div className="padding">
            <div className="row">
              <Geosuggest
                ref={(el) => (gs = el)}
                placeholder="Search Locations"
                onSuggestSelect={(e) => onSuggestSelect(e)}
                className="ml-auto pb-2"
              />
              <button
                className="mr-auto geosuggestBtn  mb-2 "
                style={{
                  border: "none",
                  outline: "none",
                }}
              >
                <IosLocateOutline
                  className=""
                  style={{ backgroundColor: "white", color: "lightgrey" }}
                />
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
                          {Weather && Weather.main.temp}&deg; <small>F</small>
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
