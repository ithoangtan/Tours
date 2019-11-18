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
                  className="row no-gutters slider-text js-fullheight align-items-center justify-content-end"
                  data-scrollax-parent="true"
               >
                  <div
                     className="col-md-7 ftco-animate mt-5"
                     data-scrollax=" properties: { translateY: '70%' }"
                  >
                     <h1
                        className="mb-4"
                        data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                     >
                        Be a Traveler not a Tourist
                     </h1>
                     <p
                        className="mb-4"
                        data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                     >
                        Travel to the any corner of the world, without going
                        around in circles
                     </p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
