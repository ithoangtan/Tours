import React, { Component } from "react";

import SearchEngineContainer from "../SearchEngine/searchEngine.container";

export default class HeaderContainer extends Component {
   showDrawer = () => {
      this.setState({
         visible: true
      });
   };

   onClose = () => {
      this.setState({
         visible: false
      });
   };

   render() {
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
                                 <h2
                                    className="mb-4 mt-5"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    Các tour HOT phải hiển thị ở đây!!!!!!!!!!!!
                                    Ở cấu hình cơ bản cho phép chọn hiển thị
                                    tour hot hay hiển thị banner Các tour HOT
                                    phải hiển thị ở đây!!!!!!!!!!!! Ở cấu hình
                                    cơ bản cho phép chọn hiển thị tour hot hay
                                    hiển thị bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị
                                    bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị
                                    bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị
                                    bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị
                                    bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị
                                    bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị
                                    bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị
                                    bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị
                                    bannerCác tour HOT phải hiển thị ở
                                    đây!!!!!!!!!!!! Ở cấu hình cơ bản cho phép
                                    chọn hiển thị tour hot hay hiển thị banner
                                 </h2>
                                 <p
                                    className="mb-1"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    Cuộc sống là một cuộc phiêu lưu đầy táo bạo
                                    hoặc không là gì cả. Hãy đến với chúng tôi
                                    để tận hưởng kỳ nghỉ tuyệt vời của bạn
                                 </p>
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
                                 <h2
                                    className="mb-4 mt-5"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    ĐẦU TƯ CHO DU LỊCH LÀ MỘT KHOẢN ĐẦU TƯ CHO
                                    BẢN THÂN
                                 </h2>
                                 <p
                                    className="mb-1"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    Cuộc sống là một cuộc phiêu lưu đầy táo bạo
                                    hoặc không là gì cả. Hãy đến với chúng tôi
                                    để tận hưởng kỳ nghỉ tuyệt vời của bạn
                                 </p>
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
                                 <h2
                                    className="mb-4 mt-5"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    ĐẦU TƯ CHO DU LỊCH LÀ MỘT KHOẢN ĐẦU TƯ CHO
                                    BẢN THÂN
                                 </h2>
                                 <p
                                    className="mb-1"
                                    data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                 >
                                    Cuộc sống là một cuộc phiêu lưu đầy táo bạo
                                    hoặc không là gì cả. Hãy đến với chúng tôi
                                    để tận hưởng kỳ nghỉ tuyệt vời của bạn
                                 </p>
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
