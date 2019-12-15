import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class topBarMail extends Component {
   render() {
      return (
         <li className="nav-item dropdown no-arrow mx-1">
            <Link
               to="#"
               className="nav-link dropdown-toggle"
               id="messagesDropdown"
               role="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
            >
               <i className="fas fa-envelope fa-fw" />
               {/* Counter - Messages */}
               <span className="badge badge-danger badge-counter">7</span>
            </Link>
            {/* Dropdown - Messages */}
            <div
               className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
               aria-labelledby="messagesDropdown"
            >
               <h6 className="dropdown-header">Message Center</h6>
               <Link className="dropdown-item d-flex align-items-center" to="#">
                  <div className="dropdown-list-image mr-3">
                     <img
                        className="rounded-circle"
                        src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                        alt="error"
                     />
                     <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                     <div className="text-truncate">Hi there! I am .......</div>
                     <div className="small text-gray-500">Emily · 58m</div>
                  </div>
               </Link>
               <Link className="dropdown-item d-flex align-items-center" to="#">
                  <div className="dropdown-list-image mr-3">
                     <img
                        className="rounded-circle"
                        src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                        alt=""
                     />
                     <div className="status-indicator" />
                  </div>
                  <div>
                     <div className="text-truncate">
                        I have the problem..........
                     </div>
                     <div className="small text-gray-500">Jae · 1d</div>
                  </div>
               </Link>
               <Link className="dropdown-item d-flex align-items-center" to="#">
                  <div className="dropdown-list-image mr-3">
                     <img
                        className="rounded-circle"
                        src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                        alt="error"
                     />
                     <div className="status-indicator bg-warning" />
                  </div>
                  <div>
                     <div className="text-truncate">Something...........</div>
                     <div className="small text-gray-500">Mor · 2d</div>
                  </div>
               </Link>
               <Link className="dropdown-item d-flex align-items-center" to="#">
                  <div className="dropdown-list-image mr-3">
                     <img
                        className="rounded-circle"
                        src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                        alt=""
                     />
                     <div className="status-indicator bg-success" />
                  </div>
                  <div>
                     <div className="text-truncate">Something...........</div>
                     <div className="small text-gray-500">Dog · 2w</div>
                  </div>
               </Link>
               <Link
                  to="/admin/mails"
                  className="dropdown-item text-center small text-gray-500"
               >
                  Read More Messages
               </Link>
            </div>
         </li>
      );
   }
}
