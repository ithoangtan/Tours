import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../../../actions/tour.actions";
import * as scheduleActions from "../../../../actions/schedule.actions";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class EditorContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         id: props.id,
         content: props.content,
         handleWYSIWYGInput: props.handleWYSIWYGInput,
         editor: ClassicEditor,
         scheduleTour: {},
         tour: {}
      };
   }

   componentDidMount() {
      // const { record } = this.props.location.state;
      if (this.props.match !== null) {
         const { idTour } = this.props.match.params;

         //Load data tour by Id tour
         const { tourAllActions } = this.props;
         const { fetchTourByIdRequest } = tourAllActions;
         fetchTourByIdRequest(idTour);

         //Load data schedule by id tour
         const { scheduleAllActions } = this.props;
         const { fetchScheduleByIdTourRequest } = scheduleAllActions;
         fetchScheduleByIdTourRequest(idTour);
      }//end if
   }

   onChange = (event, editor) => {
      const data = editor.getData();
      //this.state.handleWYSIWYGInput(this.props.id, data);
      console.log({ event, editor, data });
      console.log(this.state.content);
   };

   render() {
      return (
         <div className="container-fluid card shadow ht-style-card">
            <div className="ht-card-title-schedule">
               <h5>Title Tour</h5>
            </div>
            <div className="Editor-content ht-style-editor">
               <CKEditor
                  minHeight={"500px"}
                  editor={this.state.editor}
                  data={this.state.content}
                  config={{
                     // ckfinder: {
                     //    // eslint-disable-next-line max-len
                     //    uploadUrl:
                     //       "https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json"
                     // },
                     cloudServices: {
                        tokenUrl:
                           "https://43967.cke-cs.com/token/dev/PLTDrOf3tlrbQxO14HqGZdCdWnqVWTV991y772AEWgYmoonLkUTIHZbiiEa2",
                        uploadUrl: "https://43967.cke-cs.com/easyimage/upload/"
                     }
                  }}
                  // extraPlugins={"easyimage"}
                  onInit={editor => {
                     // You can store the "editor" and use when it is needed.
                     console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => this.onChange(event, editor)}
                  onBlur={editor => {
                     console.log("Blur.", editor);
                  }}
                  onFocus={editor => {
                     console.log("Focus.", editor);
                  }}
               />
            </div>
         </div>
      );
   }
}

EditorContainer.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchTourByIdRequest: PropTypes.func,
      fetchScheduleByIdTourRequest: PropTypes.func
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
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);
