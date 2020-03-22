import React, { Component } from "react";

import TopBarContainer from "../../AdminParentContainer/topBar.container";
import TagTableContainer from "./TagTable.container";
import ServiceTableContainer from "./ServiceTable.container";
import FooterContainer from "../../AdminParentContainer/footer.Container";

export default class ContentTableWrapperContainer extends Component {
   render() {
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer />
            {/* End of Topbar */}
            {/* Main Content */}
            <div className="ht-d-flex-row-start-start">
               <TagTableContainer {...this.props} />
               <ServiceTableContainer {...this.props} />
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
