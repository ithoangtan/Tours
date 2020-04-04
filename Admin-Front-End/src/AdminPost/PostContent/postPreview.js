import React, { Component } from "react";

import { Tag, Tooltip } from "antd";
import {
   API_ENDPOINT,
   DEFAULT_IMAGE_URL,
   XHTML_LOADING,
} from "../../_constants/index.constants";

import moment from "moment";

class PostPreviewContainer extends Component {
   state = {
      rowsDescribe: 2,
      size: "default",
   };

   onChange = (rowsDescribe) => {
      this.setState({ rowsDescribe });
   };

   componentWillMount() {
      this.setState({ size: window.innerWidth < 768.01 ? "small" : "default" });
   }

   renderTags() {
      const { post } = this.props;
      let result = <></>;
      let tags = [];
      if (post?.tags?.length > 0 && post.tags !== "undefined") {
         tags = JSON.parse(post.tags);
         result = tags.map((tag, index) => {
            return (
               <Tag
                  key={index}
                  color={tag.color ? tag.color : "#e6fffb"}
                  className="mt-1"
               >
                  {tag.name}
               </Tag>
            );
         });
      }
      return result;
   }

   render() {
      const { post, listImageByIdPost } = this.props;

      if (listImageByIdPost?.length === 0) return XHTML_LOADING;

      const day = moment(post.dateAdded).format("DD");
      const month = moment(post.dateAdded).format("MMMM");
      const year = moment(post.dateAdded).format("YYYY");

      return (
         <div className="col-12 ftco-animate card box-shadow p-2">
            <div className="blog-entry justify-content-end ">
               <a href="blog-single" className="block-20 ht-blog-image">
                  <div className="ht-over-image"></div>
                  <img
                     className="ht-img-post ht-d-flex-center-center"
                     src={
                        listImageByIdPost.length > 0
                           ? API_ENDPOINT + listImageByIdPost[0].url
                           : API_ENDPOINT + DEFAULT_IMAGE_URL
                     }
                     alt="no iamge"
                  />
               </a>
               <p className="ht-post-tag-container ht-no-p-m">
                  {/* Random color á mà, cái này sẽ cho admin cấu hình color tag
                           ví dụ như: Thực phẩm: đỏ, biển: màu lam,.... 
                           Tham khảo ở https://ant.design/docs/spec/colors*/}
                  {this.renderTags()}
               </p>
               <Tooltip
                  title={`Lượt xem và Nhận xét`}
                  placement="top"
                  className="ht-post-comment-container"
               >
                  <a className="ht-no-p-m" href="ithoangtan">
                     <i className="far fa-eye mb-1"> {post.views}</i>
                     <i className="far fa-thumbs-up"> {post.vote} </i>
                  </a>
               </Tooltip>
               <div className="text mt-3 float-right d-block">
                  <Tooltip title={`Tính thời gian`} placement="top">
                     <div className="d-flex align-items-center mb-5 topp">
                        <div className="one">
                           <span className="day">{day}</span>
                        </div>
                        <div className="two">
                           <span className="yr">{year}</span>
                           <span className="mos">{month}</span>
                        </div>
                     </div>
                  </Tooltip>
                  <h3 className="heading">
                     <a href="blog-single">{post.titlePost}</a>
                  </h3>
                  <div className="ht-post-describe">{post.describe}</div>
               </div>
            </div>
         </div>
      );
   }
}

export default PostPreviewContainer;
