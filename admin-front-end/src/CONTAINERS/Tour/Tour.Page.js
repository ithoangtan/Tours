import React, { Component } from "react";

import SideBarContainer from "../ParentContainer/sideBar.container";
import TourWrapperContainer from "./TourContent/tourWrapper.container";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/func.contants";

export default class WrapperTableParentContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
      // const { tourAllActions } = this.props;
      // const { fetchListTourRequest } = tourAllActions;
      // fetchListTourRequest();
   }
   render() {
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <TourWrapperContainer {...this.props} />
            {/* End of Content Wrapper */}
         </div>
      );
   }
}
