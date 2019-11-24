import React, { Component } from "react";

import SideBarContainer from "../../ParentContainer/sideBar.container";
import IndexWrapperContainer from "./IndexContentWrapper/indexWrapper.container";

export default class IndexParentContainer extends Component {
   render() {
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <IndexWrapperContainer />
            {/* End of Content Wrapper */}
         </div>
      );
   }
}
