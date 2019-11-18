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
                        <Link to="blog-single">
                           <a
                              href="blog-single.html"
                              className="block-20"
                              style={{
                                 backgroundImage: 'url("images/image_1.jpg")'
                              }}
                           ></a>
                        </Link>
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
                                 <a href="/">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </a>
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
                        <Link to="blog-single">
                           <a
                              href="blog-single.html"
                              className="block-20"
                              style={{
                                 backgroundImage: 'url("images/image_2.jpg")'
                              }}
                           ></a>
                        </Link>
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
                                 <a href="/">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </a>
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
                        <Link to="blog-single">
                           <a
                              href="blog-single.html"
                              className="block-20"
                              style={{
                                 backgroundImage: 'url("images/image_3.jpg")'
                              }}
                           ></a>
                        </Link>
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
                                 <a href="/">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </a>
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
                        <Link to="blog-single">
                           <a
                              href="blog-single.html"
                              className="block-20"
                              style={{
                                 backgroundImage: 'url("images/image_4.jpg")'
                              }}
                           ></a>
                        </Link>
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
                                 <a href="/">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </a>
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
                        <Link to="blog-single">
                           <a
                              href="blog-single.html"
                              className="block-20"
                              style={{
                                 backgroundImage: 'url("images/image_5.jpg")'
                              }}
                           ></a>
                        </Link>
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
                                 <a href="/">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </a>
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
                        <Link to="blog-single">
                           <a
                              href="blog-single.html"
                              className="block-20"
                              style={{
                                 backgroundImage: 'url("images/image_6.jpg")'
                              }}
                           ></a>
                        </Link>
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
                                 <a href="/">
                                    Why Lead Generation is Key for Business
                                    Growth
                                 </a>
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
                              <a href="/">&lt;</a>
                           </li>
                           <li className="active">
                              <span>1</span>
                           </li>
                           <li>
                              <a href="/">2</a>
                           </li>
                           <li>
                              <a href="/">3</a>
                           </li>
                           <li>
                              <a href="/">4</a>
                           </li>
                           <li>
                              <a href="/">5</a>
                           </li>
                           <li>
                              <a href="/">&gt;</a>
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
