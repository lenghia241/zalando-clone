import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="banner">
          <div
            className="banner__image"
            style={{
              backgroundImage:
                'url("https://mosaic01.ztat.net/vgs/media//zlevent/282024/l/n/top_highlight_upload_282024_1539267838.jpg")'
            }}
          />
          <div className="banner__brand">
            <h1 className="banner__brand__name">CAMEL ACTIVE</h1>
            <button className="banner__brand__button">Shop now!</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
