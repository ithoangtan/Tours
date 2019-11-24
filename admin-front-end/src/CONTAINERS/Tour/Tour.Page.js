import React, { Component } from "react";

import TourParentContainer from "./TourParent/tourParent.container";
import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/func.contants";

export default class TourPage extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
      // const { tourAllActions } = this.props;
      // const { fetchListTourRequest } = tourAllActions;
      // fetchListTourRequest();
   }
   render() {
      return <TourParentContainer {...this.props} />;
   }
}
