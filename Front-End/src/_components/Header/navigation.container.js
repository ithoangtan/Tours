import React, { Component } from "react";

import Cookies from "js-cookie";

import { Link, Redirect } from "react-router-dom";

import { Menu, Dropdown, Icon, Button, Avatar, Badge, Tooltip } from "antd";

import { getSignCookie } from "../../_commons/auth.service";

const menuVN = (
   <div className="ht-hero-menu">
      <Menu>
         <Menu.ItemGroup title="Bắc">
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
            <Menu.Item key="3" className="ht-hero-menu-item">
               3rd menu item
            </Menu.Item>
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
         </Menu.ItemGroup>
         <Menu.Item key="1">
            <Link to="/tour">Tours2</Link>
         </Menu.Item>
         <Menu.Item key="3">3rd menu </Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Trung">
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
            <Menu.Item key="3" className="ht-hero-menu-item">
               3rd menu item
            </Menu.Item>
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
         </Menu.ItemGroup>
         <Menu.Item key="1">
            <Link to="/tour">Tours2</Link>
         </Menu.Item>
         <Menu.Item key="3">3rd menu </Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Nam">
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
            <Menu.Item key="3" className="ht-hero-menu-item">
               3rd menu item
            </Menu.Item>
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
         </Menu.ItemGroup>
         <Menu.Item key="1">
            <Link to="/tour">Tours2</Link>
         </Menu.Item>
         <Menu.Item key="3">3rd menu item ）</Menu.Item>
      </Menu>
   </div>
);

const menuWorld = (
   <div className="ht-hero-menu">
      <Menu>
         <Menu.ItemGroup title="Đông Á">
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
            <Menu.Item key="3" className="ht-hero-menu-item">
               3rd menu item
            </Menu.Item>
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
         </Menu.ItemGroup>
         <Menu.Item key="1">
            <Link to="/tour">Tours2</Link>
         </Menu.Item>
         <Menu.Item key="3">3rd menu item ）</Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Tây Á">
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
            <Menu.Item key="3" className="ht-hero-menu-item">
               3rd menu item
            </Menu.Item>
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
         </Menu.ItemGroup>
         <Menu.Item key="1">
            <Link to="/tour">Tours2</Link>
         </Menu.Item>
         <Menu.Item key="3">3rd menu item ）</Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu Âu">
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
            <Menu.Item key="3" className="ht-hero-menu-item">
               3rd menu item
            </Menu.Item>
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
         </Menu.ItemGroup>
         <Menu.Item key="1">
            <Link to="/tour">Tours2</Link>
         </Menu.Item>
         <Menu.Item key="3">3rd menu </Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu Mỹ">
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
            <Menu.Item key="3" className="ht-hero-menu-item">
               3rd menu item
            </Menu.Item>
            <Menu.Item key="0" className="ht-hero-menu-item">
               <Link to="/tour">Tours</Link>
            </Menu.Item>
            <Menu.Item key="1" className="ht-hero-menu-item">
               <Link to="/tour">Tours2</Link>
            </Menu.Item>
         </Menu.ItemGroup>
         <Menu.Item key="1">
            <Link to="/tour">Tours2</Link>
         </Menu.Item>
         <Menu.Item key="3">3rd menu </Menu.Item>
      </Menu>
   </div>
);

export default class Navigation extends Component {
   constructor(props) {
      super(props);
      this.state = {
         logout: false
      };
   }

   menuAvartar() {
      const role = getSignCookie("role");
      console.log(role);

      return (
         <Menu>
            <Menu.Item>
               <Link className="mr-2" rel="noopener noreferrer" to="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-600" />
                  Profile
               </Link>
            </Menu.Item>
            <Menu.Item>
               <Link className="mr-2" rel="noopener noreferrer" to="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-600" />
                  Settings
               </Link>
            </Menu.Item>
            <Menu.Item>
               <Link className="mr-2" rel="noopener noreferrer" to="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-600" />
                  Activity Log
               </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
               disabled={
                  role.role === "admin" || role.role === "administrator"
                     ? false
                     : true
               }
            >
               <Link
                  className="mr-2"
                  rel="noopener noreferrer"
                  to="/admin"
                  disabled={
                     role.role === "admin" || role.role === "administrator"
                        ? false
                        : true
                  }
               >
                  <i className="fas fa-tachometer-alt fa-sm fa-fw mr-2 text-gray-600" />
                  Tour Manage (Admin)
               </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
               <Link
                  to="#"
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
      Cookies.remove("role");
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
                           HOME
                        </Link>
                     </li>
                     {/* <li className="nav-item">
                        <Link to="/destination" className="nav-link">
                           Destination
                        </Link>
                     </li> */}
                     <li className="nav-item">
                        <Dropdown overlay={menuWorld} className="nav-link">
                           <Link to="/">
                              Quốc Tế <Icon type="down" />
                           </Link>
                        </Dropdown>
                     </li>
                     <li className="nav-item">
                        <Dropdown overlay={menuVN} className="nav-link">
                           <Link to="/">
                              Việt Nam <Icon type="down" />
                           </Link>
                        </Dropdown>
                     </li>
                     <li className="nav-item">
                        <Link to="/blog" className="nav-link">
                           Blog
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/about" className="nav-link">
                           About
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
