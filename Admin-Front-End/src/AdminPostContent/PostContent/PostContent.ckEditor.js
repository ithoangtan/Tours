import React, { Component } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as postActions from "../../_actions/post.actions";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Button, Tooltip } from "antd";

import moment from "moment";

require("dotenv").config();

class PostContentEditor extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: props.id,
         content: props.content,
         handleWYSIWYGInput: props.handleWYSIWYGInput,
         editor: ClassicEditor,
         post: null,
         previewsInData: true,
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

   componentWillMount() {
      const regex = /.*admin\/(.*?)\/.*/gu;
      const str = window.location.href;
      const subst = `$1`;
      // The substituted value will be contained in the result variable
      const resultPage = str.replace(regex, subst);
      this.setState({
         pageName: resultPage,
      });
   }

   componentWillReceiveProps() {
      this.props.loaded();
   }

   onSave = () => {
      let dataContent = {};

      dataContent = {
         idPost: this.props.post.idPost,
         titlePost: this.props.post.titlePost,
         contentPost: this.state.content,
      };

      //Save data post by id Post
      const { postAllActions } = this.props;
      const { fetchPatchPostRequest } = postAllActions;
      fetchPatchPostRequest(dataContent);
   };

   renderCkEditor() {
      const { post } = this.props;
      if (post.contentPost !== null && post.contentPost !== undefined) {
         return (
            <CKEditor
               editor={this.state.editor}
               data={post.contentPost}
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
                     previewsInData: true,
                  },
               }}
               // extraPlugins={"easyimage"}
               onInit={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  this.setState({ post });

                  console.log("Editor is ready to use!", editor);
               }}
               onChange={(event, editor) => this.onChange(event, editor)}
               onBlur={(editor) => {
                  // console.log("Blur.", editor);
               }}
               onFocus={(editor) => {
                  // console.log("Focus.", editor);
               }}
            />
         );
      } else return <></>;
   }

   render() {
      const { post } = this.props;
      return (
         <div className=" card shadow ht-style-card">
            <div className="ht-info-tour-post col-md-12 ht-d-flex-row-start-start">
               <div className="ht-title-tour col-md-6">
                  <h5>
                     <i className="fas fa-blog"></i>
                     {` `}
                     {post.titlePost}
                  </h5>
                  <h6>
                     <i className="far fa-calendar-check"></i>
                     {` `}
                     <span className="ht-no-strong">
                        Thời gian tạo Bài viết:{" "}
                     </span>
                     {moment(post.dateAdded).format("hh:mm A DD/MM/YYYY")}
                  </h6>
               </div>
               <p className="col-md-6">
                  <i className="fas fa-quote-left"></i>{" "}
                  <strong>Mô tả Bài Viết: </strong>
                  {post.describe}
               </p>
            </div>
            <div className="container col-md-12">
               <div className="box-shadow p-3 ht-d-flex-row-space-between-start bdr-2 bgr-gray pt-2">
                  <Tooltip title="Quay về quản lý danh sách Bài Viết">
                     <Link to="/admin/posts">
                        <Button
                           //note, policy, detail-price, contact, post-detail, timelines
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
                        Lưu Nội dung Bài viết
                     </Button>
                  </Tooltip>
               </div>
            </div>

            <div className="Editor-content ht-style-editor">
               {this.renderCkEditor()}
            </div>

            <div className="container col-md-12">
               <div className="box-shadow p-3 ht-d-flex-row-space-between-start bdr-2 bgr-gray pt-2">
                  <Tooltip title="Quay về quản lý danh sách Bài Viết">
                     <Link to="/admin/posts">
                        <Button
                           //note, policy, detail-price, contact, post-detail, timelines
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
                        Lưu Nội dung Bài viết
                     </Button>
                  </Tooltip>
               </div>
            </div>
         </div>
      );
   }
}

PostContentEditor.propTypes = {
   classes: PropTypes.object,
   postAllActions: PropTypes.shape({
      fetchPatchPostRequest: PropTypes.func,
   }),
   post: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
   return {
      postAllActions: bindActionCreators(postActions, dispatch),
   };
};
export default connect(null, mapDispatchToProps)(PostContentEditor);
