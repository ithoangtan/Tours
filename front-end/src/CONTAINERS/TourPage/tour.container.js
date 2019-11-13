import React, { Component } from "react";

import BestTourContainer from "../Tour/bestTour.container";
import TourVideoGalleryContainer from "../Tour/videoGallery.container";

export default class TourContainer extends Component {
   render() {
      return (
         <div>
            <TourVideoGalleryContainer />
            <BestTourContainer />
         </div>
      );
   }
}
