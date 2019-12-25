import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "../../_actions/tour.actions";
import * as scheduleActions from "../../_actions/schedule.actions";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Button } from "antd";

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
         previewsInData: true
      };
   }

   onChange = (event, editor) => {
      const data = editor.getData();
      //this.state.handleWYSIWYGInput(this.props.id, data);
      this.setState({ content: data });
      // console.log(this.state.content);
   };

   onChangeDate(value, dateString) {}

   onOk(value) {}

   componentWillReceiveProps() {
      this.props.loaded();
   }

   onSave = () => {
      const schedule = {
         data: this.state.content,
         idTour: this.state.tour.idTour
      };
      //Save data schedule by id tour
      const { scheduleAllActions } = this.props;
      const { fetchPatchScheduleRequest } = scheduleAllActions;
      fetchPatchScheduleRequest(schedule);
   };

   loadData = async scheduleByIdTour => {
      return scheduleByIdTour.data;
   };

   renderCkEditor(scheduleByIdTour) {
      return (
         <CKEditor
            editor={this.state.editor}
            data={scheduleByIdTour.data}
            config={{
               // ckfinder: {
               //    // eslint-disable-next-line max-len
               //    uploadUrl:
               //       "https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json"
               // },
               cloudServices: {
                  // tokenUrl: process.env.TOKEN_URL_CKEDITOR,
                  // uploadUrl: process.env.UPLOAD_URL_CKEDITOR
                  tokenUrl:
                     "https://43967.cke-cs.com/token/dev/l7cxsIIm0SUdMOgNLARTMvdnWOZonc1bVbB741He69AfWvRSQd1o9NKKwwCo",
                  uploadUrl: "https://43967.cke-cs.com/easyimage/upload/"
               },
               mediaEmbed: {
                  previewsInData: true
               }
            }}
            // extraPlugins={"easyimage"}
            onInit={editor => {
               // You can store the "editor" and use when it is needed.
               this.setState({ scheduleByIdTour });

               console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => this.onChange(event, editor)}
            onBlur={editor => {
               // console.log("Blur.", editor);
            }}
            onFocus={editor => {
               // console.log("Focus.", editor);
            }}
         />
      );
   }

   render() {
      const { tour, scheduleByIdTour } = this.props;
      return (
         <div className="container-fluid card shadow ht-style-card">
            <div className="ht-card-title-schedule">
               <h6>Schedule for Tour: {tour.titleTour}</h6>
               <div>
                  <h6>Departure Time: {tour.departureDay}</h6>
               </div>
               <Button type="primary" onClick={this.onSave}>
                  Save Schedule
               </Button>
            </div>
            <div className="ht-describe-wrapper">
               <p> Describe: {tour.describe}</p>
            </div>
            <div className="Editor-content ht-style-editor">
               {this.renderCkEditor(scheduleByIdTour)}
            </div>
            <Button
               type="primary"
               onClick={this.onSave}
               className="ht-button-save-schedule"
            >
               Save Schedule
            </Button>
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
