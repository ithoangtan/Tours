import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Tag, Tooltip, Input, Carousel } from "antd";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

const { Search } = Input;

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
               <div className="row ht-navigation-blog mb-2">
                  <nav className="navbar navbar-expand-lg navbar-light ht-width-100">
                     <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                     >
                        <span className="navbar-toggler-icon" />
                     </button>
                     <div
                        className="collapse navbar-collapse ht-d-flex-between-center"
                        id="navbarSupportedContent"
                     >
                        <ul className="navbar-nav mr-auto">
                           <li className="nav-item active">
                              <Link className="nav-link" href="#">
                                 Trang chủ{" "}
                                 <span className="sr-only">(current)</span>
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" href="#">
                                 Khuyến mãi
                              </Link>
                           </li>
                           <li className="nav-item dropdown">
                              <Link
                                 className="nav-link dropdown-toggle"
                                 href="#"
                                 id="navbarDropdown"
                                 role="button"
                                 data-toggle="dropdown"
                                 aria-haspopup="true"
                                 aria-expanded="false"
                              >
                                 Muôn màu
                              </Link>
                              <div
                                 className="dropdown-menu"
                                 aria-labelledby="navbarDropdown"
                              >
                                 <Link className="dropdown-item" href="#">
                                    Cảnh đẹp
                                 </Link>
                                 <Link className="dropdown-item" href="#">
                                    Khám phá
                                 </Link>
                                 <Link className="dropdown-item" href="#">
                                    Du lịch biển
                                 </Link>
                              </div>
                           </li>
                           <li className="nav-item dropdown">
                              <Link
                                 className="nav-link dropdown-toggle"
                                 href="#"
                                 id="navbarDropdown"
                                 role="button"
                                 data-toggle="dropdown"
                                 aria-haspopup="true"
                                 aria-expanded="false"
                              >
                                 Tâm linh - Lịch sử
                              </Link>
                              <div
                                 className="dropdown-menu"
                                 aria-labelledby="navbarDropdown"
                              >
                                 <Link className="dropdown-item" href="#">
                                    Di sản văn hóa
                                 </Link>
                                 <Link className="dropdown-item" href="#">
                                    Lễ hội - Sự kiện
                                 </Link>
                              </div>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" href="#">
                                 Điểm đến
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" href="#">
                                 Ẩm thực
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" href="#">
                                 Mẹo du lịch
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" href="#">
                                 Đặt tour
                              </Link>
                           </li>
                        </ul>
                        <Search
                           placeholder="input search text"
                           enterButton="Search"
                           size="default"
                           onSearch={value => console.log(value)}
                           style={{ width: "25%" }}
                        />
                     </div>
                  </nav>
               </div>
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
                  </div>
               </div>
               <div className="ht-blog-title">
                  <div className="ht-title">KHUYẾN MÃI</div>
                  <div className="ht-describe">Những khuyến mại hấp dẫn</div>
               </div>

               <div className="row ht-blog-container-2">
                  <div className="ht-blog-left d-flex">
                     <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
                              <div className="ht-post-describe">
                                 Why Lead Generation is Key for Business
                                 GrowthWhy Lead Generation is Key for Business
                                 GrowthWhy Lead Generation is Key for Business
                                 Growth
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
                              <div className="ht-post-describe">
                                 Why Lead Generation is Key for Business
                                 GrowthWhy Lead Generation is Key for Business
                                 GrowthWhy Lead Generation is Key for Business
                                 Growth
                              </div>
                           </div>
                        </div>
                     </div>{" "}
                     <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
                              <div className="ht-post-describe">
                                 Why Lead Generation is Key for Business
                                 GrowthWhy Lead Generation is Key for Business
                                 GrowthWhy Lead Generation is Key for Business
                                 Growth
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="ht-blog-right">
                     <div className="ht-view-new">dasd</div>
                     <div className="ht-themes">asdasd</div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
