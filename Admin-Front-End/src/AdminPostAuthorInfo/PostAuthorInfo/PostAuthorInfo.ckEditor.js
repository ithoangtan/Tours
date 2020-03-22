import React, { Component } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as generalActions from "../../_actions/general.actions";

import { Button, Tooltip, message, Typography } from "antd";
import AvatarChange from "./AvartarChange";

const { Paragraph } = Typography;

class GeneralContentEditor extends Component {
   constructor(props) {
      super(props);
      this.state = {
         nameAuthor: "ithoangtan",
         describeAuthor:
            "Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new."
      };
   }

   onChange = async (str, field) => {
      // Using fetchUpdateGeneralRequest
      if (field === "nameAuthor") {
         //  const data = { ...account, name: str };
         // await fetchUpdateGeneralRequest(data);
         this.setState({
            nameAuthor: str
         });
      }
      if (field === "describeAuthor") {
         // const data = { ...account, address: str };
         // await fetchUpdateGeneralRequest(data);
         this.setState({ describeAuthor: str });
      }
   };

   componentWillReceiveProps() {
      this.props.loaded();
   }

   onSave = () => {
      message.loading("Đang lưu", 2);
      let dataContent = {};
      // Kiểm tra xem là pageName nào mà fetch cho phù hợp
      //note, policy, detail-price, contact, general-detail, timelines
      dataContent = {
         data: this.state.content,
         idGeneral: this.props.general.idGeneral
      };
      //Save data general by id tour
      const { generalAllActions } = this.props;
      const { fetchPatchdGeneralRequest } = generalAllActions;
      fetchPatchdGeneralRequest(dataContent);
   };

   render() {
      return (
         <div className=" card shadow ht-style-card">
            <div className="container col-md-12">
               <div className="box-shadow p-3 ht-d-flex-row-space-between-start bdr-2 bgr-gray pt-2">
                  <Tooltip title="Quay về quản lý danh sách Bài Viết">
                     <Link to="/admin/generals">
                        <Button
                           //note, policy, detail-price, contact, general-detail, timelines
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
                  Có thể sửa ngay trên preview:
                  <div className="ht-d-flex-row-start-start col-md-8 card m-3 pt-3 pr-3 pl-3 bgrf8f8f8">
                     <div className="">
                        <AvatarChange
                           idGeneral={1}
                           imageAuthorInfo={"/images/person_1.jpg"}
                           //"/images/person_1.jpg"
                        />
                     </div>
                     <div className="ht-d-flex-col-start-start col-md ml-3">
                        <div className="ht-width-100">
                           <Paragraph
                              className="ht-title-author-info mb-2"
                              editable={{
                                 onChange: str =>
                                    this.onChange(str, "nameAuthor")
                              }}
                           >
                              {this.state.nameAuthor}
                           </Paragraph>
                        </div>
                        <div className="ht-describe ht-width-100">
                           <Paragraph
                              editable={{
                                 onChange: str =>
                                    this.onChange(str, "describeAuthor")
                              }}
                           >
                              {this.state.describeAuthor}
                           </Paragraph>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container col-md-12">
               <div className="box-shadow p-3 ht-d-flex-row-space-between-start bdr-2 bgr-gray pt-2">
                  <Tooltip title="Quay về quản lý danh sách Bài Viết">
                     <Link to="/admin/generals">
                        <Button
                           //note, policy, detail-price, contact, general-detail, timelines
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

GeneralContentEditor.propTypes = {
   classes: PropTypes.object,
   generalAllActions: PropTypes.shape({
      fetchPatchdGeneralRequest: PropTypes.func
   }),
   general: PropTypes.object
};

const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => {
   return {
      generalAllActions: bindActionCreators(generalActions, dispatch)
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(GeneralContentEditor);
