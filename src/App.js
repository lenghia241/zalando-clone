import React, { Component, Fragment } from "react";
// import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import MainFeatures from "./components/MainFeatures/MainFeatures";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header />
        <MainFeatures />
      </Fragment>
    );
  }
}
// <div className="container">
//           <Switch>
//             <Route path="/" exact component={MainApp} />
//           </Switch>
//           <Todo />
//         </div>

export default App;
