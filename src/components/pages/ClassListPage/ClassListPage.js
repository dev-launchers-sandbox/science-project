import React from "react";
import ReactDOM from "react-dom";

import style from "./ClassListPage.module.scss";

export default class ClassListPage extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h1> Class List Page</h1>
        <div className="ClassListPagetext-background">
          <p>In this page you will se all of the science classes we offer:)!</p>
        </div>
        <div className={style.classesButtons}>
          <div className={style.chemistryCourse}>
            <p>Chemistry</p>
          </div>
          <div className={style.physicsCourse}>
            <p>Physics</p>
          </div>
          <div className={style.biologyCourse}>
            <p>Biology</p>
          </div>
          <div className={style.computerScienceCourse}>
            <p>Computer Science</p>
          </div>
          <div className={style.mathCourse}>
            <p>Math</p>
          </div>
          <div className={style.astronomyCourse}>
            <p>Astronomy</p>
          </div>
          <div className={style.biochemistryCourse}>
            <p>Biochemistry</p>
          </div>
          <div className={style.astrophysicsCourse}>
            <p>Astrophysics</p>
          </div>
          <div className={style.engeneeringCourse}>
            <p>Engeneering</p>
          </div>
          <div className={style.astrobiologyCourse}>
            <p>Astrobiology</p>
          </div>
        </div>
      </div>
    );
  }
}
