import React, { Component } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainApp from "./components/MainApp/MainApp";
import Todo from "./components/Todo/Todo";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainApp} />
          </Switch>
          <Todo />
        </div>
      </div>
    );
  }
}

export default App;
