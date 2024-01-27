/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./ShimmerStyle.scss";

class Shimmer extends React.Component {
  render() {
    return (
      <div class="shimmer-cardList">
        <div class="shimmer-card is-loading">
          <div class="shimmer-image"></div>
          <div class="content">
            <h2 />
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Shimmer;
