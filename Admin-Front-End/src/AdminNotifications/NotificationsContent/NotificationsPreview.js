import React, { Component } from "react";

import { Typography, Rate, Tag, Button, Carousel, Tooltip, Icon } from "antd";
import TourDetailImages from "./tourDetailImage";

import moment from "moment";
import NumberFormat from "react-number-format";

const { Text, Paragraph } = Typography;

export default class TourPreview extends Component {
   state = {
      rowsDescribe: 2,
      size: "default"
   };

   onChange = rowsDescribe => {
      this.setState({ rowsDescribe });
   };

   componentWillMount() {
      this.setState({
         size: window.innerWidth < 768.01 ? "small" : "default"
      });
   }

   openNotification = () => {
      notification.open({
         message: "Notification Title",
         description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
         style: {
            width: 600
         }
      });
   };

   //Dữ liệu từ ngoài truyền vô ở đây chỉ có việc load lên thôi
   render() {
      return <div></div>;
   }
}
