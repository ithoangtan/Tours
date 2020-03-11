import React, { Component } from "react";

import TourDetailContainer from "../TourPage/tourDetail.container";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

export default class bookTourStep1 extends Component {
   //step 1: check product

   componentDidUpdate() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }
   render() {
      const { tourById, listImageByIdTour } = this.props;
      return (
         <TourDetailContainer
            tour={tourById}
            listImageTour={listImageByIdTour}
            bookTour={true}
         />
      );
   }
}
