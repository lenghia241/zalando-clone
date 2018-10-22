import React, { Component } from "react";
import SortBar from "./SortBar/SortBar";
import ShopList from "./ShopList/ShopList";

class MainFeatures extends Component {
  render() {
    return (
      <div class="mainFeature">
        <div class="mainFeature__wrapper">
          <SortBar />
          <ShopList />
        </div>
      </div>
    );
  }
}

export default MainFeatures;
