import React, { Component } from "react";

import TopBarContainer from "../../AdminParentContainer/topBar.container";
import CkEditorContainer from "./ckEditor.container";
import FooterContainer from "../../AdminParentContainer/footer.Container";

export default class ContentTableWrapperContainer extends Component {
   render() {
      const { tour, scheduleByIdTour } = this.props;
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer {...this.props} />
            {/* End of Topbar */}
            {/* Main Content */}
            <CkEditorContainer
               {...this.props}
               tour={tour}
               scheduleByIdTour={scheduleByIdTour}
            />
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
