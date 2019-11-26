import React, { Component } from "react";

import { Link } from "react-router-dom";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";
export default class BlogContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }

   render() {
      return (
         <section className="ftco-section bg-light">
            <div className="container">
               <div className="row d-flex">
                  <div className="col-md-4 d-flex ftco-animate">
                     <div className="blog-entry justify-content-end">
                        <Link
                           to="/blog-single"
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
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies it with the necessary regelialia.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                     <div className="blog-entry justify-content-end">
                        <Link
                           to="/blog-single"
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
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies it with the necessary regelialia.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
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
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies it with the necessary regelialia.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                     <div className="blog-entry justify-content-end">
                        <Link
                           to="blog-single"
                           className="block-20"
                           style={{
                              backgroundImage: 'url("images/image_4.jpg")'
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
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies it with the necessary regelialia.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                     <div className="blog-entry justify-content-end">
                        <Link
                           to="blog-single"
                           className="block-20"
                           style={{
                              backgroundImage: 'url("images/image_5.jpg")'
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
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies it with the necessary regelialia.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4 d-flex ftco-animate">
                     <div className="blog-entry">
                        <Link
                           to="blog-single"
                           className="block-20"
                           style={{
                              backgroundImage: 'url("images/image_6.jpg")'
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
                                 Why Lead Generation is Key for Business Growth
                              </Link>
                           </h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies it with the necessary regelialia.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row mt-5">
                  <div className="col text-center">
                     <div className="block-27">
                        <ul>
                           <li>
                              <Link to="#">&lt;</Link>
                           </li>
                           <li className="active">
                              <span>1</span>
                           </li>
                           <li>
                              <Link to="#">2</Link>
                           </li>
                           <li>
                              <Link to="#">3</Link>
                           </li>
                           <li>
                              <Link to="#">4</Link>
                           </li>
                           <li>
                              <Link to="#">5</Link>
                           </li>
                           <li>
                              <Link to="#">&gt;</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
