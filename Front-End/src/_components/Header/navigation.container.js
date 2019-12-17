import React, { Component } from "react";

import Cookies from "js-cookie";

import { Link, Redirect } from "react-router-dom";

import { Menu, Dropdown, Icon, Avatar, Badge, Tooltip } from "antd";

import { getSignCookie } from "../../_commons/auth.service";

const North = [
   { name: "Hà Nội", key: "ha-noi" },
   { name: "Hạ Long", key: "ha-long-bay" },
   { name: "Sa Pa", key: "sa-pa" },
   { name: "Ninh Bình", key: "ninh-binh" },
   { name: "Ninh Hòa", key: "ninh-hoa" },
   { name: "Hòa Bình", key: "hoa-binh" },
   { name: "Thanh Hóa", key: "thanh-hoa" }
];
const Central = [
   { name: "Phan Thiết", key: "phan-thiet" },
   { name: "Nha Trang", key: "nha-trang" },
   { name: "Đà Lạt", key: "da-lat" },
   { name: "Tây Nguyên", key: "tay-nguyen" },
   {
      name: "Tuy Hòa - Quy Nhơn - Quảng Ngãi",
      key: "tuy-hoa-quy-nhon-quang-ngai"
   },
   { name: "Hội An - Đà Nẵng", key: "hoi-an-da-nang" },
   { name: "Huế - Quảng Bình", key: "hue-quang-binh" }
];
const South = [
   { name: "Phú Quốc", key: "phu-quoc}" },
   { name: "Miền Tây", key: "mien-tay" },
   { name: "Côn Đảo", key: "con-dao" },
   { name: "Hồ Tràm", key: "ho-tram" }
];
const bestTour = [
   { name: "Ưu đãi Tour Tết Nguyên Đán", key: "uu-dai-tet-nguyen-dan" },
   { name: "Tour năm mới 2020", key: "tour-nam-moi-2020" },
   { name: "Các mùa trong nước", key: "cac-mua-trong-nuoc" },
   { name: "Tour tự do", key: "tour-tu-do" },
   { name: "Tour liên tuyến", key: "tour-lien-tuyen" },
   { name: "Tour mạo hiểm", key: "tour-mao-hiem" },
   { name: "Tour hành hương", key: "tour-hanh-huong" }
];

const Asia1 = [
   { name: "Campuchia", key: "campuchia" },
   { name: "Đài Loan", key: "dai-loan" },
   { name: "Hàn Quốc", key: "han-quoc" },
   { name: "HongKong", key: "hongkong" },
   { name: "Malaysia", key: "malaysia" },
   { name: "Myanmar", key: "myanmar" },
   { name: "Nhật Bản", key: "nhat-ban" },
   { name: "Singapore", key: "singapore" }
];

const Asia2 = [
   { name: "Thái Lan", key: "thai-lan" },
   { name: "Trung Quốc", key: "trung-quoc" },
   { name: "Ả Rập", key: "a-rap" },
   { name: "Nga", key: "nga" },
   { name: "Brunei", key: "brunei" },
   { name: "Lào", key: "lao" },
   { name: "Indonesia", key: "indonesia" },
   { name: "Triều Tiên", key: "trieu-tien" },
   { name: "Philippines", key: "philippines" },
   { name: "Ấn Độ", key: "an-do" },
   { name: "Qatar", key: "qatar" }
];
const Euro = [
   { name: "Anh", key: "anh" },
   { name: "Đức", key: "duc" },
   { name: "Scotland", key: "scotland" },
   { name: "Thổ Nhĩ Kỳ", key: "tho-nhi-ky" },
   { name: "Ý", key: "y" },
   { name: "Pháp", key: "phap" }
];

const otherContinents = [
   { name: "châu Úc", key: "chau-uc" },
   { name: "châu Mỹ", key: "chau-my" },
   { name: "New Zealand", key: "new-zealand" },
   { name: "Cuba", key: "cuba" },
   { name: "Ma-rốc", key: "ma-roc" },
   { name: "Nam Mỹ", key: "nam-my" },
   { name: "Canada", key: "canada" }
];
const vipTour = [
   { name: "Du thuyền cao cấp", key: "du-thuyen-cao-cap" },
   { name: "Mùa hòa anh đào", key: "mua-hoa-anh-dao" },
   { name: "Lặng biển", key: "lang-bien" },
   { name: "Dubai", key: "dubai" }
];

const menuVN = (
   <div className="ht-hero-menu">
      <Menu>
         <Menu.ItemGroup title="Miền Bắc" className="ht-hero-menu-title">
            {North.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Miền Trung" className="ht-hero-menu-title">
            {Central.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Miền Nam" className="ht-hero-menu-title">
            {South.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Best Tours" className="ht-hero-menu-title">
            {bestTour.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
      </Menu>
   </div>
);

const menuWorld = (
   <div className="ht-hero-menu">
      <Menu>
         <Menu.ItemGroup title="Châu Á" className="ht-hero-menu-title">
            {Asia1.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu Á" className="ht-hero-menu-title">
            {Asia2.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu Âu" className="ht-hero-menu-title">
            {Euro.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu lục khác" className="ht-hero-menu-title">
            {otherContinents.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu Mỹ" className="ht-hero-menu-title">
            {vipTour.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link to={`${provincial.key}`}>{provincial.name}</Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Item></Menu.Item>
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
                           Home
                        </Link>
                     </li>
                     {/* <li className="nav-item">
                        <Link to="/destination" className="nav-link">
                           Destination
                        </Link>
                     </li> */}
                     <li className="nav-item">
                        <Dropdown overlay={menuWorld} className="nav-link">
                           <Link to="/tour">
                              Quốc Tế <Icon type="down" />
                           </Link>
                        </Dropdown>
                     </li>
                     <li className="nav-item">
                        <Dropdown overlay={menuVN} className="nav-link">
                           <Link to="/tour">
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

                     {/* <li className="nav-item" style={{ alignSelf: "center" }}>
                        <Button
                           type="secondary"
                           icon="shopping-cart"
                           size={"large"}
                        >
                           Book Now
                        </Button>
                     </li> */}
                     {this.renderAvartar()}
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}
