import React, { Component } from "react";

class SortBar extends Component {
  render() {
    return (
      <div className="sortBar">
        <div className="sortBar-container">
          <a href="https://www.google.com/" className="sortBar__category">
            All campains
          </a>
          <a href="https://www.google.com/" className="sortBar__category">
            Gift ideas
          </a>
          <a href="https://www.google.com/" className="sortBar__category">
            Women
          </a>
          <a href="https://www.google.com/" className="sortBar__category">
            Men
          </a>
          <a href="https://www.google.com/" className="sortBar__category">
            Kids
          </a>
          <a href="https://www.google.com/" className="sortBar__category">
            Fast delivery
          </a>
          <a href="https://www.google.com/" className="sortBar__category">
            Last Chance
          </a>
        </div>
      </div>
    );
  }
}

export default SortBar;
