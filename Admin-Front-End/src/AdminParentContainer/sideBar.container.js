import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Tooltip } from "antd";

export default class SideBarContainer extends Component {
   render() {
      return (
         <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
            id="accordionSidebar"
         >
            {/* Sidebar - Brand */}
            <Tooltip placement="right" title={"Go to user MODE"}>
               <Link
                  to="/"
                  className="sidebar-brand d-flex align-items-center justify-content-center"
               >
                  <div className="sidebar-brand-icon rotate-n-15">
                     <i className="fas fa-laugh-wink" />
                  </div>
                  <div className="sidebar-brand-text mx-3">SB Admin</div>
               </Link>
            </Tooltip>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}

            <li className="nav-item active">
               {" "}
               <Tooltip placement="right" title={"Go to Report and analytics"}>
                  <Link to="/admin/" className="nav-link">
                     <i className="fas fa-fw fa-tachometer-alt" />
                     <span>Dashboard</span>
                  </Link>
               </Tooltip>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Tours Management</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
               <Link
                  to="#"
                  className="nav-link collapsed"
                  // href=""
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
               >
                  <i className="fas fa-th-large"></i>
                  <span>Tours</span>
               </Link>
               <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
               >
                  <div className="bg-white py-2 collapse-inner rounded">
                     <h6 className="collapse-header">Tours</h6>
                     <Link to="/admin/tour" className="collapse-item">
                        Tours and Details
                     </Link>
                     <Link to="/admin/schedule" className="collapse-item">
                        Schedule
                     </Link>
                  </div>
               </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
               <Link
                  to="#"
                  className="nav-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseUtilities"
                  aria-expanded="true"
                  aria-controls="collapseUtilities"
               >
                  <i className="fas fa-blog"></i>
                  <span>Blogs</span>
               </Link>
               <div
                  id="collapseUtilities"
                  className="collapse"
                  aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar"
               >
                  <div className="bg-white py-2 collapse-inner rounded">
                     <h6 className="collapse-header">Blog</h6>
                     <Link to="/admin/posts" className="collapse-item">
                        Posts
                     </Link>
                     <Link to="/admin/approved-post" className="collapse-item">
                        Approved post
                     </Link>
                     <Link to="/admin/comments" className="collapse-item">
                        Comments
                     </Link>
                     <Link to="/admin/other" className="collapse-item">
                        Other
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
               <Link
                  to="#"
                  className="nav-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapsePages"
                  aria-expanded="true"
                  aria-controls="collapsePages"
               >
                  <i className="fas fa-user-circle"></i>
                  <span>Accounts</span>
               </Link>
               <div
                  id="collapsePages"
                  className="collapse"
                  aria-labelledby="headingPages"
                  data-parent="#accordionSidebar"
               >
                  <div className="bg-white py-2 collapse-inner rounded">
                     <h6 className="collapse-header">Types</h6>
                     <Link
                        to="/admin/user-management"
                        className="collapse-item"
                     >
                        User manager
                     </Link>
                     <Link to="/admin/accounts" className="collapse-item">
                        Accounts
                     </Link>
                     <Link to="/admin/guests" className="collapse-item">
                        Guests
                     </Link>
                     <div className="collapse-divider" />
                  </div>
               </div>
            </li>
            {/* Nav Item - Charts */}
            <li className="nav-item">
               <Link to="/admin/notification" className="nav-link">
                  <i className="fas fa-bell"></i>
                  <span>Notifications</span>
               </Link>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
               <Link to="/admin/mails" className="nav-link">
                  <i className="fas fa-envelope-square"></i>
                  <span>Mails</span>
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
