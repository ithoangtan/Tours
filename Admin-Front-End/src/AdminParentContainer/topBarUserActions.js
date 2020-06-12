import React, { Component } from "react";

import Cookies from "js-cookie";

import { Link, Redirect } from "react-router-dom";

export default class topBarUserActions extends Component {
   constructor(props) {
      super(props);
      this.state = {
         logout: false
      };
   }
   haveRedirect() {
      if (this.state.logout === true) {
         this.setState({ logout: false });
         return <Redirect to="/" />;
      }
   }
   onLogOut = () => {
      //Xóa các thứ đi là được
      //Xóa session, xóa cookie, redirect về trang login
      sessionStorage.clear();
      Cookies.remove("token");
      Cookies.remove("role");
      this.setState({ logout: true });
   };
   render() {
      return (
         <li className="nav-item dropdown no-arrow">
            {this.haveRedirect()}
            <Link
               to="#"
               className="nav-link dropdown-toggle"
               id="userDropdown"
               role="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
            >
               <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  ithoangtan
               </span>
               <img
                  className="img-profile rounded-circle"
                  src="../profile.png"
                  alt="error"
               />
            </Link>
            {/* Dropdown - User Information */}
            <div
               className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
               aria-labelledby="userDropdown"
            >
               <Link className="dropdown-item" to="/admin/profile">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
               </Link>
               <Link className="dropdown-item" to="/admin/settings">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                  Settings
               </Link>
               <Link className="dropdown-item" to="/admin/activity-log">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                  Activity Log
               </Link>
               <div className="dropdown-divider" />
               <Link
                  to="#"
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target="#logoutModal"
               >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
               </Link>
            </div>
            {/* Logout Modal*/}
            <div
               className="modal fade"
               id="logoutModal"
               tabIndex={-1}
               role="dialog"
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
            >
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                           Ready to Leave?
                        </h5>
                        <button
                           className="close"
                           type="button"
                           data-dismiss="modal"
                           aria-label="Close"
                        >
                           <span aria-hidden="true">×</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        Select "Logout" below if you are ready to end your
                        current session.
                     </div>
                     <div className="modal-footer">
                        <button
                           className="btn btn-secondary"
                           type="button"
                           data-dismiss="modal"
                        >
                           Cancel
                        </button>
                        <a
                           className="btn btn-primary"
                           href="/"
                           onClick={this.onLogOut}
                        >
                           Logout
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </li>
      );
   }
}
