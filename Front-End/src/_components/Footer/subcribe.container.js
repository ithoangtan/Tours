import React, { Component } from "react";

import { Input, AutoComplete, Button, notification } from "antd";

const InputGroup = Input.Group;

export default class SubcribeContainer extends Component {
   state = {
      dataSource: [],
      size: "default"
   };

   handleChange = value => {
      this.setState({
         dataSource:
            !value || value.indexOf("@") >= 0
               ? [`${value}.com`]
               : [`${value}@gmail.com`, `${value}@outlook.com`]
      });
   };

   componentDidMount() {
      this.setState({
         size: window.innerWidth > 576.98 ? "default" : "small"
      });
   }

   openNotification = () => {
      notification.open({
         message: "Notification Title",
         description: "This is the content of the notification. ",
         onClick: () => {
            console.log("Notification Clicked!");
         },
         placement: "bottomLeft"
      });
   };

   render() {
      const { size } = this.state;
      return (
         <div className="container ht-no-p-m">
            <div className="row d-flex justify-content-center">
               <div className="col-md-12 text-wrap text-center heading-section ftco-animate">
                  <div className="row d-flex justify-content-center mt-2 mb-2">
                     <div className="col-md-12 d-flex-col">
                        <InputGroup compact>
                           <AutoComplete
                              dataSource={this.state.dataSource}
                              style={{ width: "100%" }}
                              onChange={this.handleChange}
                              placeholder="Email"
                              size={size}
                           />
                        </InputGroup>
                        <Button
                           type="primary"
                           size={size}
                           className="col-md-12 mt-1"
                           onClick={this.openNotification}
                        >
                           Subscribe us!
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
