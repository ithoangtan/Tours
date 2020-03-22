import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as generalActions from "../_actions/general.actions";

import SideBarContainer from "../AdminParentContainer/sideBar.container";
import PostAuthorInfoWrapperContainer from "./PostAuthorInfo/PostAuthorInfoWrapper.container";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

class PostAuthorInfo extends Component {
   componentWillMount() {
      if (this.props.match !== null) {
         this.fetch();
      }
   }
   fetch = async () => {
      await funcLoadJs(INDEX_CONSTANTS.AdminArrayExternalScript);

      const { idGeneral } = this.props.match.params;

      //Load data general by Id general
      const { generalAllActions } = this.props;
      const { fetchGeneralByIdRequest } = generalAllActions;
      await fetchGeneralByIdRequest(idGeneral);
   };

   render() {
      const { general } = this.props;
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer {...this.props} />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <PostAuthorInfoWrapperContainer {...this.props} general={general} />
            {/* End of Content Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded ht-loaded" href="#page-top">
               <i className="fas fa-angle-up" />
            </a>
         </div>
      );
   }
}

PostAuthorInfo.propTypes = {
   classes: PropTypes.object,
   generalAllActions: PropTypes.shape({
      fetchGeneralByIdRequest: PropTypes.func
   }),
   general: PropTypes.object
};

const mapStateToProps = state => {
   return {
      general: state.general.generalById
   };
};
const mapDispatchToProps = dispatch => {
   return {
      generalAllActions: bindActionCreators(generalActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là generalActions ở bên general.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostAuthorInfo);
