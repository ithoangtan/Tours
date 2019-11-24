import React, { Component } from "react";

import SideBarContainer from "../../ParentContainer/sideBar.container";
import ScheduleDetailWrapperContainer from "./ScheduleDetailContentWrapper/scheduleDetailWrapper.container";

export default class WrapperTableParentContainer extends Component {
   render() {
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer {...this.props} />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <ScheduleDetailWrapperContainer {...this.props} />
            {/* End of Content Wrapper */}
         </div>
      );
   }
}
