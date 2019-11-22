import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

import { API_ENDPOINT } from "../../constants/index.constants";

import { Upload, Icon, Modal } from "antd";

function getBase64(file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
   });
}

class TableGallery extends Component {
   state = {
      previewVisible: false,
      previewImage: "",
      action: `${API_ENDPOINT}/tour-img`,
      fileList: [
         {
            uid: "-1",
            name: "image.png",
            status: "done",
            url: "https://source.unsplash.com/WLUHO9A_xik/1600x900"
         }
      ]
   };

   handleCancel = () => this.setState({ previewVisible: false });

   handlePreview = async file => {
      if (!file.url && !file.preview) {
         file.preview = await getBase64(file.originFileObj);
      }

      this.setState({
         previewImage: file.url || file.preview,
         previewVisible: true
      });
   };

   handleChange = ({ fileList }) => this.setState({ fileList });

   actionUpload = () => {
      const { record } = this.props;
      const { action } = this.state;
      const actionUpload = `${action}?idTour=${record.idTour}`;
   };

   render() {
      const { record } = this.props;
      const { previewVisible, previewImage, fileList } = this.state;
      // const actionUpload = `${action}?idTour=${record.idTour}`;
      const uploadButton = (
         <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
         </div>
      );
      return (
         <div>
            <p>Describe: {record.describe}</p>
            <div className="clearfix">
               <Upload
                  action={this.actionUpload}
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
               >
                  {fileList.length >= 8 ? null : uploadButton}
               </Upload>
               <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
               >
                  <img
                     alt="example"
                     style={{ width: "100%" }}
                     src={previewImage}
                  />
               </Modal>
            </div>
         </div>
      );
   }
}

TableGallery.propTypes = {
   tourAllActions: PropTypes.shape({
      fetchListImageTourRequest: PropTypes.func,
      fetchDeleteImageTourRequest: PropTypes.func,
      fetchCreateImageTourRequest: PropTypes.func
   }),
   listImageTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listImageTour: state.tour.listImageTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableGallery);
