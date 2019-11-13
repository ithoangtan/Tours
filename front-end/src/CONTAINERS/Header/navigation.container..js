import React, { Component } from "react";

export default class Navigation extends Component {
   render() {
      return (
         <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
         >
            <div className="container">
               <a className="navbar-brand" href="index.html">
                  <span>Traveland</span>
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#ftco-nav"
                  aria-controls="ftco-nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="oi oi-menu" /> Menu
               </button>
               <div className="collapse navbar-collapse" id="ftco-nav">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                        <a href="index.html" className="nav-link">
                           Home
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="about.html" className="nav-link">
                           About
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="destination.html" className="nav-link">
                           Destination
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="hotel-resto.html" className="nav-link">
                           Hotels &amp; Restaurant
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                           Blog
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="contact.html" className="nav-link">
                           Contact
                        </a>
                     </li>
                     <li className="nav-item cta">
                        <a href="s" className="nav-link">
                           Book Now
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}
