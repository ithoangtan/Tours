import React, { Component } from "react";

import BestTourContainer from "../Tour/bestTour.container";
import TourVideoGalleryContainer from "../Tour/videoGallery.container";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";

export default class TourBestPage extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }
   render() {
      return (
         <div>
            <TourVideoGalleryContainer />
            <BestTourContainer />
         </div>
      );
   }
}
