import React, { Component } from "react";

import BestTourContainer from "../_components/Tour/bestTour.container";
import TourVideoGalleryContainer from "../_components/Tour/videoGallery.container";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

export default class TourBestPage extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }
   render() {
      return (
         <>
            <TourVideoGalleryContainer />
            <BestTourContainer />
         </>
      );
   }
}
