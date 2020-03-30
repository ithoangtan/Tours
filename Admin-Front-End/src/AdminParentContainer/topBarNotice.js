import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Dropdown } from "antd";

import NoticeScroll from "./NotificationScroll";

export default class topBarNotice extends Component {
   state = {
      visible: false
   };

   handleMenuClick = e => {
      if (e.key === "3") {
         this.setState({ visible: false });
      }
   };

   handleVisibleChange = flag => {
      this.setState({ visible: flag });
   };
   render() {
      return (
         <li className="nav-item dropdown no-arrow mx-1">
            <Dropdown
               onVisibleChange={this.handleVisibleChange}
               visible={this.state.visible}
               overlay={
                  <div className="shadow animated--grow-in ht-notification-topbar">
                     <NoticeScroll />
                  </div>
               }
               trigger={["click"]}
            >
               <Link
                  to="#"
                  className="nav-link ant-dropdown-link"
                  onClick={e => e.preventDefault()}
               >
                  <i className="fas fa-bell fa-fw" />
                  <span className="badge badge-danger badge-counter">3+</span>
               </Link>
            </Dropdown>
         </li>
      );
   }
}
