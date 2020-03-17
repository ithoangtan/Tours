import React, { Component } from "react";

import Cookies from "js-cookie";

import { Link, Redirect } from "react-router-dom";

import { Menu, Dropdown, Icon, Avatar, Badge, Tooltip } from "antd";

import { getSignCookie } from "../../_commons/auth.service";

import { API_ENDPOINT } from "../../_constants/index.constants";
import ProfileComponent from "../Profile/profile.component";

const arrayVietNamMobile = [
   { name: "Miền Bắc", key: "mien-bac" },
   { name: "Miền Trung", key: "mien-trung" },
   { name: "Miền Nam", key: "mien-nam" },
   { name: "Tour Tốt nhất", key: "best-tour" }
];
const arrayWorldMobile = [
   { name: "Đông Nam Á", key: "dong-nam-a" },
   { name: "Châu Á", key: "chau-a" },
   { name: "Châu Âu", key: "chau-au" },
   { name: "Châu lục khác", key: "chau-luc-khac" }
];

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
   { name: "Nhật Bản", key: "nhat-ban" },
   { name: "Hàn Quốc", key: "han-quoc" },
   { name: "Singapore", key: "singapore" },
   { name: "Lào", key: "lao" },
   { name: "Thái Lan", key: "thai-lan" },
   { name: "Campuchia", key: "campuchia" },
   { name: "Malaysia", key: "malaysia" },
   { name: "Myanmar", key: "myanmar" },
   { name: "Indonesia", key: "indonesia" }
];

