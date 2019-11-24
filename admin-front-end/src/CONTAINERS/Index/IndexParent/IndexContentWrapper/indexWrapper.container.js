import React, { Component } from "react";

import TopBarContainer from "../../../ParentContainer/topBar.container";
import IndexContentContainer from "./indexContent.container";
import FooterContainer from "../../../ParentContainer/footer.Container";

export default class ContentWrapperContainer extends Component {
   render() {
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer />
            {/* End of Topbar */}
            {/* Main Content */}
            <IndexContentContainer />
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
