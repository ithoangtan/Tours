import React, { Component } from "react";

import SideBarContainer from "../AdminParentContainer/sideBar.container";
import PostWrapperContainer from "./PostContent/postWrapper.container";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

export default class WrapperTableParentContainer extends Component {
   componentWillMount() {
      funcLoadJs(INDEX_CONSTANTS.AdminArrayExternalScript);

      // const { postAllActions } = this.props;
      // const { fetchListPostRequest } = postAllActions;
      // fetchListPostRequest();
   }
   render() {
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <PostWrapperContainer {...this.props} />
            {/* End of Content Wrapper */} {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded ht-loaded" href="#page-top">
               <i className="fas fa-angle-up" />
            </a>
         </div>
      );
   }
}
