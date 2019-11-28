import React, { Component } from "react";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

export default class DestinationContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }

   render() {
      return (
         <div>
            <section className="ftco-section ftco-no-pb ftco-no-pt">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="search-wrap-1 ftco-animate p-4">
                           <form action="#" className="search-property-1">
                              <div className="row">
                                 <div className="col-lg align-items-end">
                                    <div className="form-group">
                                       <label htmlFor="#">Destination</label>
                                       <div className="form-field">
                                          <div className="icon">
                                             <span className="ion-ios-search" />
                                          </div>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Search place"
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg align-items-end">
                                    <div className="form-group">
                                       <label htmlFor="#">Check-in date</label>
                                       <div className="form-field">
                                          <div className="icon">
                                             <span className="ion-ios-calendar" />
                                          </div>
                                          <input
                                             type="text"
                                             className="form-control checkin_date"
                                             placeholder="Check In Date"
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg align-items-end">
                                    <div className="form-group">
                                       <label htmlFor="#">Check-out date</label>
                                       <div className="form-field">
                                          <div className="icon">
                                             <span className="ion-ios-calendar" />
                                          </div>
                                          <input
                                             type="text"
                                             className="form-control checkout_date"
                                             placeholder="Check Out Date"
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg align-items-end">
                                    <div className="form-group">
                                       <label htmlFor="#">Price Limit</label>
                                       <div className="form-field">
                                          <div className="select-wrap">
                                             <div className="icon">
                                                <span className="ion-ios-arrow-down" />
                                             </div>
                                             <select
                                                name
                                                id
                                                className="form-control"
                                             >
                                                <option value>$100</option>
                                                <option value>$500</option>
                                                <option value>$1000</option>
                                                <option value>$2000</option>
                                                <option value>$3000</option>
                                                <option value>$4000</option>
                                                <option value>$5000</option>
                                                <option value>$6000</option>
                                                <option value>$7000</option>
                                                <option value>$8000</option>
                                                <option value>$9000</option>
                                                <option value>$10000</option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg align-self-end">
                                    <div className="form-group">
                                       <div className="form-field">
                                          <input
                                             type="submit"
                                             defaultValue="Search"
                                             className="form-control btn btn-primary"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="ftco-section">
               <div className="container">
                  <div className="row justify-content-center pb-5">
                     <div className="col-md-12 heading-section text-center ftco-animate">
                        <h2 className="mb-4">Best Place to Travel</h2>
                        <p>
                           Far far away, behind the word mountains, far from the
                           countries Vokalia and Consonantia
                        </p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6 col-lg-3 ftco-animate">
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
                     <div className="col-md-6 col-lg-3 ftco-animate">
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
                     <div className="col-md-6 col-lg-3 ftco-animate">
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
                     <div className="col-md-6 col-lg-3 ftco-animate">
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
                     <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-5.jpg"
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
                              href="images/destination-5.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-6.jpg"
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
                              href="images/destination-6.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-7.jpg"
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
                              href="images/destination-7.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-8.jpg"
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
                              href="images/destination-8.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-9.jpg"
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
                              href="images/destination-9.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-10.jpg"
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
                              href="images/destination-10.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-11.jpg"
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
                              href="images/destination-11.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-3 ftco-animate">
                        <div className="project">
                           <div className="img">
                              <img
                                 src="images/destination-12.jpg"
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
                              href="images/destination-12.jpg"
                              className="icon image-popup d-flex justify-content-center align-items-center"
                           >
                              <span className="icon-expand" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="row mt-5">
                     <div className="col text-center">
                        <div className="block-27">
                           <ul>
                              <li>
                                 <a href="s">&lt;</a>
                              </li>
                              <li className="active">
                                 <span>1</span>
                              </li>
                              <li>
                                 <a href="s">2</a>
                              </li>
                              <li>
                                 <a href="s">3</a>
                              </li>
                              <li>
                                 <a href="s">4</a>
                              </li>
                              <li>
                                 <a href="s">5</a>
                              </li>
                              <li>
                                 <a href="s">&gt;</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      );
   }
}
