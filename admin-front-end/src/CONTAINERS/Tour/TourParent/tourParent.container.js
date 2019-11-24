import React, { Component } from "react";

import SideBarContainer from "../../ParentContainer/sideBar.container";
import TourWrapperContainer from "./TourContentWrapper/tourWrapper.container";

export default class WrapperTableParentContainer extends Component {
   render() {
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <TourWrapperContainer />
            {/* End of Content Wrapper */}
         </div>
      );
   }
}
