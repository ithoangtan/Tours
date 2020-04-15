import React from "react";
import { List, message, Spin, Tooltip, Button } from "antd";
import reqwest from "reqwest";
import Cookies from "js-cookie";

import InfiniteScroll from "react-infinite-scroller";

import { API_ENDPOINT } from "../_constants/index.constants";
import moment from "moment";

import { getParamTokenWithName } from "../_commons/auth.service";
import { Link } from "react-router-dom";

const _LIMIT = 10;

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

const idAccount = getParamTokenWithName("idAccount");

export default class NoticeScroll extends React.Component {
   state = {
      data: [],
      loading: false,
      hasMore: true,
      limit: _LIMIT, // Số dòng lấy
      offset: 0, // Số dòng bỏ qua
      length: 0,
   };

   componentDidMount() {
      this.fetchData((res) => {
         this.setState({
            data: res[0],
            length: res[1][0].length > 40 ? 40 : res[1][0].length,
            offset: this.state.offset + _LIMIT,
         });
      });
   }

   fetchData = async (callback) => {
      reqwest({
         url: `${API_ENDPOINT}/notifications?limit=${this.state.limit}&offset=${this.state.offset}`,
         type: "json",
         headers: { Authentication: getCookie("token") },
         method: "get",
         contentType: "application/json",
         success: (res) => {
            callback(res);
         },
      });
   };

   handleInfiniteOnLoad = () => {
      let { data } = this.state;
      this.setState({
         loading: true,
      });
      if (data.length > this.state.length - 1) {
         message.warning("Infinite List loaded all");
         this.setState({
            hasMore: false,
            loading: false,
         });
         return;
      }
      this.fetchData((res) => {
         data = data.concat(res[0]);
         this.setState({
            data,
            loading: false,
            offset: this.state.offset + _LIMIT,
         });
      });
   };

   styleType(type) {
      let style = {
         color: "",
         icon: "",
      };
      if (type === "Info" || type === "info" || type === "i") {
         style.color = "#40a9ff";
         style.icon = "fas fa-info-circle";
      }
      if (type === "Sucess" || type === "sucess" || type === "s") {
         style.color = "#73d13d";
         style.icon = "fas fa-check-circle";
      }
      if (type === "Error" || type === "error" || type === "e") {
         style.color = "#ff4d4f";
         style.icon = "fas fa-exclamation-circle";
      }
      if (type === "Warning" || type === "warning" || type === "w") {
         style.color = "#ffec3d";
         style.icon = "fas fa-exclamation-triangle";
      }
      return style;
   }

   renderStyleNotification(type) {
      let style = this.styleType(type);
      return (
         <div
            className="ht-icon-notice ht-d-flex-center-center col-md-1"
            style={{
               color: style.color,
            }}
         >
            <i className={style.icon}></i>
         </div>
      );
   }

   // Actions read || unread
   onReadAndUnread = (event, item) => {
      let data = this.state.data;
      for (let i = 0; i < data.length; i++) {
         if (data[i].idNotification === item.idNotification)
            data[i].status = "read";
      }
      this.setState({ data });

      // fetch data changed
   };

   onReadAll = () => {
      let data = this.state.data;
      for (let i = 0; i < data.length; i++) {
         data[i].status = "read";
      }
      this.setState({ data });

      // fetch data changed all read
   };

   render() {
      return (
         <div className="shadow pl-2 pt-1">
            <div className="ht-title-and-action-notice ht-d-flex-row-space-between-baseline">
               <div className="ht-notice-text ml-1">Thông báo</div>
               <Tooltip title="Đánh dấu tất cả đã đọc (You can see below)">
                  <div className="ht-d-flex-col-center-center mr-1">
                     <Button onClick={this.onReadAll}>
                        <i
                           className="far fa-check-circle"
                           style={{
                              fontSize: "20px",
                              color: "#1DA57A",
                           }}
                        ></i>
                     </Button>
                  </div>
               </Tooltip>
            </div>
            <div className="demo-infinite-container mt-1">
               {idAccount > 0 ? (
                  <InfiniteScroll
                     initialLoad={false}
                     pageStart={0}
                     loadMore={this.handleInfiniteOnLoad}
                     hasMore={!this.state.loading && this.state.hasMore}
                     useWindow={false}
                  >
                     <div className="ht-notification-item-container">
                        <div className="ht-chanel-list">
                           {/* <div className="ht-chanel">Mới</div> */}
                           <List
                              dataSource={this.state.data}
                              renderItem={(item) => (
                                 <List.Item
                                    key={item.id}
                                    className="ht-no-boder pb-1 pt-1"
                                 >
                                    <div className="ht-d-flex-row-space-between-baseline col-md-12">
                                       {this.renderStyleNotification(item.type)}
                                       <div
                                          className={
                                             item.status === "read"
                                                ? "ht-d-flex-col-start-start col-md ht-title-and-date"
                                                : "ht-d-flex-col-start-start col-md ht-title-and-date"
                                          }
                                       >
                                          <div
                                             className={
                                                item.status === "read"
                                                   ? `ht-info-main-read`
                                                   : `ht-info-main`
                                             }
                                          >
                                             <strong className="mr-1">
                                                {item.title}
                                             </strong>
                                             {item.contentNotification}
                                          </div>
                                          <div
                                             className={
                                                item.status === "read"
                                                   ? "ht-date-read"
                                                   : "ht-date"
                                             }
                                          >
                                             {moment(item.dateTime).format(
                                                "HH:mm A DD/MM/YYYY"
                                             )}{" "}
                                             {moment(item.dateTime).fromNow()}
                                          </div>
                                       </div>
                                       <Tooltip
                                          title={
                                             item.status === "read"
                                                ? ""
                                                : "Đánh dấu đã đọc"
                                          }
                                       >
                                          <div
                                             to="ithoangtan"
                                             className="ht-was-read ht-d-flex-center-center ht-actions-read-and-unread"
                                             style={{
                                                color: this.styleType(item.type)
                                                   .color,
                                             }}
                                             onClick={(event) =>
                                                this.onReadAndUnread(
                                                   event,
                                                   item
                                                )
                                             }
                                          >
                                             {item.status === "read" ? (
                                                <i className="far fa-check-circle ht-read"></i>
                                             ) : (
                                                <i className="fas fa-circle ht-unread"></i>
                                             )}
                                          </div>
                                       </Tooltip>
                                    </div>
                                 </List.Item>
                              )}
                           >
                              {this.state.loading && this.state.hasMore && (
                                 <div className="demo-loading-container">
                                    <Spin tip="Loading..." />
                                 </div>
                              )}
                           </List>
                        </div>
                     </div>
                  </InfiniteScroll>
               ) : (
                  <div className="ht-no-account ht-d-flex-center-center">
                     Vui lòng đăng nhập để sử dụng chức năng này
                     <Link to="/login">
                        <Button>Đăng nhập</Button>
                     </Link>
                  </div>
               )}
            </div>
         </div>
      );
   }
}
