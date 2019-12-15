import React, { Component } from "react";

// import { Link } from "react-router-dom";
import TopBarSearchVisibleXS from "./topBarSearchVisibleXS";
import TopBarNotice from "./topBarNotice";
import TopBarMail from "./topBarMail";
import TopBarUserActions from "./topBarUserActions";

export default class TopBarContainer extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button
               id="sidebarToggleTop"
               className="btn btn-link d-md-none rounded-circle mr-3"
            >
               <i className="fa fa-bars" />
            </button>
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
               <div className="input-group">
                  <input
                     type="text"
                     className="form-control bg-light border-0 small"
                     placeholder="Search for..."
                     aria-label="Search"
                     aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                     <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                     </button>
                  </div>
               </div>
            </form>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
               {/* Nav Item - Search Dropdown (Visible Only XS) */}
               <TopBarSearchVisibleXS />
               {/* Nav Item - Alerts */}
               <TopBarNotice />
               {/* Nav Item - Messages */}
               <TopBarMail />
               <div className="topbar-divider d-none d-sm-block" />
               {/* Nav Item - User Information */}
               <TopBarUserActions />
            </ul>
         </nav>
      );
   }
}
