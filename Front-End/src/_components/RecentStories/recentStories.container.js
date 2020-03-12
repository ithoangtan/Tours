import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Tag, Tooltip, Button } from "antd";

export default class RecentStoriesContainer extends Component {
   render() {
      return (
         <section className="ftco-section bg-light">
            <div className="container">
               <div className="row justify-content-center mb-2 pb-1 ht-more-container">
                  <Link className="ht-more" to="blog">
                     <Button type="dashed">Xem thêm...</Button>
                  </Link>
                  <div className="col-md-12 heading-section text-center mt-3">
                     <h2 className="mb-1">Cẩm nang du lịch</h2>
                     <p>Something! Câu nói hay về du lịch</p>
                  </div>
               </div>
               <div
                  id="recentStoriesCarousel"
                  className="carousel slide ftco-animate"
                  data-ride="carousel"
                  data-interval={4000}
               >
                  <div
                     className="carousel-inner row w-100 mx-auto"
                     role="listbox"
                  >
                     {/* item slide */}
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
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
                           <Tooltip title={`Xem nhận xét`} placement="top">
                              <Link className="ht-post-comment-container ht-no-p-m">
                                 <i className="fas fa-comment"> 100 </i>
                              </Link>
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
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
                           <Tooltip title={`Xem nhận xét`} placement="top">
                              <Link className="ht-post-comment-container ht-no-p-m">
                                 <i className="fas fa-comment"> 100 </i>
                              </Link>
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
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
                           <Tooltip title={`Xem nhận xét`} placement="top">
                              <Link className="ht-post-comment-container ht-no-p-m">
                                 <i className="fas fa-comment"> 100 </i>
                              </Link>
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
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
                           <Tooltip title={`Xem nhận xét`} placement="top">
                              <Link className="ht-post-comment-container ht-no-p-m">
                                 <i className="fas fa-comment"> 100 </i>
                              </Link>
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
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
                           <Tooltip title={`Xem nhận xét`} placement="top">
                              <Link className="ht-post-comment-container ht-no-p-m">
                                 <i className="fas fa-comment"> 100 </i>
                              </Link>
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
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
                           <Tooltip title={`Xem nhận xét`} placement="top">
                              <Link className="ht-post-comment-container ht-no-p-m">
                                 <i className="fas fa-comment"> 100 </i>
                              </Link>
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a
                     className="carousel-control-prev ht-w-70"
                     href="#recentStoriesCarousel"
                     role="button"
                     data-slide="prev"
                  >
                     <span
                        className="carousel-control-prev-icon ht-control-preview-icon"
                        aria-hidden="true"
                     />
                     {/* <span className="sr-only">Previous</span> */}
                  </a>
                  <a
                     className="carousel-control-next text-faded ht-w-70"
                     href="#recentStoriesCarousel"
                     role="button"
                     data-slide="next"
                  >
                     <span
                        className="carousel-control-next-icon ht-control-preview-icon"
                        aria-hidden="true"
                     />
                     {/* <span className="sr-only">Next</span> */}
                  </a>
               </div>
            </div>
         </section>
      );
   }
}
