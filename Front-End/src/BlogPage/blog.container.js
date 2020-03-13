import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Tag, Tooltip, Input, Carousel, Tabs, Pagination } from "antd";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

const { TabPane } = Tabs;
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
                     <Tabs defaultActiveKey="1">
                        <TabPane tab="Đọc nhiều" key="1">
                           <div className="ht-reads">
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </TabPane>
                        <TabPane tab="Bài mới" key="2">
                           <div className="ht-new">
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="ht-item-post-mini">
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div class="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc
                                       nhất Maldives?
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">13/03/2020</div>
                                       <div className="ht-view-vote">
                                          <i class="far fa-eye"></i> 1000{" "}
                                          {`    `}
                                          <Tooltip title={`${123} lượt vote`}>
                                             <i class="far fa-hand-point-up"></i>
                                             {` `}123
                                          </Tooltip>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </TabPane>
                     </Tabs>
                     <div className="ht-themes f-flex">
                        <div className="ht-title-mini ht-width-100">
                           Bạn quan tâm đến chủ đề gì?
                        </div>
                        <Tag
                           color="#fff2e8"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing
                        </Tag>
                        <Tag
                           color="#fff7e6"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing
                        </Tag>
                        <Tag
                           color="#ffccc7"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing
                        </Tag>
                        <Tag
                           color="#ffd8bf"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing
                        </Tag>
                        <Tag
                           color="#ffe7ba"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing
                        </Tag>
                        <Tag
                           color="#fffbe6"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing
                        </Tag>
                        <Tag
                           color="#feffe6"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing color
                        </Tag>
                        <Tag
                           color="#fcffe6"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing color
                        </Tag>
                        <Tag
                           color="#fff1b8"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing colorasdasdas
                        </Tag>
                        <Tag
                           color="#ffffb8"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing colorasdasdas
                        </Tag>
                        <Tag
                           color="#f4ffb8"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing colorasdasdas
                        </Tag>
                        <Tag
                           color="#f6ffed"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing colorasdasdas
                        </Tag>
                        <Tag
                           color="#e6fffb"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing color
                        </Tag>
                        <Tag
                           color="#e6f7ff"
                           style={{
                              color: "black",
                              border: "0.5px dotted rgba(0, 255, 187, 0.5)",
                              padding: "3px",
                              borderRadius: "3px"
                           }}
                        >
                           tag some thing asd ad s color
                        </Tag>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
