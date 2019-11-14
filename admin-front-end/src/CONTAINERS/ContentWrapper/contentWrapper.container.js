import React, { Component } from "react";

import TopBarContainer from "./MainContent/Heading/topBar.container";
import ContentMainContainer from "./MainContent/contentMain.container";
import FooterContainer from "./Footer/footer.container";

export default class ContentWrapperContainer extends Component {
   render() {
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer />
            {/* End of Topbar */}
            {/* Main Content */}
            <ContentMainContainer />
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
