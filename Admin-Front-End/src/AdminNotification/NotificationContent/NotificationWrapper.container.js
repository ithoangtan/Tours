import React, { Component } from "react";

import TopBarContainer from "../../AdminParentContainer/topBar.container";
import NotificationTableContainer from "./NotificationTable.container";
import FooterContainer from "../../AdminParentContainer/footer.Container";

export default class ContentTableWrapperContainer extends Component {
   render() {
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer />
            {/* End of Topbar */}
            {/* Main Content */}
            <NotificationTableContainer {...this.props} />
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
