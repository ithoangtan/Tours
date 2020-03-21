import React, { Component } from "react";

import TopBarContainer from "../../AdminParentContainer/topBar.container";
import CkEditorContainer from "./ckEditor.container";
import FooterContainer from "../../AdminParentContainer/footer.Container";
import { Spin } from "antd";

export default class ContentTableWrapperContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         loading: true
      };
   }

   loaded = () => {
      this.setState(props => {
         return {
            loading: false
         };
      });
   };

   render() {
      const { tour, scheduleByIdTour } = this.props;
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer {...this.props} />
            {/* End of Topbar */}
            {/* Main Content */}
            <Spin tip="loading... shedule" spinning={this.state.loading}>
               <CkEditorContainer
                  {...this.props}
                  tour={tour}
                  scheduleByIdTour={scheduleByIdTour}
                  loaded={this.loaded}
               />
            </Spin>
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
