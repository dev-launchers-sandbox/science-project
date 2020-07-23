import React from "react";
import style from "./ClassesHolder.module.css";

export default class ClassesHolder extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <br />
        <h1> Class List Page</h1>
        <div className="Classestext-background">
          <p>In this page you will se all of the science classes we offer:)!</p>
        </div>
      </div>
    );
  }
}
