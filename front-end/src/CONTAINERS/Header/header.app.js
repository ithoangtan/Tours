import React, { Component } from "react";

export default class HeaderApp extends Component {
   render() {
      return (
         <header className="main_menu">
            <div className="sub_menu">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="sub_menu_right_content">
                           <span>Top destinations</span>
                           <a href="s">Asia</a>
                           <a href="s">Europe</a>
                           <a href="s">America</a>
                        </div>
                     </div>
                     <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="sub_menu_social_icon">
                           <a href="s">
                              <i className="flaticon-facebook" />
                           </a>
                           <a href="s">
                              <i className="flaticon-twitter" />
                           </a>
                           <a href="s">
                              <i className="flaticon-skype" />
                           </a>
                           <a href="s">
                              <i className="flaticon-instagram" />
                           </a>
                           <span>
                              <i className="flaticon-phone-call" />
                              +880 356 257 142
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="main_menu_iner">
               <div className="container">
                  <div className="row align-items-center ">
                     <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                           <a className="navbar-brand" href="index.html">
                              {" "}
                              <img src="img/logo.png" alt="logo" />{" "}
                           </a>
                           <button
                              className="navbar-toggler"
                              type="button"
                              data-toggle="collapse"
                              data-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                           >
                              <span className="navbar-toggler-icon" />
                           </button>
                           <div
                              className="collapse navbar-collapse main-menu-item justify-content-center"
                              id="navbarSupportedContent"
                           >
                              <ul className="navbar-nav">
                                 <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                       Home
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="about.html">
                                       About
                                    </a>
                                 </li>
                                 <li className="nav-item">
                                    <a
                                       className="nav-link"
                                       href="packages.html"
                                    >
                                       packages
                                    </a>
                                 </li>
                                 <li className="nav-item dropdown">
                                    <a
                                       className="nav-link dropdown-toggle"
                                       href="blog.html"
                                       id="navbarDropdown"
                                       role="button"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false"
                                    >
                                       Blog
                                    </a>
                                    <div
                                       className="dropdown-menu"
                                       aria-labelledby="navbarDropdown"
                                    >
                                       <a
                                          className="dropdown-item"
                                          href="blog.html"
                                       >
                                          Blog
                                       </a>
                                       <a
                                          className="dropdown-item"
                                          href="single-blog.html"
                                       >
                                          Single blog
                                       </a>
                                    </div>
                                 </li>
                                 <li className="nav-item dropdown">
                                    <a
                                       className="nav-link dropdown-toggle"
                                       href="blog.html"
                                       id="navbarDropdown_1"
                                       role="button"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false"
                                    >
                                       pages
                                    </a>
                                    <div
                                       className="dropdown-menu"
                                       aria-labelledby="navbarDropdown_1"
                                    >
                                       <a
                                          className="dropdown-item"
                                          href="top_place.html"
                                       >
                                          top place
                                       </a>
                                       <a
                                          className="dropdown-item"
                                          href="tour_details.html"
                                       >
                                          tour details
                                       </a>
                                       <a
                                          className="dropdown-item"
                                          href="elements.html"
                                       >
                                          Elements
                                       </a>
                                    </div>
                                 </li>
                                 <li className="nav-item">
                                    <a className="nav-link" href="contact.html">
                                       Contact
                                    </a>
                                 </li>
                              </ul>
                           </div>
                           <a href="s" className="btn_1 d-none d-lg-block">
                              book now
                           </a>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      );
   }
}
