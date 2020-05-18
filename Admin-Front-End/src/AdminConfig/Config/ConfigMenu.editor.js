import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as configActions from "../../_actions/config.actions";

import { XHTML_LOADING } from "../../_constants/index.constants";
import MenuChild from "./ConfigMenu.child";
import { Button } from "antd";

class ConfigMenuEditor extends Component {
   constructor(props) {
      super(props);
      this.state = {
         menuVN: props.configOfMenu.configs?.menuVN || [],
         menuWorld: props.configOfMenu.configs?.menuWorld || [],
      };
   }

   onSave = () => {
      const { configOfMenu } = this.props;
      let dataContent = {
         idConfig: configOfMenu,
         infoType: configOfMenu.infoType,
         configs: this.state,
         // is Object
         // Menu VN, Menu World
         // Menu: subMenu1, subMenu2, subMenu3
         //subMenu: element[] = ["Hà Nội", "Hồ Chí Minh"]
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
                  <div className="ht-config-title">Menu</div>
                  <div className="ht-config-content-two">
                     <div className="col-md-6">
                        <h6>Menu Việt Nam</h6>
                        <MenuChild
                           className="card"
                           name="vn"
                           menuVN={this.state.menuVN} //array
                        />
                     </div>
                     <div className="col-md-6">
                        <h6>Menu Quốc tế</h6>
                        <MenuChild
                           name="world"
                           menuWorld={this.state.menuWorld} //array
                        />
                     </div>
                  </div>
                  <Button
                     className="mt-2"
                     style={{ width: "100px", fontWeight: 500 }}
                     type="primary"
                     onClick={this.onSave}
                  >
                     Save
                  </Button>
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
