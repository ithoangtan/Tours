import logo from "./logo-trans-web-400px.png";
import "../../commons/app.css";

import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Menu, Icon, Row, Col } from "antd";

const { SubMenu } = Menu;

export default class PageHeader extends Component {
   state = {
      current: "appstore"
   };

   handleClick = e => {
      console.log("click ", e);
      this.setState({
         current: e.key
      });
   };
   render() {
      return (
         <Row type="flex" justify="space-around" align="bottom">
            <Col>
               {/* logo */}
               <Link to="/">
                  <img className="header-logo" src={logo} />
               </Link>
            </Col>
            <Col>
               {/* Menu */}
               <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  inlineIndent={30}
               >
                  <Menu.Item key="appstore">
                     <Icon type="appstore" />
                     Navigation One
                  </Menu.Item>
                  <Menu.Item key="sketch">
                     <Icon type="sketch" />
                     Navigation Two
                  </Menu.Item>
                  <SubMenu
                     title={
                        <span className="submenu-title-wrapper">
                           <Icon type="setting" />
                           Navigation Three - Submenu
                        </span>
                     }
                  >
                     <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                     </Menu.ItemGroup>
                     <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                     </Menu.ItemGroup>
                  </SubMenu>
                  <Menu.Item key="alipay">
                     <a
                        href="https://ant.design"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Navigation Four - Link
                     </a>
                  </Menu.Item>
               </Menu>
            </Col>
         </Row>
      );
   }
}
