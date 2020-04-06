import React, { Component } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as configActions from "../../_actions/config.actions";

import { Button, Tooltip, Typography } from "antd";
import AvatarChange from "./AvartarChange";
import {
   DEFAULT_IMAGE_URL,
   API_ENDPOINT,
   XHTML_LOADING,
} from "../../_constants/index.constants";

const { Paragraph } = Typography;

class ConfigContentEditor extends Component {
   constructor(props) {
      super(props);
      this.state = {
         nameAuthor: "",
         describeAuthor: "",
         isNameAuthorEdited: false,
         isDescribeAuthorEdited: false,
      };
   }

   onChange = (str, field) => {
      const { configs } = this.props.config;

      if (field === "nameAuthor") {
         this.setState({ nameAuthor: str, isNameAuthorEdited: true });
         if (!this.state.isDescribeAuthorEdited)
            this.setState({ describeAuthor: configs.describeAuthor });
      }
      if (field === "describeAuthor") {
         this.setState({ describeAuthor: str, isDescribeAuthorEdited: true });
         if (!this.state.isNameAuthorEdited)
            this.setState({ nameAuthor: configs.nameAuthor });
      }
   };

   componentWillReceiveProps() {
      this.props.loaded();
   }

   onSave = () => {
      const { config } = this.props;

      let dataContent = {};
      // Kiểm tra xem là pageName nào mà fetch cho phù hợp
      //note, policy, detail-price, contact, config-detail, timelines
      dataContent = {
         idConfig: config.idConfig,
         infoType: config.infoType,
         configs: this.state,
      };
      //Save data config by id tour
      const { configAllActions } = this.props;
      const { fetchPatchConfigRequest } = configAllActions;
      fetchPatchConfigRequest(dataContent);
   };

   render() {
      const { config } = this.props;
      const { configs } = config;

      if (config.idConfig === undefined) return XHTML_LOADING;
      else {
         return (
            <div className=" card shadow ht-style-card">
               <div className="container col-md-12">
                  <div className="box-shadow p-3 ht-d-flex-row-space-between-start bdr-2 bgr-gray pt-2">
                     <Tooltip title="Quay về quản lý danh sách Bài Viết">
                        <Link to="/admin/configs">
                           <Button
                              //note, policy, detail-price, contact, config-detail, timelines
                              type="default"
                           >
                              <i className="fas fa-arrow-left mr-1"></i> Về danh
                              sách Bài Viết
                           </Button>
                        </Link>
                     </Tooltip>
                     <Tooltip title="Lưu nội dung Bài Viết">
                        <Button type="primary" onClick={this.onSave}>
                           <i className="far fa-save mr-2"></i> {` `}
                           Lưu Thông tin Tác Giả
                        </Button>
                     </Tooltip>
                  </div>
               </div>
               <div className="container col-md-12 mt-3 mb-3">
                  <div className="col-md-12 container card ht-d-flex-row-center-center ">
                     <div className="ht-d-flex-row-start-start col-md-8 card m-3 pt-3 pr-3 pl-3 bgrf8f8f8">
                        <div className="">
                           <AvatarChange
                              idConfig={config.idConfig}
                              imageAuthorInfo={
                                 config.image !== undefined
                                    ? API_ENDPOINT + config.image
                                    : API_ENDPOINT + DEFAULT_IMAGE_URL
                              }
                           />
                        </div>
                        <div className="ht-d-flex-col-start-start col-md ml-3">
                           <div className="ht-width-100">
                              <Paragraph
                                 className="ht-title-author-info mb-2"
                                 editable={{
                                    onChange: (str) =>
                                       this.onChange(str, "nameAuthor"),
                                 }}
                              >
                                 {configs?.nameAuthor !== undefined &&
                                 !this.state.isNameAuthorEdited
                                    ? configs.nameAuthor
                                    : this.state.nameAuthor}
                              </Paragraph>
                           </div>
                           <div className="ht-describe ht-width-100">
                              <Paragraph
                                 editable={{
                                    onChange: (str) =>
                                       this.onChange(str, "describeAuthor"),
                                 }}
                              >
                                 {configs?.describeAuthor !== undefined &&
                                 !this.state.isDescribeAuthorEdited
                                    ? configs.describeAuthor
                                    : this.state.describeAuthor}
                              </Paragraph>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container col-md-12">
                  <div className="box-shadow p-3 ht-d-flex-row-space-between-start bdr-2 bgr-gray pt-2">
                     <Tooltip title="Quay về quản lý danh sách Bài Viết">
                        <Link to="/admin/configs">
                           <Button
                              //note, policy, detail-price, contact, config-detail, timelines
                              type="default"
                           >
                              <i className="fas fa-arrow-left mr-1"></i> Về danh
                              sách Bài Viết
                           </Button>
                        </Link>
                     </Tooltip>
                     <Tooltip title="Lưu lịch trình TOUR">
                        <Button type="primary" onClick={this.onSave}>
                           <i className="far fa-save mr-2"></i> {` `}
                           Lưu Thông tin Tác Giả
                        </Button>
                     </Tooltip>
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
