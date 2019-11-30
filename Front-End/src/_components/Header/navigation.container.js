import React, { Component } from "react";

import Cookies from "js-cookie";

import { Link, Redirect } from "react-router-dom";

import { Menu, Dropdown, Icon, Button, Avatar, Badge, Tooltip } from "antd";

const menu = (
   <Menu>
      <Menu.Item key="0">
         <Link to="/tour">Tours</Link>
      </Menu.Item>
      <Menu.Item key="1">
         <Link to="/tour">Tours2</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>
         3rd menu item（disabled）
      </Menu.Item>
   </Menu>
);

export default class Navigation extends Component {
   constructor(props) {
      super(props);
      this.state = {
         logout: false
      };
   }

   menuAvartar() {
      return (
         <Menu>
            <Menu.Item>
               <Link
                  className="mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="#"
               >
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-600" />
                  Profile
               </Link>
            </Menu.Item>
            <Menu.Item>
               <Link
                  className="mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="#"
               >
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-600" />
                  Settings
               </Link>
            </Menu.Item>
            <Menu.Item>
               <Link
                  className="mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  to="#"
               >
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-600" />
                  Activity Log
               </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
               <Link
                  className="mr-2"
                  rel="noopener noreferrer"
                  onClick={this.logout}
               >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-600" />
                  Logout
               </Link>
            </Menu.Item>
         </Menu>
      );
   }

   renderAvartar() {
      const token = Cookies.get("token");
      const name = sessionStorage.getItem("name");
      const avatar = sessionStorage.getItem("avatar");
      if (name !== undefined && name !== null && name !== "") {
         return (
            <li className="nav-item ml-3 mr-2" style={{ alignSelf: "center" }}>
               <Tooltip placement="right" title={`Hi!, ${name}`}>
                  <Dropdown
                     overlay={this.menuAvartar()}
                     placement="bottomRight"
                  >
                     <Badge count={1}>
                        <Avatar
                           className="ht-avatar"
                           icon="user"
                           size="large"
                           src={token ? avatar : `/img/avatarDefault.jpg`}
                        />
                     </Badge>
                  </Dropdown>
               </Tooltip>
            </li>
         );
      } else
         return (
            <li className="nav-item ml-1 mr-1" style={{ alignSelf: "center" }}>
               <Link className="ml-2" rel="noopener noreferrer" to="/login">
                  <i className="fas fa-sign-in-alt fa-fw mr-2"></i>
                  Sign In
               </Link>
            </li>
         );
   }

   logout = () => {
      //Xóa session, xóa cookie, redirect về trang login
      sessionStorage.clear();
      Cookies.remove("token");
      this.setState({ logout: true });
   };

   haveRedirect() {
      if (this.state.logout === true) {
         this.setState({ logout: false });
         return <Redirect to="/login" />;
      }
   }

   render() {
      return (
         <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
         >
            {this.haveRedirect()}
            <div className="container">
               <Link to="/" className="navbar-brand">
                  <span>Tours</span>
               </Link>

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
                        <Link to="/" className="nav-link">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/about" className="nav-link">
                           About
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/destination" className="nav-link">
                           Destination
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Dropdown overlay={menu} className="nav-link">
                           <Link to="/">
                              Tours <Icon type="down" />
                           </Link>
                        </Dropdown>
                     </li>
                     <li className="nav-item">
                        <Link to="/blog" className="nav-link">
                           Blog
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                           Contact
                        </Link>
                     </li>
                     <li className="nav-item" style={{ alignSelf: "center" }}>
                        <Button
                           type="secondary"
                           icon="shopping-cart"
                           size={"large"}
                        >
                           Book Now
                        </Button>
                     </li>
                     {this.renderAvartar()}
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}
