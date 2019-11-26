import React, { Component } from "react";

export default class TourDetailImages extends Component {
   render() {
      const { srcImage } = this.props;
      return (
         <div>
            <img
               alt="notFound"
               src={`${srcImage}`}
               className="img-tour ht-img-tour"
            />
         </div>
      );
   }
}
