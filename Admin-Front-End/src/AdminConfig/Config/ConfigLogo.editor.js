import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as configActions from "../../_actions/config.actions";

import LogoChange from "./LogoChange";
import {
   DEFAULT_IMAGE_URL,
   API_ENDPOINT,
   XHTML_LOADING,
} from "../../_constants/index.constants";

class ConfigContentEditor extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      const { configOfLogo } = this.props;
      if (configOfLogo.length === 0) return XHTML_LOADING;
      else {
         return (
            <div className=" card shadow ht-style-card">
               <div className="container col-md-12">
                  <div className="ht-config-title">Logo</div>
                  <div className="ht-config-content">
                     <LogoChange
                        idConfig={configOfLogo.idConfig}
                        imageAuthorInfo={
                           configOfLogo.image !== undefined
                              ? API_ENDPOINT + configOfLogo.image
                              : API_ENDPOINT + DEFAULT_IMAGE_URL
                        }
                     />
                  </div>
               </div>
            </div>
         );
      }
   }
}

ConfigContentEditor.propTypes = {
   classes: PropTypes.object,
   configAllActions: PropTypes.shape({
      fetchPatchConfigRequest: PropTypes.func,
   }),
};

const mapDispatchToProps = (dispatch) => {
   return {
      configAllActions: bindActionCreators(configActions, dispatch),
   };
};
export default connect(null, mapDispatchToProps)(ConfigContentEditor);
