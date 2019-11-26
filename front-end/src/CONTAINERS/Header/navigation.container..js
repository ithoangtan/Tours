import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Menu, Dropdown, Icon, Button } from "antd";

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
   render() {
      return (
         <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
         >
            <div className="container">
               <Link to="/" className="navbar-brand">
                  <span>Traveland</span>
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
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}
