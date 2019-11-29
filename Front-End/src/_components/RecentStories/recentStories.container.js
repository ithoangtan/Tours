import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class RecentStoriesContainer extends Component {
   render() {
      return (
         <section className="ftco-section bg-light">
            <div className="container">
               <div className="row justify-content-center mb-2 pb-1">
                  <div className="col-md-7 heading-section text-center ftco-animate">
                     <h2>Recent Stories</h2>
                  </div>
               </div>
               <div className="row d-flex">
                  <div className="col-md-4 d-flex ftco-animate">
                     <div className="blog-entry justify-content-end">
                        <Link
                           to="#"
                           className="block-20"
                           style={{
                              backgroundImage: 'url("images/image_1.jpg")'
                           }}
                        ></Link>
                        <div className="text mt-3 float-right d-block">
                           <div className="d-flex align-items-center pt-2 mb-4 topp">
                              <div className="one">
                                 <span className="day">12</span>
                              </div>
                              <div className="two">
                                 <span className="yr">2019</span>
                                 <span className="mos">February</span>
                              </div>
                           </div>
                           <h3 className="heading">
                              <Link to="#">
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                     <div className="blog-entry justify-content-end">
                        <Link
                           to="#"
                           className="block-20"
                           style={{
                              backgroundImage: 'url("images/image_2.jpg")'
                           }}
                        ></Link>
                        <div className="text mt-3 float-right d-block">
                           <div className="d-flex align-items-center pt-2 mb-4 topp">
                              <div className="one">
                                 <span className="day">12</span>
                              </div>
                              <div className="two">
                                 <span className="yr">2019</span>
                                 <span className="mos">February</span>
                              </div>
                           </div>
                           <h3 className="heading">
                              <Link to="#">
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                     <div className="blog-entry">
                        <Link
                           to="#"
                           className="block-20"
                           style={{
                              backgroundImage: 'url("images/image_3.jpg")'
                           }}
                        ></Link>
                        <div className="text mt-3 float-right d-block">
                           <div className="d-flex align-items-center pt-2 mb-4 topp">
                              <div className="one">
                                 <span className="day">12</span>
                              </div>
                              <div className="two">
                                 <span className="yr">2019</span>
                                 <span className="mos">February</span>
                              </div>
                           </div>
                           <h3 className="heading">
                              <Link to="#">
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
