import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Rate, Button } from "antd";

export default class BestTourContainer extends Component {
   state = {};

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
                  id="bestTourCarousel"
                  className="carousel slide ftco-animate"
                  data-ride="carousel"
                  data-interval={4000}
               >
                  <div
                     className="carousel-inner row w-100 mx-auto ftco-animate"
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
                              <p className="sale">10% sale</p>
                           </div>
                           <div className="text">
                              <h5 className="price">Giá từ 5.000.000đ</h5>
                              <Link to="/tour">Có bao nhiêu tour ở Đà Lạt</Link>
                              <h3 className="name-tour">
                                 <Link to="/tour">Tên tour ở đây là gì</Link>
                              </h3>
                              <div className="star d-flex clearfix">
                                 <Rate disabled defaultValue={4} size="small" />
                                 <div className="float-right ht-align-end">
                                    <span className="rate">
                                       <Link to="/tour"> (120)</Link>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="ht-best-tour-bottom">
                              <div className="ht-flex-center-col">
                                 <p className="ht-mr-0">3 Days 2 Nights</p>
                                 <p className="ht-mr-0">8h - 12/9/2019</p>
                              </div>
                              <Button type="primary" className="float-right">
                                 Book Now
                              </Button>
                           </div>
                           <a
                              href="images/destination-1.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <a
                     className="carousel-control-prev ht-w-70"
                     href="#bestTourCarousel"
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
                     href="#bestTourCarousel"
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
