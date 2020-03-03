import React, { Component } from "react";

import { Link } from "react-router-dom";

import SearchEngineContainer from "../SearchEngine/searchEngine.container";

import { Statistic, Button, Tooltip, Tag } from "antd";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 3; // Moment is also OK

export default class HeaderContainer extends Component {
   constructor(params) {
      super(params);
      this.state = {
         size: 0
      };
   }

   componentDidMount() {
      this.setState({
         size: window.innerWidth > 767.98 ? "large" : "default"
      });
   }

   render() {
      const { size } = this.state;
      return (
         <div className="ht-header">
            <div
               id="carousel-example-generic"
               className="carousel slide"
               data-ride="carousel"
            >
               <ol className="carousel-indicators">
                  <li
                     data-target="#carousel-example-generic"
                     data-slide-to={0}
                     className="active"
                  />
                  <li
                     data-target="#carousel-example-generic"
                     data-slide-to={1}
                  />
                  <li
                     data-target="#carousel-example-generic"
                     data-slide-to={2}
                  />
               </ol>
               <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                     <div
                        className="hero-wrap js-fullheight"
                        style={{
                           backgroundImage: 'url("images/bg_1.jpg")'
                        }}
                        data-stellar-background-ratio="0.5"
                     >
                        <div className="overlay" />
                        <div className="container">
                           <div
                              className="row no-gutters slider-text js-fullheight align-items-top justify-content-end"
                              data-scrollax-parent="true"
                           >
                              <div
                                 className="col-md-12 ftco-animate mt-5"
                                 data-scrollax=" properties: { translateY: '70%' }"
                              >
                                 <h1
                                    className="mb-4 mt-5"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    Các tour HOT phải hiển thị ở đây!!! Ở cấu
                                    hình cơ bản cho phép chọn hiển thị
                                 </h1>

                                 <p
                                    className="mb-1 ht-header-descript"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    Mô tả tour Mô tả tour Mô tả tour Mô tả tour
                                    Mô tả tour Mô tả tour Mô tả tour Mô tả tour
                                    , ...
                                    <Link to="id=?" className="ht-slider-link">
                                       xem thêm!
                                    </Link>
                                 </p>
                                 <div className="ht-display-flex-space-between-center ht-pd-t-2">
                                    <p className="ht-p-500 ht-no-p-m">
                                       Giá từ: 5.000.000.đ
                                    </p>
                                    <div className="ht-header-sale ht-display-flex-center-center">
                                       <p className="ht-p-500">
                                          <i className="fas fa-piggy-bank"></i>{" "}
                                          {size === "large" ? "Giảm ngay " : ""}
                                          1.000.000.đ
                                       </p>
                                    </div>
                                 </div>
                                 <div className="ht-display-flex-space-between-center ht-pd-t-1">
                                    <div className="ht-countdown-container ht-display-flex-center-center">
                                       <Countdown
                                          className="ht-countdown"
                                          value={deadline}
                                          format="D Ngày H Giờ m Phút s Giây"
                                       />
                                    </div>

                                    <Tooltip
                                       placement="bottom"
                                       title={
                                          <p>
                                             <i className="fas fa-couch"></i>{" "}
                                             còn 5 chỗ
                                          </p>
                                       }
                                    >
                                       <Button type="primary" size={size}>
                                          ĐẶT NGAY
                                       </Button>
                                    </Tooltip>
                                 </div>
                                 <div className="ht-header-tag-container ht-display-flex-start-center ht-mr-t-3">
                                    <Tag color="#f50">#f50 Tag gì đây</Tag>
                                    <Tag color="#2db7f5">
                                       #2db7f5 f50 Tag gì đây
                                    </Tag>
                                    <Tag color="#87d068">
                                       #87d068 f50 Tag gì đây
                                    </Tag>
                                    <Tag color="#108ee9">
                                       #108ee9 f50 Tag gì đây
                                    </Tag>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div
                        className="hero-wrap js-fullheight"
                        style={{
                           backgroundImage: 'url("images/bg_1.jpg")'
                        }}
                        data-stellar-background-ratio="0.5"
                     >
                        <div className="overlay" />
                        <div className="container">
                           <div
                              className="row no-gutters slider-text js-fullheight align-items-top justify-content-end"
                              data-scrollax-parent="true"
                           >
                              <div
                                 className="col-md-12 ftco-animate mt-5"
                                 data-scrollax=" properties: { translateY: '70%' }"
                              >
                                 <h1
                                    className="mb-4 mt-5"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    Các tour HOT phải hiển thị ở đây!!! Ở cấu
                                    hình cơ bản cho phép chọn hiển thị
                                 </h1>

                                 <p
                                    className="mb-1 ht-header-descript"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    Mô tả tour Mô tả tour Mô tả tour Mô tả tour
                                    Mô tả tour Mô tả tour Mô tả tour Mô tả tour
                                    , ...
                                    <Link to="id=?" className="ht-slider-link">
                                       xem thêm!
                                    </Link>
                                 </p>
                                 <div className="ht-display-flex-space-between-center ht-pd-t-2">
                                    <p className="ht-p-500 ht-no-p-m">
                                       Giá từ: 5.000.000.đ
                                    </p>
                                    <div className="ht-header-sale ht-display-flex-center-center">
                                       <p className="ht-p-500">
                                          <i className="fas fa-piggy-bank"></i>{" "}
                                          {size === "large" ? "Giảm ngay " : ""}
                                          1.000.000.đ
                                       </p>
                                    </div>
                                 </div>
                                 <div className="ht-display-flex-space-between-center ht-pd-t-1">
                                    <div className="ht-countdown-container ht-display-flex-center-center">
                                       <Countdown
                                          className="ht-countdown"
                                          value={deadline}
                                          format="D Ngày H Giờ m Phút s Giây"
                                       />
                                    </div>

                                    <Tooltip
                                       placement="bottom"
                                       title={
                                          <p className="ht-no-p-m">
                                             <i className="fas fa-couch"></i>{" "}
                                             còn 5 chỗ
                                          </p>
                                       }
                                    >
                                       <Button type="primary" size={size}>
                                          ĐẶT NGAY
                                       </Button>
                                    </Tooltip>
                                 </div>
                                 <div className="ht-header-tag-container ht-display-flex-start-center ht-mr-t-3">
                                    <Tag color="#f50">#f50 Tag gì đây</Tag>
                                    <Tag color="#2db7f5">
                                       #2db7f5 f50 Tag gì đây
                                    </Tag>
                                    <Tag color="#87d068">
                                       #87d068 f50 Tag gì đây
                                    </Tag>
                                    <Tag color="#108ee9">
                                       #108ee9 f50 Tag gì đây
                                    </Tag>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a
                  className="carousel-control-prev area-hidden-left ht-header-slideshow"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="prev"
               >
                  <span
                     className="carousel-control-prev-icon"
                     aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
               </a>
               <a
                  className="carousel-control-next area-hidden-right ht-header-slideshow"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="next"
               >
                  <span
                     className="carousel-control-next-icon"
                     aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
               </a>
            </div>
            <SearchEngineContainer />
         </div>
      );
   }
}
