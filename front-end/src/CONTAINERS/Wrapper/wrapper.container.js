import React, { Component } from "react";

export default class WrapperContainer extends Component {
   render() {
      return (
         <section
            className="hero-wrap hero-wrap-2 js-fullheight"
            style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
            data-stellar-background-ratio="0.5"
         >
            <div className="overlay" />
            <div className="container">
               <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                  <div className="col-md-9 ftco-animate pb-5 text-center">
                     <h1 className="mb-3 bread">About Us</h1>
                     <p className="breadcrumbs">
                        <span className="mr-2">
                           <a href="index.html">
                              Home <i className="ion-ios-arrow-forward" />
                           </a>
                        </span>{" "}
                        <span>
                           About us <i className="ion-ios-arrow-forward" />
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
