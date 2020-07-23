import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PageBody from "../../common/PageBody";

import style from "./HomePage.module.css";

export default class HomePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <PageBody>
        <br />
        <h1>Hello Scientist!</h1>
        <h3>(and everyone else)</h3>
        <hr />
        <h3>Welcome to the Science Academy!</h3>
        <div className="text-background">
          <p>
            This acedemy will teach you how to do good science, and experiment
            using the greatest science ideas in the world. We are amazing
            scientists, and so are you !
          </p>
        </div>
        <Link to="/classes">
          <button className="startButton">Start Your Journey!</button>
        </Link>
      </PageBody>
    );
  }
}
