import React, { Component } from "react";

import SideBarContainer from "../AdminParentContainer/sideBar.container";
import ConfigWrapperContainer from "./Config/ConfigWrapper.container";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as configActions from "../_actions/config.actions";

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

      //Load data post by Id post
      const { configAllActions } = this.props;
      const { fetchListConfigRequest } = configAllActions;
      await fetchListConfigRequest();
   };
   render() {
      const { configs } = this.props;
      if (configs.length !== 0) {
         for (let i = 0; i < configs.length; i++) {
            configs[i].configs = JSON.parse(configs[i].configs);
         }
      }
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer {...this.props} />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <ConfigWrapperContainer {...this.props} configs={configs} />
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
   configAllActions: PropTypes.shape({
      fetchListConfigRequest: PropTypes.func,
   }),
   configs: PropTypes.array,
};

const mapStateToProps = (state) => {
   return {
      configs: state.config.listConfig,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      configAllActions: bindActionCreators(configActions, dispatch),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostAuthorInfo);
