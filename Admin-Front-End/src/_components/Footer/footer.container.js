import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class FooterContainer extends Component {
   render() {
      return (
         <footer className="ftco-footer ftco-footer-2 ftco-section">
            <div className="container">
               <div className="row mb-5">
                  <div className="col-md">
                     <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Traveland</h2>
                        <p>Far far away, behind ... something..........</p>
                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                           <li className="ftco-animate">
                              <Link to="https://github.com/ithoangtan">
                                 <span className="icon-twitter" />
                              </Link>
                           </li>
                           <li className="ftco-animate">
                              <Link to="https://facebook.com/ithoangtan">
                                 <span className="icon-facebook" />
                              </Link>
                           </li>
                           <li className="ftco-animate">
                              <Link to="https://github.com/ithoangtan">
                                 <span className="icon-instagram" />
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md">
                     <div className="ftco-footer-widget mb-4 ml-md-5">
                        <h2 className="ftco-heading-2">Infromation</h2>
                        <ul className="list-unstyled">
                           <li>
                              <a href="/" className="py-2 d-block">
                                 Online Enquiry
                              </a>
                           </li>
                           <li>
                              <a href="/" className="py-2 d-block">
                                 General Enquiries
                              </a>
                           </li>
                           <li>
                              <a href="/" className="py-2 d-block">
                                 Booking Conditions
                              </a>
                           </li>
                           <li>
                              <a href="/" className="py-2 d-block">
                                 Privacy and Policy
                              </a>
                           </li>
                           <li>
                              <a href="/" className="py-2 d-block">
                                 Refund Policy
                              </a>
                           </li>
                           <li>
                              <a href="/" className="py-2 d-block">
                                 Call Us
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md">
                     <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Experience</h2>
                        <ul className="list-unstyled">
                           <li>
                              <Link to="#" className="py-2 d-block">
                                 Adventure
                              </Link>
                           </li>
                           <li>
                              <Link to="#" className="py-2 d-block">
                                 Hotel and Restaurant
                              </Link>
                           </li>
                           <li>
                              <Link to="#" className="py-2 d-block">
                                 Beach
                              </Link>
                           </li>
                           <li>
                              <Link to="#" className="py-2 d-block">
                                 Nature
                              </Link>
                           </li>
                           <li>
                              <Link to="#" className="py-2 d-block">
                                 Camping
                              </Link>
                           </li>
                           <li>
                              <Link to="#" className="py-2 d-block">
                                 Party
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md">
                     <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Have a Questions?</h2>
                        <div className="block-23 mb-3">
                           <ul>
                              <li>
                                 <span className="icon icon-map-marker" />
                                 <span className="text">1 Vo Van Ngan VN</span>
                              </li>
                              <li>
                                 <Link to="#">
                                    <span className="icon icon-phone" />
                                    <span className="text">+983 982 933</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="#">
                                    <span className="icon icon-envelope" />
                                    <span className="text">
                                       ithoangtan@gmail.com
                                    </span>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 text-center">
                     <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made
                        with{" "}
                        <i
                           className="icon-heart color-danger"
                           aria-hidden="true"
                        />{" "}
                        by{" "}
                        <a
                           href="https://github.com/ithoangtan"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           ithoangtan
                        </a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                     </p>
                  </div>
               </div>
            </div>
         </footer>
      );
   }
}
