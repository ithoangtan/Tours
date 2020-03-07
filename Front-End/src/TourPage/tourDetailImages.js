import React, { Component } from "react";

import { API_ENDPOINT } from "../_constants/index.constants";

export default class TourDetailImages extends Component {
   render() {
      const { srcImage } = this.props;
      return (
         // <div className="ht-contain-img">
         <img
            alt="notFound"
            src={`${API_ENDPOINT + srcImage}`}
            className="ht-img-tour"
         />
         // </div>
      );
   }
}
