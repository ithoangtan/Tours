import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Tag, Tooltip, Carousel, Pagination } from "antd";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";
import BlogRightContainer from "./blogRight.container";
import BlogNavigationContainer from "./blogNavigation.container";

export default class BlogContainer extends Component {
   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0
      });
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }

   render() {
      return (
         <section className="ftco-section mt-2">
            <div className="container">
               <BlogNavigationContainer />{" "}
               <div className="ht-blog-container-1">
                  <div className="col-md-8">
                     <Carousel autoplay dotPosition="right">
                        <div className="ht-item-post-full-main">
                           <img src="/images/blog-1.jpg" alt="not found" />
                           <div class="ht-item-post-full-main-info">
                              <div className="ht-tag-main">DU LỊCH SAPA</div>
                              <div className="ht-title">
                                 UPDATE BẢNG GIÁ VÉ THAM QUAN SAPA 25 ĐIỂM ĐẾN
                                 ĐẦY ĐỦ NHẤT 2020
                              </div>
                              <div className="ht-describe">
                                 Bỏ túi ngay bảng giá vé tham quan Sapa 25 điểm
                                 đến cập nhật mới nhất năm 2020 giúp bạn tha hồ
                                 vui chơi, khám phá Sapa. ...
                              </div>
                              <Link to="more" className="ht-btn-more">
                                 READ MORE
                              </Link>
                           </div>
                        </div>
                        <div className="ht-item-post-full-main">
                           <img src="/images/blog-1.jpg" alt="not found" />
                           <div class="ht-item-post-full-main-info">
                              <div className="ht-tag-main">DU LỊCH SAPA</div>
                              <div className="ht-title">
                                 UPDATE BẢNG GIÁ VÉ THAM QUAN SAPA 25 ĐIỂM ĐẾN
                                 ĐẦY ĐỦ NHẤT 2020
                              </div>
                              <div className="ht-describe">
                                 Bỏ túi ngay bảng giá vé tham quan Sapa 25 điểm
                                 đến cập nhật mới nhất năm 2020 giúp bạn tha hồ
                                 vui chơi, khám phá Sapa. ...
                              </div>
                              <Link to="more" className="ht-btn-more">
                                 READ MORE
                              </Link>
                           </div>
                        </div>
                     </Carousel>
                  </div>
                  <div className="col-md-4 ht-item-post-full-right">
                     <div className="ht-item-post-full ht-mb-special">
                        <img src="/images/blog-2.jpg" alt="not found" />
                        <div class="ht-item-post-full-info">
                           <div className="ht-tag-main">DU LỊCH VIỆT NAM</div>
                           <div className="ht-title">
                              TRUY TÌM 5 CHIẾC GIƯỜNG BALI SỐNG ẢO THẦN THÁNH
                              KHẮP VIỆT
                           </div>
                           <Link to="more" className="ht-btn-more">
                              READ MORE
                           </Link>
                        </div>
                     </div>
                     <div className="ht-item-post-full">
                        <img src="/images/blog-3.jpg" alt="not found" />
                        <div class="ht-item-post-full-info">
                           <div className="ht-tag-main">DU LỊCH QUỐC TẾ</div>
                           <div className="ht-title">
                              Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc nhất
                              Maldives?
                           </div>
                           <Link to="more" className="ht-btn-more">
                              READ MORE
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row ht-blog-container-2">
                  <div className="ht-blog-left col-md-8">
                     <div className="col-md">
                        <div className="ht-divide-special"></div>
                     </div>
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">KHUYẾN MÃI</div>
                           <div className="ht-describe">
                              Những khuyến mại hấp dẫn
                           </div>
                        </div>
                     </div>
                     <div className="content d-flex">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>{" "}
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md ht-divide">
                        <div className="ht-divide-special-1"></div>
                     </div>
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">ĐIỂM ĐẾN</div>
                           <div className="ht-describe">
                              Những địa danh không thể bỏ qua khi đi du lịch
                           </div>
                        </div>
                     </div>
                     <div className="content d-flex ht-posts-container">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>{" "}
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md ht-divide">
                        <div className="ht-divide-special-2"></div>
                     </div>
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">ẨM THỰC</div>
                           <div className="ht-describe">
                              Những chuyến đi không thể bỏ qua ẩm thực tuyệt vời
                           </div>
                        </div>
                     </div>
                     <div className="content d-flex ht-posts-container">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>{" "}
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md ht-divide">
                        <div className="ht-divide-special-3"></div>
                     </div>
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">MẸO DU LỊCH</div>
                           <div className="ht-describe">
                              Có trong tay mẹo hay không lo du lịch không thuận
                              lợi vui vẻ
                           </div>
                        </div>
                     </div>
                     <div className="content d-flex ht-posts-container">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>{" "}
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                           <div className="blog-entry justify-content-end">
                              <Link
                                 to="blog-single"
                                 className="block-20 ht-blog-image"
                                 style={{
                                    backgroundImage: 'url("images/image_1.jpg")'
                                 }}
                              >
                                 <div className="ht-over-image"></div>
                              </Link>

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
                                 title={`Xem nhận xét`}
                                 placement="top"
                                 className="ht-post-comment-container"
                              >
                                 <Link className="ht-no-p-m">
                                    <i className="far fa-eye"> 1000</i>
                                    <i className="far fa-comment"> 100 </i>
                                 </Link>
                              </Tooltip>
                              <div className="text mt-3 float-right d-block">
                                 <Tooltip
                                    title={`Tính thời gian`}
                                    placement="top"
                                 >
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
                                    <Link to="blog-single">
                                       Why Lead Generation is Key for Business
                                       Growth
                                    </Link>
                                 </h3>
                                 <div className="ht-post-describe">
                                    Why Lead Generation is Key for Business
                                    GrowthWhy Lead Generation is Key for
                                    Business GrowthWhy Lead Generation is Key
                                    for Business Growth
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <Pagination
                        className="ht-d-flex-center-center mb-5"
                        total={85}
                        showTotal={(total, range) =>
                           `${range[0]}-${range[1]} of ${total} items`
                        }
                        pageSize={20}
                        defaultCurrent={1}
                     />
                  </div>
                  <div className="ht-blog-right col-md-4">
                     <BlogRightContainer />
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
