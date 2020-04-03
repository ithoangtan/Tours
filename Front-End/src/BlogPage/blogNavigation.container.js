import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";

import { Input, message } from "antd";

const { Search } = Input;

export default class BlogHeaderContainer extends Component {
   state = {
      keySearch: "",
      onSearch: false
   };

   onChangeInputSearch = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
   };

   onSearch = keySearch => {
      //Chuyển hướng đến bên trang blog
      this.setState({ onSearch: true });
   };

   haveRedirect() {
      const { onSearch, keySearch } = this.state;
      if (onSearch === true) {
         message.loading(`"${keySearch}" searching...`, 1);
         this.setState({ onSearch: false });
         return <Redirect to={`/blog-category/${keySearch}/content`} />;
      }
   }

   render() {
      const { keySearch } = this.state;
      return (
         <div className="row ht-navigation-blog mb-2">
            {this.haveRedirect()}
            <nav className="navbar navbar-expand-lg navbar-light ht-width-100">
               <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon" />
               </button>
               <div
                  className="collapse navbar-collapse ht-d-flex-between-center"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <Link className="nav-link" to="/blog-category">
                           Trang chủ <span className="sr-only">(current)</span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/blog-category">
                           Khuyến mãi
                        </Link>
                     </li>
                     <li className="nav-item dropdown">
                        <Link
                           className="nav-link dropdown-toggle"
                           href="#"
                           id="navbarDropdown"
                           role="button"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false"
                        >
                           Muôn màu
                        </Link>
                        <div
                           className="dropdown-menu"
                           aria-labelledby="navbarDropdown"
                        >
                           <Link className="dropdown-item" to="blog-category">
                              Cảnh đẹp
                           </Link>
                           <Link className="dropdown-item" to="blog-category">
                              Khám phá
                           </Link>
                           <Link className="dropdown-item" to="blog-category">
                              Du lịch biển
                           </Link>
                        </div>
                     </li>
                     <li className="nav-item dropdown">
                        <Link
                           className="nav-link dropdown-toggle"
                           href="#"
                           id="navbarDropdown"
                           role="button"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false"
                        >
                           Tâm linh - Lịch sử
                        </Link>
                        <div
                           className="dropdown-menu"
                           aria-labelledby="navbarDropdown"
                        >
                           <Link className="dropdown-item" to="blog-category">
                              Di sản văn hóa
                           </Link>
                           <Link className="dropdown-item" to="blog-category">
                              Lễ hội - Sự kiện
                           </Link>
                        </div>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="blog-category">
                           Điểm đến
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="blog-category">
                           Ẩm thực
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="blog-category">
                           Mẹo du lịch
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="blog-category">
                           Đặt tour
                        </Link>
                     </li>
                  </ul>
                  <Search
                     placeholder="input search text"
                     name="keySearch"
                     value={keySearch}
                     enterButton="Search"
                     size="default"
                     onChange={this.onChangeInputSearch}
                     onSearch={this.onSearch}
                     style={{ width: "25%" }}
                  />
               </div>
            </nav>
         </div>
      );
   }
}
