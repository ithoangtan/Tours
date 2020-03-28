import React from "react";
import { List, message, Spin, Tooltip, Button } from "antd";
import reqwest from "reqwest";

import InfiniteScroll from "react-infinite-scroller";

import { Link } from "react-router-dom";

const fakeDataUrl =
   "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

export default class NoticeScroll extends React.Component {
   state = {
      data: [],
      loading: false,
      hasMore: true
   };

   componentDidMount() {
      this.fetchData(res => {
         this.setState({
            data: res.results
         });
      });
   }

   fetchData = callback => {
      reqwest({
         url: fakeDataUrl,
         type: "json",
         method: "get",
         contentType: "application/json",
         success: res => {
            callback(res);
         }
      });
   };

   handleInfiniteOnLoad = () => {
      let { data } = this.state;
      this.setState({
         loading: true
      });
      if (data.length > 14) {
         message.warning("Infinite List loaded all");
         this.setState({
            hasMore: false,
            loading: false
         });
         return;
      }
      this.fetchData(res => {
         data = data.concat(res.results);
         this.setState({
            data,
            loading: false
         });
      });
   };

   render() {
      return (
         <div className="shadow pl-2 pt-1">
            <div className="ht-title-and-action-notice ht-d-flex-row-space-between-baseline">
               <div className="ht-notice-text ml-1">Thông báo</div>
               <Tooltip title="Đánh dấu tất cả đã đọc">
                  <div className="ht-d-flex-col-center-center mr-1">
                     <Button>
                        <i
                           className="far fa-check-circle"
                           style={{ fontSize: "20px", color: "#1DA57A" }}
                        ></i>
                     </Button>
                  </div>
               </Tooltip>
            </div>
            <div className="demo-infinite-container mt-1">
               <InfiniteScroll
                  initialLoad={false}
                  pageStart={0}
                  loadMore={this.handleInfiniteOnLoad}
                  hasMore={!this.state.loading && this.state.hasMore}
                  useWindow={false}
               >
                  <div className="ht-notification-item-container">
                     <div className="ht-chanel-list">
                        <div className="ht-chanel">Mới</div>
                        <List
                           dataSource={this.state.data}
                           renderItem={item => (
                              <List.Item
                                 key={item.id}
                                 className="ht-no-boder pb-1 pt-1"
                              >
                                 <div className="ht-d-flex-row-space-between-baseline col-md-12">
                                    <div
                                       className="ht-icon-notice ht-d-flex-center-center col-md-1"
                                       style={{ color: "#40a9ff" }} // info
                                       // style={{ color: "#73d13d" }} // sucess
                                       // style={{ color: "#ff4d4f" }} // error
                                       // style={{ color: "#ffec3d" }} // warning
                                    >
                                       <i className="fas fa-info-circle "></i>
                                       {/* <i class="fas fa-check-circle"></i>
                                       sucess
                                       <i class="fas fa-exclamation-circle"></i>
                                       error
                                       <i class="fas fa-exclamation-triangle"></i>
                                       warning */}
                                    </div>
                                    <div className="ht-d-flex-col-start-start col-md ht-title-and-date">
                                       <div className="ht-info-main">
                                          <strong>Đây là tình huống gì</strong>
                                          đâyĐây là tình đâyĐây{" "}
                                          <strong>là tình huống</strong> gì đâ
                                       </div>
                                       <div className="ht-date">
                                          07/8/2020 (5 giờ trước)
                                       </div>
                                    </div>
                                    <Tooltip title="Đánh dấu đã đọc">
                                       <Link
                                          className="ht-was-read ht-d-flex-center-center"
                                          style={{ color: "#40a9ff" }} // info
                                       >
                                          <i className="fas fa-circle ht-unread"></i>
                                          <i className="far fa-check-circle ht-read"></i>
                                       </Link>
                                    </Tooltip>
                                 </div>
                              </List.Item>
                           )}
                        >
                           {this.state.loading && this.state.hasMore && (
                              <div className="demo-loading-container">
                                 <Spin />
                              </div>
                           )}
                        </List>
                     </div>

                     <div className="ht-chanel-list mt-4">
                        <div className="ht-chanel">Trước đó</div>
                        <List
                           dataSource={this.state.data}
                           renderItem={item => (
                              <List.Item
                                 key={item.id}
                                 className="ht-no-boder pb-1 pt-1"
                              >
                                 <div className="ht-d-flex-row-space-between-baseline col-md-12">
                                    <div
                                       className="ht-icon-notice ht-d-flex-center-center col-md-1"
                                       style={{ color: "#73d13d" }} // sucess
                                    >
                                       {/* <i className="fas fa-info-circle "></i> */}
                                       <i class="fas fa-check-circle"></i>
                                       {/* sucess */}
                                       {/* <i class="fas fa-exclamation-circle"></i>
                                       error
                                       <i class="fas fa-exclamation-triangle"></i>
                                       warning */}
                                    </div>
                                    <div className="ht-d-flex-col-start-start col-md ht-title-and-date">
                                       <div className="ht-info-main">
                                          <strong>Đây là tình huống gì</strong>
                                          đâyĐây là tình đâyĐây{" "}
                                          <strong>là tình huống</strong> gì đâ
                                       </div>
                                       <div className="ht-date">
                                          07/8/2020 (5 giờ trước)
                                       </div>
                                    </div>
                                    <Tooltip title="Đánh dấu đã đọc">
                                       <Link
                                          className="ht-was-read ht-d-flex-center-center"
                                          style={{ color: "#73d13d" }} // sucess
                                       >
                                          <i className="fas fa-circle ht-unread"></i>
                                          <i className="far fa-check-circle ht-read"></i>
                                       </Link>
                                    </Tooltip>
                                 </div>
                              </List.Item>
                           )}
                        >
                           {this.state.loading && this.state.hasMore && (
                              <div className="demo-loading-container">
                                 <Spin />
                              </div>
                           )}
                        </List>
                     </div>
                  </div>
               </InfiniteScroll>
            </div>
         </div>
      );
   }
}
