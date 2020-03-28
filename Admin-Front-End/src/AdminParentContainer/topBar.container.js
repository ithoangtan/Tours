import React, { Component } from "react";

import TopBarSearchVisibleXS from "./topBarSearchVisibleXS";
import TopBarNotice from "./topBarNotice";
import TopBarMail from "./topBarMail";
import TopBarUserActions from "./topBarUserActions";

import { Input } from "antd";

const { Search } = Input;

export default class TopBarContainer extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow mb-3">
            {/* Topbar Search */}
            <form className="">
               <Search
                  placeholder="input search"
                  enterButton="Search"
                  onSearch={value => console.log(value)}
                  className="ml-2"
               />
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
