import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Tag, Tooltip, Pagination } from "antd";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";
import BlogRightContainer from "./blogRight.container";
import BlogNavigationContainer from "./blogNavigation.container";

export default class BlogCategoryContainer extends Component {
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
               <div className="row ht-blog-container-2">
                  <div className="ht-blog-left col-md-8">
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">{`category name`}</div>
                           <div className="ht-describe">
                              Miêu tả gì đó ở đây này, hahahahaha. bao nhiêu Kết
                              quả được tìm kiếm chẳng hạn
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
