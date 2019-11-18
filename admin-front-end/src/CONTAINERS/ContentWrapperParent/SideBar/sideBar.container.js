import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class SideBarContainer extends Component {
   render() {
      return (
         <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
         >
            {/* Sidebar - Brand */}
            <Link to="/">
               <a
                  className="sidebar-brand d-flex align-items-center justify-content-center"
                  href="/"
               >
                  <div className="sidebar-brand-icon rotate-n-15">
                     <i className="fas fa-laugh-wink" />
                  </div>
                  <div className="sidebar-brand-text mx-3">SB Admin</div>
               </a>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
               <Link to="/">
                  <a className="nav-link">
                     <i className="fas fa-fw fa-tachometer-alt" />
                     <span>Dashboard</span>
                  </a>
               </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Tours Management</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
               <a
                  className="nav-link collapsed"
                  href="/"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
               >
                  <i class="fas fa-th-large"></i>
                  <span>Tours</span>
               </a>
               <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
               >
                  <div className="bg-white py-2 collapse-inner rounded">
                     <h6 className="collapse-header">Tours</h6>
                     <Link to="tour">
                        <a className="collapse-item" href="/">
                           Tours and Details
                        </a>
                     </Link>
                     <Link to="schedule">
                        <a className="collapse-item" href="/">
                           Schedule
                        </a>
                     </Link>
                  </div>
               </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
               <a
                  className="nav-link collapsed"
                  href="s"
                  data-toggle="collapse"
                  data-target="#collapseUtilities"
                  aria-expanded="true"
                  aria-controls="collapseUtilities"
               >
                  <i class="fas fa-blog"></i>
                  <span>Blogs</span>
               </a>
               <div
                  id="collapseUtilities"
                  className="collapse"
                  aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar"
               >
                  <div className="bg-white py-2 collapse-inner rounded">
                     <h6 className="collapse-header">Blog</h6>
                     <Link to="posts">
                        <a className="collapse-item" href="/">
                           Posts
                        </a>
                     </Link>
                     <Link to="approved-post">
                        <a className="collapse-item" href="/">
                           Approved post
                        </a>
                     </Link>
                     <Link to="comments">
                        <a className="collapse-item" href="/">
                           Comments
                        </a>
                     </Link>
                     <Link to="other">
                        <a className="collapse-item" href="/">
                           Other
                        </a>
                     </Link>
                  </div>
               </div>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Account Management</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
               <a
                  className="nav-link collapsed"
                  href="s"
                  data-toggle="collapse"
                  data-target="#collapsePages"
                  aria-expanded="true"
                  aria-controls="collapsePages"
               >
                  <i class="fas fa-user-circle"></i>
                  <span>Accounts</span>
               </a>
               <div
                  id="collapsePages"
                  className="collapse"
                  aria-labelledby="headingPages"
                  data-parent="#accordionSidebar"
               >
                  <div className="bg-white py-2 collapse-inner rounded">
                     <h6 className="collapse-header">Types</h6>
                     <Link to="user-management">
                        <a className="collapse-item" href="/">
                           User manager
                        </a>
                     </Link>
                     <Link to="accounts">
                        <a className="collapse-item" href="/">
                           Accounts
                        </a>
                     </Link>
                     <Link to="guests">
                        <a className="collapse-item" href="/">
                           Guests
                        </a>
                     </Link>
                     <div className="collapse-divider" />
                  </div>
               </div>
            </li>
            {/* Nav Item - Charts */}
            <li className="nav-item">
               <Link to="notification">
                  <a className="nav-link" href="/">
                     <i class="fas fa-bell"></i>
                     <span>Notifications</span>
                  </a>
               </Link>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
               <Link to="mails">
                  <a className="nav-link" href="/">
                     <i class="fas fa-envelope-square"></i>
                     <span>Mails</span>
                  </a>
               </Link>
            </li>
            {/* Divider */}
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
               <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
         </ul>
      );
   }
}
