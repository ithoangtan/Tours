import React, { Component } from "react";
import TourSingleContainer from "../Tour/tourSingle.container";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";

export default class TourSinglePage extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }

   render() {
      return <TourSingleContainer />;
   }
}
