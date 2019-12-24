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
               <div
                  id="recentStoriesCarousel"
                  className="carousel slide ftco-animate"
                  data-ride="carousel"
                  data-interval={4000}
               >
                  <div
                     className="carousel-inner row w-100 mx-auto ftco-animate"
                     role="listbox"
                  >
                     {/* item slide */}
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                        <div className="blog-entry justify-content-end">
                           <Link
                              to="blog-single"
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="blog-entry justify-content-end">
                           <Link
                              to="blog-single"
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="blog-entry">
                           <Link
                              to="blog-single"
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="blog-entry justify-content-end">
                           <Link
                              to="blog-single"
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="blog-entry justify-content-end">
                           <Link
                              to="blog-single"
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="blog-entry">
                           <Link
                              to="blog-single"
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
                                 <Link to="blog-single">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a
                     className="carousel-control-prev ht-w-70"
                     href="#recentStoriesCarousel"
                     role="button"
                     data-slide="prev"
                  >
                     <span
                        className="carousel-control-prev-icon ht-control-preview-icon"
                        aria-hidden="true"
                     />
                     {/* <span className="sr-only">Previous</span> */}
                  </a>
                  <a
                     className="carousel-control-next text-faded ht-w-70"
                     href="#recentStoriesCarousel"
                     role="button"
                     data-slide="next"
                  >
                     <span
                        className="carousel-control-next-icon ht-control-preview-icon"
                        aria-hidden="true"
                     />
                     {/* <span className="sr-only">Next</span> */}
                  </a>
               </div>
            </div>
         </section>
      );
   }
}
