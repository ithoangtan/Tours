import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourImageActions from "../../_actions/image.actions";
import { API_ENDPOINT } from "../../_constants/index.constants";

import { Upload, Icon, Modal, message } from "antd";

function getBase64(file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
   });
}

class TableGallery extends Component {
   constructor(props) {
      super(props);
      this.state = {
         previewVisible: false,
         previewImage: "",
         action: `${API_ENDPOINT}/image`,
         fileList: []
      };
   }

   componentDidMount() {
      const { listImage, record } = this.props;
      const listImageFilterIdTour = listImage
         .filter(image => image.idTour === record.idTour)
         .map(image => ({
            ...image,
            uid: image.idImage
         }));
      this.setState({ fileList: listImageFilterIdTour });
   }

   handleCancel = () => this.setState({ previewVisible: false });

   beforeUpload = file => {
      const isJpgOrPng =
         file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
         message.error("You can only upload JPG/PNG file!");
      }
      return isJpgOrPng;
   };

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

   actionUpload = file => {
      const { record } = this.props;
      const { action } = this.state;
      /**
       * If you return, action will call again
       * */
      const actionUpload = `${action}?idTour=${record.idTour}`;

      const newListImage = [...this.state.fileList];
      this.setState({
         fileList: newListImage
      });

      return (
         message.loading(`${file.name} is uploading.....`, 0.6), actionUpload
      );
   };

   onRemove = file => {
      const { tourImageAllActions } = this.props;
      const { fetchDeleteTourImageRequest } = tourImageAllActions;
      fetchDeleteTourImageRequest(file);
      message.warn(`${file.idImage}, ${file.name} deleted!`);
   };

   render() {
      const { record } = this.props;

      const { previewVisible, previewImage, fileList } = this.state;

      const uploadButton = (
         <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
         </div>
      );

      return (
         <div>
            <Link
               className="button btn btn-primary ht-mb-1 ht-float-left"
               type="primary"
               to={{
                  pathname: `/admin/schedule-detail/${record.idTour}`,
                  state: {
                     record: true
                  }
               }}
            >
               Go To Schedule
            </Link>
            <div className="clearfix">
               <Upload
                  name={"imgUploader"} //This is important similar backend name field
                  multiple={false}
                  action={this.actionUpload}
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                  beforeUpload={this.beforeUpload}
                  onRemove={this.onRemove}
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
   tourImageAllActions: PropTypes.shape({
      fetchDeleteTourImageRequest: PropTypes.func
   }),
   listImageTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listImageTour: state.image.listImageTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourImageAllActions: bindActionCreators(tourImageActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableGallery);
