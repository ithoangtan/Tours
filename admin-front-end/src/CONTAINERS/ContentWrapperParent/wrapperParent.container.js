import React, { Component } from "react";

import SideBarContainer from "../ContentWrapperParent/SideBar/sideBar.container";
import ContentWrapperContainer from "../ContentWrapper/contentWrapper.container";

export default class WrapperParentContainer extends Component {
   render() {
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <ContentWrapperContainer />
            {/* End of Content Wrapper */}
         </div>
      );
   }
}
