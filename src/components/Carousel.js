import React, { Component } from "react";
import { Carousel as WeatherCarousel } from "react-bootstrap";

// h1>Daily</h1>
// <div id="fiveDayContainer">
//   <ul>
//     Day 1
//     <li>

//     </li>
//     Day 2
//     <li>
//       {WeatherFiveDay && WeatherFiveDay[1].weather[0].main}
//       {WeatherFiveDay && WeatherFiveDay[1].weather[0].description}
//       {WeatherFiveDay && WeatherFiveDay[1].main.temp}
//     </li>
//     Day 3
//     <li>
//       {WeatherFiveDay && WeatherFiveDay[2].weather[0].main}
//       {WeatherFiveDay && WeatherFiveDay[2].weather[0].description}
//       {WeatherFiveDay && WeatherFiveDay[2].main.temp}
//     </li>
//     Day 4
//     <li>
//       {WeatherFiveDay && WeatherFiveDay[3].weather[0].main}
//       {WeatherFiveDay && WeatherFiveDay[3].weather[0].description}
//       {WeatherFiveDay && WeatherFiveDay[3].main.temp}
//     </li>
//     Day 5
//     <li>
//       {WeatherFiveDay && WeatherFiveDay[4].weather[0].main}
//       {WeatherFiveDay && WeatherFiveDay[4].weather[0].description}
//       {WeatherFiveDay && WeatherFiveDay[4].main.temp}
//     </li>
//   </ul>
// </div>
class Carousel extends Component {
  render() {
    console.log(this.props.forcast);
    return (
      <WeatherCarousel className="mx-auto">
        <WeatherCarousel.Item>
          <img
            className="d-block w-100"
            src="https://scx1.b-cdn.net/csz/news/800/2018/1-whytheweathe.jpg"
            alt="First slide"
          />
          <WeatherCarousel.Caption>
            {this.props.forcast && this.props.forcast[0].weather[0].main}
            {this.props.forcast && this.props.forcast[0].main.temp}
            {this.props.forcast && this.props.forcast[0].weather[0].description}
          </WeatherCarousel.Caption>
        </WeatherCarousel.Item>

        <WeatherCarousel.Item>
          <img
            className="d-block w-100"
            src="https://scx1.b-cdn.net/csz/news/800/2018/1-whytheweathe.jpg"
            alt="Third slide"
          />

          <WeatherCarousel.Caption>
            {this.props.forcast && this.props.forcast[1].weather[0].main}
            {this.props.forcast && this.props.forcast[1].main.temp}
            {this.props.forcast && this.props.forcast[1].weather[0].description}
          </WeatherCarousel.Caption>
        </WeatherCarousel.Item>

        <WeatherCarousel.Item>
          <img
            className="d-block w-100"
            src="https://scx1.b-cdn.net/csz/news/800/2018/1-whytheweathe.jpg"
            alt="Third slide"
          />

          <WeatherCarousel.Caption>
            {this.props.forcast && this.props.forcast[2].weather[0].main}
            {this.props.forcast && this.props.forcast[2].main.temp}
            {this.props.forcast && this.props.forcast[2].weather[0].description}
          </WeatherCarousel.Caption>
        </WeatherCarousel.Item>

        <WeatherCarousel.Item>
          <img
            className="d-block w-100"
            src="https://scx1.b-cdn.net/csz/news/800/2018/1-whytheweathe.jpg"
            alt="Third slide"
          />

          <WeatherCarousel.Caption>
            {this.props.forcast && this.props.forcast[3].weather[0].main}
            {this.props.forcast && this.props.forcast[3].main.temp}
            {this.props.forcast && this.props.forcast[3].weather[0].description}
          </WeatherCarousel.Caption>
        </WeatherCarousel.Item>

        <WeatherCarousel.Item>
          <img
            className="d-block w-100"
            src="https://scx1.b-cdn.net/csz/news/800/2018/1-whytheweathe.jpg"
            alt="Third slide"
          />

          <WeatherCarousel.Caption>
            {this.props.forcast && this.props.forcast[4].weather[0].main}
            {this.props.forcast && this.props.forcast[4].main.temp}
            {this.props.forcast && this.props.forcast[4].weather[0].description}
          </WeatherCarousel.Caption>
        </WeatherCarousel.Item>
      </WeatherCarousel>
    );
  }
}

export default Carousel;
