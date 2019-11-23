import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourImageActions from "../../actions/tourImage.actions";
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
   constructor(props) {
      super(props);
      this.state = {
         previewVisible: false,
         previewImage: "",
         action: `${API_ENDPOINT}/images`,
         fileList: []
      };
   }

   componentDidMount() {
      const { listImage, record } = this.props;
      const listImageFilterIdTour = listImage.filter(
         image => image.idTour === record.idTour
      );

      this.setState({ fileList: listImageFilterIdTour });
      // const { tourImageAllActions, record } = this.props;
      // const { fetchListTourImageRequest } = tourImageAllActions;
      // fetchListTourImageRequest(record.idTour);
   }

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
                  fileList={fileList.map(image => ({
                     ...image,
                     uid: image.idImage
                  }))}
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
   tourImageAllActions: PropTypes.shape({
      // fetchListTourImageRequest: PropTypes.func,
      fetchDeleteTourImageRequest: PropTypes.func,
      fetchCreateTourImageRequest: PropTypes.func
   }),
   listImageTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listImageTour: state.tourImage.listImageTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourImageAllActions: bindActionCreators(tourImageActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableGallery);
