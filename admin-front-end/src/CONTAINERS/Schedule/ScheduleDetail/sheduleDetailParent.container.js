import React, { Component } from "react";

import SideBarContainer from "../../ParentContainer/sideBar.container";
import ContentScheduleDetailWrapperContainer from "../ContentWrapper/contentScheduleDetailWrapperContainer.container";

export default class WrapperTableParentContainer extends Component {
   render() {
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <ContentScheduleDetailWrapperContainer />
            {/* End of Content Wrapper */}
         </div>
      );
   }
}
