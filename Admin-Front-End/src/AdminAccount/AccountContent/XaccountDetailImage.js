import React, { Component } from "react";

import { APIImage } from "../../_constants/index.constants";

export default class AvatarDetailImages extends Component {
   render() {
      const { srcImage } = this.props;
      return (
         <img
            alt="notFound"
            src={`${APIImage + srcImage}`}
            className="ht-img-tour"
         />
      );
   }
}
