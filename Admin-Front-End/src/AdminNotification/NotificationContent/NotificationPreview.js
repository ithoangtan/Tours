import React, { Component } from "react";

import { Tooltip } from "antd";
import moment from "moment";

export default class TourPreview extends Component {
   state = {
      size: "default",
   };

   componentWillMount() {
      this.setState({
         size: window.innerWidth < 768.01 ? "small" : "default",
      });
   }

   colorNotification(type) {
      let color = "#40a9ff";
      let iconClass = "fas fa-info-circle";
      if (type === "sucess") {
         color = "#73d13d";
         iconClass = "fas fa-check-circle";
      }
      if (type === "error") {
         color = "#ff4d4f";
         iconClass = "fas fa-exclamation-circle";
      }
      if (type === "warning") {
         color = "#ffec3d";
         iconClass = "fas fa-exclamation-triangle";
      }
      return { color, iconClass };
   }

   renderStyleAndIcon() {
      const { type } = this.props.notification;
      let style = this.colorNotification(type);
      return (
         <div
            className="ht-icon-notice ht-d-flex-center-center col-md-1"
            style={{ color: style.color }} // info
         >
            <i className={style.iconClass}></i>
         </div>
      );
   }

   //Dữ liệu từ ngoài truyền vô ở đây chỉ có việc load lên thôi
   render() {
      const { notification } = this.props;
      console.log(notification);

      const style = this.colorNotification(notification.type);
      return (
         <div className="ht-no-boder pb-1 pt-1 card">
            <div className="ht-d-flex-row-space-between-baseline col-md-12">
               {this.renderStyleAndIcon()}
               <div className="ht-d-flex-col-start-start col-md ht-title-and-date">
                  <div className="ht-info-main">
                     <strong>{notification.title}</strong>
                     {notification.contentNotification}
                  </div>
                  <div className="ht-date">
                     {moment(notification.dateAdded).format("HH:mm DD/MM/YYYY")}{" "}
                     {` (${moment(notification.dateAdded).fromNow()})`}
                  </div>
               </div>
               <Tooltip title="Đánh dấu đã đọc">
                  <a
                     href="ithoangtan"
                     className="ht-was-read ht-d-flex-center-center"
                     style={{ color: style.color }} // info
                  >
                     <i className="fas fa-circle ht-unread"></i>
                     {/* <i className="far fa-check-circle ht-read"></i> */}
                  </a>
               </Tooltip>
            </div>
         </div>
      );
   }
}
