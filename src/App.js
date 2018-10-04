import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainApp from "./components/MainApp/MainApp";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainApp} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
