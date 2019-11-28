import React, { Component } from "react";

import TopBarContainer from "../../AdminParentContainer/topBar.container";
import TourTableContainer from "./tourTable.container";
import FooterContainer from "../../AdminParentContainer/footer.Container";

export default class ContentTableWrapperContainer extends Component {
   render() {
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer />
            {/* End of Topbar */}
            {/* Main Content */}
            <TourTableContainer {...this.props} />
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
