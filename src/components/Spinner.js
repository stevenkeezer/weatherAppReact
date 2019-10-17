import React, { Component } from "react";
import spinner from "../img/spinner.svg";

export class Spinner extends Component {
  render() {
    return (
      <div id="svg-container">
        <img id="spinner" src={spinner} width="45px"></img>
      </div>
    );
  }
}

export default Spinner;