const Asia2 = [
   { name: "Trung Quốc", key: "trung-quoc" },
   { name: "Đài Loan", key: "dai-loan" },
   { name: "HongKong", key: "hongkong" },
   { name: "Qatar", key: "qatar" },
   { name: "Nga", key: "nga" },
   { name: "Ấn Độ", key: "an-do" },
   { name: "Philippines", key: "philippines" },
   { name: "Ả Rập", key: "a-rap" },
   { name: "Brunei", key: "brunei" }
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
            <Menu.Divider></Menu.Divider>
            {North.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Miền Nam" className="ht-hero-menu-title">
            <Menu.Divider></Menu.Divider>
            {South.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Miền Trung" className="ht-hero-menu-title">
            <Menu.Divider></Menu.Divider>
            {Central.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Best Tours" className="ht-hero-menu-title">
            <Menu.Divider></Menu.Divider>
            {bestTour.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
   </div>
);

const menuWorld = (
   <div className="ht-hero-menu">
      <Menu>
         <Menu.ItemGroup title="Châu Á" className="ht-hero-menu-title">
            <Menu.Divider></Menu.Divider>
            {Asia1.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu Á" className="ht-hero-menu-title">
            <Menu.Divider></Menu.Divider>
            {Asia2.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu Âu" className="ht-hero-menu-title">
            <Menu.Divider></Menu.Divider>
            {Euro.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu lục khác" className="ht-hero-menu-title">
            <Menu.Divider></Menu.Divider>
            {otherContinents.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
      <Menu>
         <Menu.ItemGroup title="Châu Mỹ" className="ht-hero-menu-title">
            <Menu.Divider></Menu.Divider>
            {vipTour.map(provincial => {
               return (
                  <Menu.Item key={provincial.key} className="ht-hero-menu-item">
                     <Link
                        to={{
                           pathname: `/tour/search/${provincial.key}/2019-1-1/2028-8-8/address`
                        }}
                     >
                        {provincial.name}
                     </Link>
                  </Menu.Item>
               );
            })}
         </Menu.ItemGroup>
         <Menu.Divider></Menu.Divider>
      </Menu>
   </div>
);

export default class Navigation extends Component {
   constructor(props) {
      super(props);
      this.state = {
         logout: false,
         visibleProfile: false,
         size: "default"
      };
   }

   showDrawer = () => {
      this.setState({
         visibleProfile: true
      });
   };
   onClose = () => {
      this.setState({
         visibleProfile: false
      });
   };

   menuAvartar() {
      const role = getSignCookie("role");
      return (
         <Menu>
            <Menu.Item>
               <Link
                  className="mr-2"
                  rel="noopener noreferrer"
                  to="#"
                  onClick={this.showDrawer}
               >
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
            <li
               className="nav-item ht-nav-item ml-3 mr-2"
               style={{ alignSelf: "center" }}
            >
               <ProfileComponent
                  visible={this.state.visibleProfile}
                  onClose={this.onClose}
               />
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
                           src={
                              token
                                 ? API_ENDPOINT + avatar
                                 : `${API_ENDPOINT}/img/avatarDefault.jpg`
                           }
                        />
                     </Badge>
                  </Dropdown>
               </Tooltip>
            </li>
         );
      } else
         return (
            <li className="nav-item ht-nav-item">
               <Link
                  className="ml-2 nav-link ht-nav-link"
                  rel="noopener noreferrer"
                  to="/login"
               >
                  <i className="fas fa-sign-in-alt"></i> Sign In
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

   componentDidMount() {
      this.setState({ size: window.innerWidth > 557.98 ? "large" : "small" });
   }

   renderMenuWorld() {
      const result = arrayWorldMobile.map((item, index) => {
         return (
            <Link
               className="dropdown-item ht-nav-link"
               to={`tour/search/${item.key}`}
               key={index}
            >
               {item.name}
            </Link>
         );
      });
      return result;
   }
   renderMenuVietNam() {
      const result = arrayVietNamMobile.map((item, index) => {
         return (
            <Link
               className="dropdown-item ht-nav-link"
               to={`tour/search/${item.key}`}
               key={index}
            >
               {item.name}
            </Link>
         );
      });
      return result;
   }

   render() {
      const { size } = this.state;
      return (
         <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light container ht-nav-container"
            id="ftco-navbar"
         >
            {this.haveRedirect()}
            <Link to="/">
               <img
                  src="/logo192.png"
                  alt="Tours"
                  className="ht-logo-nav"
               ></img>
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
               <ul className="navbar-nav ml-auto ht-navbar-nav">
                  <li className="nav-item ht-nav-item">
                     <Link to="/tour" className="nav-link ht-nav-link">
                        <i className="fas fa-piggy-bank"></i> % Ưu đãi
                     </Link>
                  </li>
                  {size === "small" ? (
                     <>
                        <li className="nav-item dropdown ht-nav-item">
                           {/* Mobile MENU */}
                           <Link
                              className="nav-link dropdown-toggle ht-nav-link"
                              to="tour/search/vn"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                           >
                              Việt Nam
                           </Link>
                           <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                           >
                              {this.renderMenuVietNam()}
                           </div>
                        </li>
                        <li className="nav-item dropdown ht-nav-item">
                           <Link
                              className="nav-link dropdown-toggle ht-nav-link"
                              to="tour/search/vn"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                           >
                              Thế Giới
                           </Link>
                           <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                           >
                              {this.renderMenuWorld()}
                           </div>
                        </li>
                     </>
                  ) : (
                     <>
                        {/* Desktop MENU*/}
                        <li className="nav-item ht-nav-item">
                           <Dropdown
                              overlay={menuVN}
                              className="nav-link ht-nav-link"
                           >
                              <Link to="tour/search/vn">
                                 <i className="fas fa-map-marker-alt"></i> Việt
                                 Nam
                                 <Icon type="down" />
                              </Link>
                           </Dropdown>
                        </li>
                        <li className="nav-item ht-nav-item">
                           <Dropdown
                              overlay={menuWorld}
                              className="nav-link ht-nav-link"
                           >
                              <Link to="tour/search/world">
                                 <i className="fas fa-globe"></i> Quốc tế
                                 <Icon type="down" />
                              </Link>
                           </Dropdown>
                        </li>
                     </>
                  )}

                  <li className="nav-item ht-nav-item">
                     <Link to="/blog" className="nav-link ht-nav-link">
                        <i className="fas fa-blog"></i> Cẩm nang du lịch
                     </Link>
                  </li>
                  <li className="nav-item ht-nav-item">
                     <Link to="/about" className="nav-link ht-nav-link">
                        <i className="fas fa-users-cog"></i> About
                     </Link>
                  </li>
                  {this.renderAvartar()}
               </ul>
            </div>
         </nav>
      );
   }
}
