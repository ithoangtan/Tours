import React, { Component } from "react";

import { Tag, Tooltip } from "antd";
import TourDetailImages from "./tourDetailImage";

export default class PostPreview extends Component {
   state = {
      rowsDescribe: 2,
      size: "default"
   };

   onChange = rowsDescribe => {
      this.setState({ rowsDescribe });
   };

   componentWillMount() {
      this.setState({ size: window.innerWidth < 768.01 ? "small" : "default" });
   }

   renderImage() {
      const { listImageTour } = this.props;
      let result = null;
      result = listImageTour.map((imageTour, index) => {
         return (
            <TourDetailImages
               {...this.props}
               srcImage={imageTour.url}
               key={index}
            />
         );
      });
      return result;
   }
   render() {
      return (
         <div className="col-12 ftco-animate card box-shadow p-2">
            <div className="blog-entry justify-content-end ">
               <a
                  href="blog-single"
                  className="block-20 ht-blog-image"
                  style={{
                     backgroundImage: 'url("/images/blog-1.jpg");'
                  }}
               >
                  <div className="ht-over-image"></div>
                  <img src="/images/blog-1.jpg" alt="no iamge" />
               </a>

               <p className="ht-post-tag-container ht-no-p-m">
                  {/* Random color á mà, cái này sẽ cho admin cấu hình color tag
                           ví dụ như: Thực phẩm: đỏ, biển: màu lam,.... 
                           Tham khảo ở https://ant.design/docs/spec/colors*/}
                  <Tag color={"#cf1322"}>tag one</Tag>
                  <Tag color={"#1890ff"}>tag two</Tag>
                  <Tag color={"#eb2f96"}>tag three</Tag>
                  <Tag color={"#389e0d"}>tag four</Tag>
                  <Tag color={"#faad14"}>tag five</Tag>
               </p>
               <Tooltip
                  title={`Lượt xem và Nhận xét`}
                  placement="top"
                  className="ht-post-comment-container"
               >
                  <a className="ht-no-p-m" href="ithoangtan">
                     <i className="far fa-eye mb-1"> 1000</i>
                     <i className="far fa-comment"> 100 </i>
                  </a>
               </Tooltip>
               <div className="text mt-3 float-right d-block">
                  <Tooltip title={`Tính thời gian`} placement="top">
                     <div className="d-flex align-items-center mb-5 topp">
                        <div className="one">
                           <span className="day">12</span>
                        </div>
                        <div className="two">
                           <span className="yr">2019</span>
                           <span className="mos">February</span>
                        </div>
                     </div>
                  </Tooltip>
                  <h3 className="heading">
                     <a href="blog-single">
                        Why Lead Generation is Key for Business Growth
                     </a>
                  </h3>
                  <div className="ht-post-describe">
                     Why Lead Generation is Key for Business GrowthWhy Lead
                     Generation is Key for Business GrowthWhy Lead Generation is
                     Key for Business Growth
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
