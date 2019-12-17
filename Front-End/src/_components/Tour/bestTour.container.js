import React, { Component } from "react";

import * as INDEX_CONSTANTS from "../../_constants/index.constants";
import funcLoadJs from "../../_constants/loadJs.constants";

export default class BestTourContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }
   render() {
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row justify-content-center pb-1">
                  <div className="col-md-12 heading-section text-center ftco-animate">
                     <h2 className="mb-4">Best Place to Travel</h2>
                     <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia
                     </p>
                  </div>
               </div>
               <div
                  id="myCarousel"
                  className="carousel slide  ftco-animate"
                  data-ride="carousel"
                  data-interval={4000}
               >
                  <div
                     className="carousel-inner row w-100 mx-auto"
                     role="listbox"
                  >
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-1.jpg"
                                 className="img-fluid"
                                 alt="Colorlib Template"
                              />
                           </div>
                           <div className="text">
                              <h4 className="price">$400</h4>
                              <span>15 Days Tour</span>
                              <h3>
                                 <a href="project.html">
                                    Gurtnellen, Swetzerland
                                 </a>
                              </h3>
                              <div className="star d-flex clearfix">
                                 <div className="mr-auto float-left">
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                 </div>
                                 <div className="float-right">
                                    <span className="rate">
                                       <a href="s">(120)</a>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <a
                              href="images/destination-1.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-2.jpg"
                                 className="img-fluid"
                                 alt="Colorlib Template"
                              />
                           </div>
                           <div className="text">
                              <h4 className="price">$400</h4>
                              <span>15 Days Tour</span>
                              <h3>
                                 <a href="project.html">
                                    Gurtnellen, Swetzerland
                                 </a>
                              </h3>
                              <div className="star d-flex clearfix">
                                 <div className="mr-auto float-left">
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                 </div>
                                 <div className="float-right">
                                    <span className="rate">
                                       <a href="s">(120)</a>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <a
                              href="images/destination-2.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-3.jpg"
                                 className="img-fluid"
                                 alt="Colorlib Template"
                              />
                           </div>
                           <div className="text">
                              <h4 className="price">$400</h4>
                              <span>15 Days Tour</span>
                              <h3>
                                 <a href="project.html">
                                    Gurtnellen, Swetzerland
                                 </a>
                              </h3>
                              <div className="star d-flex clearfix">
                                 <div className="mr-auto float-left">
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                 </div>
                                 <div className="float-right">
                                    <span className="rate">
                                       <a href="s">(120)</a>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <a
                              href="images/destination-3.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-4.jpg"
                                 className="img-fluid"
                                 alt="Colorlib Template"
                              />
                           </div>
                           <div className="text">
                              <h4 className="price">$400</h4>
                              <span>15 Days Tour</span>
                              <h3>
                                 <a href="project.html">
                                    Gurtnellen, Swetzerland
                                 </a>
                              </h3>
                              <div className="star d-flex clearfix">
                                 <div className="mr-auto float-left">
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                 </div>
                                 <div className="float-right">
                                    <span className="rate">
                                       <a href="s">(120)</a>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <a
                              href="images/destination-4.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-4.jpg"
                                 className="img-fluid"
                                 alt="Colorlib Template"
                              />
                           </div>
                           <div className="text">
                              <h4 className="price">$400</h4>
                              <span>15 Days Tour</span>
                              <h3>
                                 <a href="project.html">
                                    Gurtnellen, Swetzerland
                                 </a>
                              </h3>
                              <div className="star d-flex clearfix">
                                 <div className="mr-auto float-left">
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                 </div>
                                 <div className="float-right">
                                    <span className="rate">
                                       <a href="s">(120)</a>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <a
                              href="images/destination-4.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-4.jpg"
                                 className="img-fluid"
                                 alt="Colorlib Template"
                              />
                           </div>
                           <div className="text">
                              <h4 className="price">$400</h4>
                              <span>15 Days Tour</span>
                              <h3>
                                 <a href="project.html">
                                    Gurtnellen, Swetzerland
                                 </a>
                              </h3>
                              <div className="star d-flex clearfix">
                                 <div className="mr-auto float-left">
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                    <span className="ion-ios-star" />
                                 </div>
                                 <div className="float-right">
                                    <span className="rate">
                                       <a href="s">(120)</a>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <a
                              href="images/destination-4.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <a
                     className="carousel-control-prev ht-w-70"
                     href="#myCarousel"
                     role="button"
                     data-slide="prev"
                  >
                     <span
                        className="carousel-control-prev-icon "
                        aria-hidden="true"
                     />
                     <span className="sr-only">Previous</span>
                  </a>
                  <a
                     className="carousel-control-next text-faded ht-w-70"
                     href="#myCarousel"
                     role="button"
                     data-slide="next"
                  >
                     <span
                        className="carousel-control-next-icon "
                        aria-hidden="true"
                     />
                     <span className="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </section>
      );
   }
}
