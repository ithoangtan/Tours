import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class topBarNotice extends Component {
   render() {
      return (
         <li className="nav-item dropdown no-arrow mx-1">
            <Link
               to="#"
               className="nav-link dropdown-toggle"
               id="alertsDropdown"
               role="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
            >
               <i className="fas fa-bell fa-fw" />
               {/* Counter - Alerts */}
               <span className="badge badge-danger badge-counter">3+</span>
            </Link>
            {/* Dropdown - Alerts */}
            <div
               className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
               aria-labelledby="alertsDropdown"
            >
               <h6 className="dropdown-header">Alerts Center</h6>
               <Link className="dropdown-item d-flex align-items-center" to="#">
                  <div className="mr-3">
                     <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white" />
                     </div>
                  </div>
                  <div>
                     <div className="small text-gray-500">Nov 1, 2019</div>
                     <span className="font-weight-bold">
                        Something................................
                     </span>
                  </div>
               </Link>
               <Link className="dropdown-item d-flex align-items-center" to="#">
                  <div className="mr-3">
                     <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white" />
                     </div>
                  </div>
                  <div>
                     <div className="small text-gray-500">Nov 7, 2019</div>
                     Something................................
                  </div>
               </Link>
               <Link className="dropdown-item d-flex align-items-center" to="#">
                  <div className="mr-3">
                     <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white" />
                     </div>
                  </div>
                  <div>
                     <div className="small text-gray-500">Nov 2, 2019</div>
                     Something................................
                  </div>
               </Link>
               <Link
                  to="/admin/notifications"
                  className="dropdown-item text-center small text-gray-500"
               >
                  Show All Alerts
               </Link>
            </div>
         </li>
      );
   }
}
