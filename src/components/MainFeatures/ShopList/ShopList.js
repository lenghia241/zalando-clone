import React, { Component } from "react";

class ShopList extends Component {
  state = {
    hover: "0"
  };
  render() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mapShopItems = array.map(() => (
      <div className="shopList__item">
        <div className="shopList__item-detail">
          <div
            href="www.google.com"
            className="shopList__item-detail--description"
            style={{
              backgroundImage: `url(${"https://i1.ztat.net/zlevent/285222/campaign/1x1/n/campaign_upload_1x1_285222_1539869905.jpg"})`
            }}
          >
            <div
              className="shopList__item-detail--description--text"
              id="text-upper"
            >
              <span>Fossil - Watch and Jewellery</span>
              <p>Perfect for every weather</p>
              <button className="btn--transparent">Shop now!</button>
            </div>
          </div>
          <div className="shopList__item-detail--description--text text-lower">
            <span>Up to -75%</span>
            <p>
              <i class="far fa-clock" />2 days, 6 hours
            </p>
          </div>
        </div>
      </div>
    ));
    return <div className="shopList">{mapShopItems}</div>;
  }
}

export default ShopList;
