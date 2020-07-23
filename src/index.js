import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import style from "./styles.css";

import Header from "./components/common/Header";
import HomePage from "./components/pages/HomePage/HomePage";
import ClassListPage from "./components/pages/ClassListPage/ClassListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <HomePage />
          </Route>
          <Route exact path="/classes">
            <Header />
            <ClassListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
