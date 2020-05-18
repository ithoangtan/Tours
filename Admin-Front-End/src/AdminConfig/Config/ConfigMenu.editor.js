import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as configActions from "../../_actions/config.actions";

import { XHTML_LOADING } from "../../_constants/index.constants";

class ConfigMenuEditor extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   onSave = () => {
      const { configOfMenu } = this.props;
      let dataContent = {
         idConfig: configOfMenu,
         infoType: "configs.infoType",
         configs: "",
      };

      //Save data config by id config
      const { configAllActions } = this.props;
      const { fetchPatchConfigRequest } = configAllActions;
      fetchPatchConfigRequest(dataContent);
   };

   render() {
      const { configOfMenu } = this.props;
      if (configOfMenu.idConfig === undefined) return XHTML_LOADING;
      else {
         return (
            <div className=" card shadow ht-style-card">
               <div className="container col-md-12">
                  <div className="ht-config-title">Menu Config</div>
                  <div className="ht-config-content">
                     Lại là một component mới!
                  </div>
               </div>
            </div>
         );
      }
   }
}

ConfigMenuEditor.propTypes = {
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
export default connect(null, mapDispatchToProps)(ConfigMenuEditor);
