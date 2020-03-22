import React, { Component } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "../../_actions/tour.actions";
import * as scheduleActions from "../../_actions/schedule.actions";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Button, Tooltip, message } from "antd";

import NumberFormat from "react-number-format";
import moment from "moment";

import TimelinesComponent from "../../AdminTour/TourContent/Timelines";

require("dotenv").config();

class EditorContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: props.id,
         content: props.content,
         handleWYSIWYGInput: props.handleWYSIWYGInput,
         editor: ClassicEditor,
         scheduleByIdTour: props.scheduleByIdTour,
         tour: props.tour,
         previewsInData: true,
         pageName: "schedule-detail" //defaul is schedule
         //note, policy, detail-price, contact, schedule-detail, timelines
      };
   }

   onChange = (event, editor) => {
      const data = editor.getData();
      //this.state.handleWYSIWYGInput(this.props.id, data);
      this.setState({ content: data });
   };

   onChangeDate(value, dateString) {}

   onOk(value) {}

   componentWillMount() {
      const regex = /.*admin\/(.*?)\/.*/gu;
      const str = window.location.href;
      const subst = `$1`;
      // The substituted value will be contained in the result variable
      const resultPage = str.replace(regex, subst);
      this.setState({
         pageName: resultPage
      });
   }

   componentWillReceiveProps() {
      this.props.loaded();
   }

   onSave = () => {
      const { pageName } = this.state;

      message.loading("Đang lưu", 2);
      let dataContent = {};
      // Kiểm tra xem là pageName nào mà fetch cho phù hợp
      //note, policy, detail-price, contact, schedule-detail, timelines
      if (pageName === "schedule-detail") {
         dataContent = {
            data: this.state.content,
            idTour: this.props.tour.idTour
         };
      }
      if (pageName === "note") {
         // Dựa vào database để làm tiếp
         // Sửa lại API để phù hợp với chỗ này
         dataContent = {
            notes: this.state.content,
            idTour: this.props.tour.idTour
         };
      }
      if (pageName === "policy") {
         dataContent = {
            policy: this.state.content,
            idTour: this.props.tour.idTour
         };
      }
      if (pageName === "detail-price") {
         dataContent = {
            detailPrice: this.state.content,
            idTour: this.props.tour.idTour
         };
      }
      if (pageName === "contact") {
         dataContent = {
            contacts: this.state.content,
            idTour: this.props.tour.idTour
         };
      }
      if (pageName === "timelines") {
         //API mới, bảng mới, và cái gì cũng mới
      }
      //Save data schedule by id tour
      const { scheduleAllActions } = this.props;
      const { fetchPatchScheduleRequest } = scheduleAllActions;
      fetchPatchScheduleRequest(dataContent);
   };

   getNameSaveBtn() {
      const { pageName } = this.state;
      if (pageName === "schedule-detail") {
         return "Lưu lịch trình";
      }
      if (pageName === "note") {
         return "Lưu Lưu ý";
      }
      if (pageName === "policy") {
         return "Lưu Chính sách & Điều khoản";
      }
      if (pageName === "detail-price") {
         return "Lưu chi tiết giá tour";
      }
      if (pageName === "contact") {
         return "Lưu liên hệ";
      }
      if (pageName === "timelines") {
         return "Lưu Mốc thời gian tour";
      }
   }

   renderCkEditor() {
      const { scheduleByIdTour } = this.props;
      const { pageName } = this.state;
      let data;
      if (pageName === "schedule-detail") {
         data = scheduleByIdTour.data;
      }
      if (pageName === "note") {
         data = scheduleByIdTour.notes;
      }
      if (pageName === "policy") {
         data = scheduleByIdTour.policy;
      }
      if (pageName === "detail-price") {
         data = scheduleByIdTour.detailPrice;
      }
      if (pageName === "contact") {
         data = scheduleByIdTour.contacts;
      }
      if (pageName === "timelines") {
      }

      if (data !== null && data !== undefined) {
         return (
            <CKEditor
               editor={this.state.editor}
               data={data}
               config={{
                  // ckfinder: {
                  //    // eslint-disable-next-line max-len
                  //    uploadUrl:
                  //       "https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json"
                  // },
                  // cloudServices: {
                  //    // tokenUrl: process.env.TOKEN_URL_CKEDITOR,
                  //    // uploadUrl: process.env.UPLOAD_URL_CKEDITOR
                  //    tokenUrl:
                  //       "https://43967.cke-cs.com/token/dev/l7cxsIIm0SUdMOgNLARTMvdnWOZonc1bVbB741He69AfWvRSQd1o9NKKwwCo",
                  //    uploadUrl: "https://43967.cke-cs.com/easyimage/upload/"
                  // },
                  mediaEmbed: {
                     previewsInData: true
                  }
               }}
               // extraPlugins={"easyimage"}
               onInit={editor => {
                  // You can store the "editor" and use when it is needed.
                  this.setState({ scheduleByIdTour });
               }}
               onChange={(event, editor) => this.onChange(event, editor)}
               onBlur={editor => {}}
               onFocus={editor => {}}
            />
         );
      } else return <></>;
   }

   // onRedirect = pathnameTo => {
   //    this.setState({ pathnameTo });
   // };

   renderContentDetail() {
      const { pageName } = this.state;
      if (
         pageName === "schedule-detail" ||
         pageName === "note" ||
         pageName === "policy" ||
         pageName === "detail-price" ||
         pageName === "contact"
      ) {
         return (
            <div className="Editor-content ht-style-editor">
               {this.renderCkEditor()}
            </div>
         );
      }
      if (pageName === "timelines") {
         return (
            <div className="ht-timeline-container-main container col-md-12 mt-4 mb-4">
               <TimelinesComponent />
            </div>
         );
      }
   }

   render() {
      const { tour } = this.props;
      const { pageName } = this.state;
      return (
         <div className=" card shadow ht-style-card">
            <div className="ht-info-tour-schedule col-md-12 ht-d-flex-row-start-start">
               <div className="ht-title-tour col-md-6">
                  <h5>
                     <i className="fas fa-umbrella-beach"></i>
                     {` `}
                     {tour.titleTour}
                  </h5>
                  <h6>
                     <i className="far fa-calendar-check"></i>
                     {` `}
                     <span className="ht-no-strong">Thời gian khởi hành: </span>
                     {moment(tour.departureDay).format("hh:mm A DD/MM/YYYY")}
                  </h6>
                  <i className="fas fa-money-bill"></i> Giá của 1 khách (người
                  lớn):
                  <NumberFormat
                     className="ht-strong"
                     value={tour.price}
                     displayType={"text"}
                     thousandSeparator={true}
                     prefix={` `}
                     suffix={"VNĐ"}
                  />
               </div>
               <p className="col-md-6">
                  <i className="fas fa-quote-left"></i> Mô tả tour lữ hành:{" "}
                  {tour.describe}
               </p>
            </div>
            <div className="container col-md-12">
               <div className="box-shadow p-3 ht-d-flex-row-space-between-start bdr-2 bgr-gray pt-2">
                  <Tooltip title="Quay về quản lý danh sách tour">
                     <Link to="/admin/tour">
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           type="default"
                        >
                           <i className="fas fa-arrow-left mr-1"></i> Về danh
                           sách Tour
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Lịch trình">
                     <Link to={`/admin/schedule-detail/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={
                              pageName === "schedule-detail" ? true : false
                           }
                           type="default"
                        >
                           Schedule
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa timeline">
                     <Link to={`/admin/timelines/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "timelines" ? true : false}
                           type="default"
                        >
                           Timelines
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Ghi chú">
                     <Link to={`/admin/note/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "note" ? true : false}
                           type="default"
                        >
                           Note
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Chính sách và điều khoản">
                     <Link to={`/admin/policy/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "policy" ? true : false}
                           type="default"
                        >
                           Policy
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Chi tiết Giá">
                     <Link to={`/admin/detail-price/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "detail-price" ? true : false}
                           type="default"
                        >
                           Detail Price
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Liên hệ">
                     <Link to={`/admin/contact/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "contact" ? true : false}
                           type="default"
                        >
                           Contact
                        </Button>
                     </Link>
                  </Tooltip>

                  <Tooltip title="Lưu lịch trình TOUR">
                     <Button type="primary" onClick={this.onSave}>
                        <i className="far fa-save mr-2"></i> {` `}
                        {this.getNameSaveBtn()}
                     </Button>
                  </Tooltip>
               </div>
            </div>

            {this.renderContentDetail()}

            <div className="container col-md-12">
               <div className="box-shadow p-3 ht-d-flex-row-space-between-start bdr-2 bgr-gray pt-2">
                  <Tooltip title="Quay về quản lý danh sách tour">
                     <Link to="/admin/tour">
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           type="default"
                        >
                           <i className="fas fa-arrow-left mr-1"></i> Về danh
                           sách Tour
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Lịch trình">
                     <Link to={`/admin/schedule-detail/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={
                              pageName === "schedule-detail" ? true : false
                           }
                           type="default"
                        >
                           Schedule
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa timeline">
                     <Link to={`/admin/timelines/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "timelines" ? true : false}
                           type="default"
                        >
                           Timelines
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Ghi chú">
                     <Link to={`/admin/note/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "note" ? true : false}
                           type="default"
                        >
                           Note
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Chính sách và điều khoản">
                     <Link to={`/admin/policy/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "policy" ? true : false}
                           type="default"
                        >
                           Policy
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Chi tiết Giá">
                     <Link to={`/admin/detail-price/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "detail-price" ? true : false}
                           type="default"
                        >
                           Detail Price
                        </Button>
                     </Link>
                  </Tooltip>
                  <Tooltip title="Sửa Liên hệ">
                     <Link to={`/admin/contact/${tour.idTour}`}>
                        <Button
                           //note, policy, detail-price, contact, schedule-detail, timelines
                           disabled={pageName === "contact" ? true : false}
                           type="default"
                        >
                           Contact
                        </Button>
                     </Link>
                  </Tooltip>

                  <Tooltip title="Lưu lịch trình TOUR">
                     <Button type="primary" onClick={this.onSave}>
                        <i className="far fa-save mr-2"></i> {` `}
                        {this.getNameSaveBtn()}
                     </Button>
                  </Tooltip>
               </div>
            </div>
         </div>
      );
   }
}

EditorContainer.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchPatchScheduleRequest: PropTypes.func
   }),
   scheduleByIdTour: PropTypes.object,
   tour: PropTypes.object
};

const mapStateToProps = state => {
   return {
      tour: state.tour.tourById,
      scheduleByIdTour: state.schedule.scheduleByIdTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch),
      scheduleAllActions: bindActionCreators(scheduleActions, dispatch)
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);
