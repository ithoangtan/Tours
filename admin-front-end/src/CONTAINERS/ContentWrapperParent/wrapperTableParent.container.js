import React, { Component } from "react";

import SideBarContainer from "../ContentWrapperParent/SideBar/sideBar.container";
import ContentTableWrapperContainer from "../ContentWrapper/contentTableWrapper.container";

export default class WrapperTableParentContainer extends Component {
   render() {
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <ContentTableWrapperContainer />
            {/* End of Content Wrapper */}
         </div>
      );
   }
}
