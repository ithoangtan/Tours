import React, { Component } from "react";

export default class FooterApp extends Component {
   render() {
      return (
         <footer className="footer-area">
            <div className="container">
               <div className="row justify-content-between">
                  <div className="col-sm-6 col-md-5">
                     <div className="single-footer-widget">
                        <h4>Discover Destination</h4>
                        <ul>
                           <li>
                              <a href="s">Miami, USA</a>
                           </li>
                           <li>
                              <a href="s">California, USA</a>
                           </li>
                           <li>
                              <a href="s">London, UK</a>
                           </li>
                           <li>
                              <a href="s">Saintmartine, Bangladesh</a>
                           </li>
                           <li>
                              <a href="s">Mount Everast, India</a>
                           </li>
                           <li>
                              <a href="s">Sidney, Australia</a>
                           </li>
                           <li>
                              <a href="s">Miami, USA</a>
                           </li>
                           <li>
                              <a href="s">California, USA</a>
                           </li>
                           <li>
                              <a href="s">London, UK</a>
                           </li>
                           <li>
                              <a href="s">Saintmartine, Bangladesh</a>
                           </li>
                           <li>
                              <a href="s">Mount Everast, India</a>
                           </li>
                           <li>
                              <a href="s">Sidney, Australia</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                     <div className="single-footer-widget">
                        <h4>Subscribe Newsletter</h4>
                        <div className="form-wrap" id="mc_embed_signup">
                           <form
                              target="_blank"
                              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                              method="get"
                              className="form-inline"
                           >
                              <input
                                 className="form-control"
                                 name="EMAIL"
                                 placeholder="Your Email Address"
                                 onfocus="this.placeholder = ''"
                                 onblur="this.placeholder = 'Your Email Address '"
                                 required
                                 type="email"
                              />
                              <button className="click-btn btn btn-default text-uppercase">
                                 {" "}
                                 <i className="far fa-paper-plane" />
                              </button>
                              <div
                                 style={{
                                    position: "absolute",
                                    left: "-5000px"
                                 }}
                              >
                                 <input
                                    name="b_36c4fd991d266f23781ded980_aefe40901a"
                                    tabIndex={-1}
                                    defaultValue
                                    type="text"
                                 />
                              </div>
                              <div className="info" />
                           </form>
                        </div>
                        <p>
                           Subscribe our newsletter to get update news and
                           offers
                        </p>
                     </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                     <div className="single-footer-widget footer_icon">
                        <h4>Contact Us</h4>
                        <p>4156, New garden, New York, USA +880 362 352 783</p>
                        <span>contact@martine.com</span>
                        <div className="social-icons">
                           <a href="s">
                              <i className="ti-facebook" />
                           </a>
                           <a href="s">
                              <i className="ti-twitter-alt" />
                           </a>
                           <a href="s">
                              <i className="ti-pinterest" />
                           </a>
                           <a href="s">
                              <i className="ti-instagram" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid">
               <div className="row justify-content-center">
                  <div className="col-lg-12">
                     <div className="copyright_part_text text-center">
                        <p className="footer-text m-0">
                           {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                           Copyright © All rights reserved | This template is
                           made with{" "}
                           <i className="ti-heart" aria-hidden="true" /> by{" "}
                           <a href="https://colorlib.com" target="_blank">
                              Colorlib
                           </a>
                           {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      );
   }
}
