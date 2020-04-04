import React, { Component } from "react";

import { Upload, Icon, message } from "antd";

import { API_ENDPOINT } from "../../_constants/index.constants";

function getBase64(img, callback) {
   const reader = new FileReader();
   reader.addEventListener("load", () => callback(reader.result));
   reader.readAsDataURL(img);
}

function beforeUpload(file) {
   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
   if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
   }
   const isLt2M = file.size / 1024 / 1024 < 2;
   if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
   }
   return isJpgOrPng && isLt2M;
}
export default class AvatarChange extends Component {
   state = {
      imageUrl: "",
      loading: false,
      action: `${API_ENDPOINT}/image`,
   };

   componentWillMount() {
      this.setState({ imageUrl: this.props.imageAuthorInfo });
   }

   handleChange = (info) => {
      if (info.file.status === "uploading") {
         this.setState({ loading: true });
         return;
      }
      if (info.file.status === "done") {
         // Get this url from response in real world.
         getBase64(info.file.originFileObj, (imageUrl) =>
            this.setState({
               imageUrl,
               loading: false,
            })
         );
      }
   };

   handleChange = (info) => {
      if (info.file.status === "uploading") {
         this.setState({ loading: true });
         return;
      }
      if (info.file.status === "done") {
         // Get this url from response in real world.
         getBase64(info.file.originFileObj, (imageUrl) =>
            this.setState({
               imageUrl,
               loading: false,
            })
         );
      }
   };

   actionUploadImg = () => {
      const { idConfig } = this.props;
      const { action } = this.state;
      const urlAction = `${action}?idConfig=${idConfig}`;
      message.loading("Avatar đang được upload", 0.5, () => {
         message.success("OK! Avatar đã được upload");
      });
      return urlAction;
   };

   render() {
      const uploadButton = (
         <div className="ht-image-square-200 ht-d-flex-col-center-center">
            <Icon type={this.state.loading ? "loading" : "plus"} />
            <div className="ant-upload-text">Upload</div>
         </div>
      );
      const { imageUrl } = this.state;
      return (
         <Upload
            name="imgUploader"
            listType="picture-card"
            showUploadList={false}
            action={this.actionUploadImg}
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
         >
            {imageUrl ? (
               <img
                  src={imageUrl}
                  alt="avatar"
                  className="ht-image-square-200"
               />
            ) : (
               uploadButton
            )}
         </Upload>
      );
   }
}
