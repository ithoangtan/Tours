import React, { Component } from "react";

export default class BannerApp extends Component {
   render() {
      return (
         <section className="banner_part">
            <div className="container">
               <div className="row align-items-center justify-content-center">
                  <div className="col-lg-10">
                     <div className="banner_text text-center">
                        <div className="banner_text_iner">
                           <h1> Saintmartine</h1>
                           <p>
                              Let’s start your journey with us, your dream will
                              come true
                           </p>
                           <a href="s" className="btn_1">
                              Discover Now
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
