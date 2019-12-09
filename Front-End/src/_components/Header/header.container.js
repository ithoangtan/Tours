import React, { Component } from "react";

export default class HeaderContainer extends Component {
   render() {
      return (
         <div
            className="hero-wrap js-fullheight"
            style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
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
                        ĐẦU TƯ CHO DU LỊCH LÀ MỘT KHOẢN ĐẦU TƯ CHO BẢN THÂN
                     </h1>
                     <p
                        className="mb-1"
                        data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                     >
                        Cuộc sống là một cuộc phiêu lưu đầy táo bạo hoặc không
                        là gì cả. Hãy đến với chúng tôi để tận hưởng kỳ nghỉ
                        tuyệt vời của bạn
                     </p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
