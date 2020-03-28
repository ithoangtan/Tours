import React, { Component } from "react";

import { Tabs, Tooltip, Drawer, Form, Button, Col, Row, Input } from "antd";

const { TabPane } = Tabs;
export default class MailFeedbackContainer extends Component {
   state = {
      status: "unread",
      visibleReply: false,
      visibleViewMail: false
   };

   showDrawerReply = () => {
      this.setState({
         visibleReply: true
      });
   };
   showDrawerViewMail = () => {
      this.setState({
         visibleViewMail: true
      });
   };

   onClose = () => {
      this.setState({
         visibleReply: false,
         visibleViewMail: false
      });
   };

   // ithoangtan
   // Đối với các actions thì phải thêm sự kiện click và message antd
   renderContentMail(chanel) {
      return (
         <>
            {/* Reply */}
            <Drawer
               title={`Re: subject of mail`}
               width={480}
               onClose={this.onClose}
               visible={this.state.visibleReply}
               bodyStyle={{ paddingBottom: 80 }}
            >
               <Form layout="vertical" hideRequiredMark>
                  <Row gutter={16}>
                     <Col span={24}>
                        <Form.Item
                           name="subject"
                           label="Subject:"
                           rules={[
                              {
                                 required: true,
                                 message: "Please enter user subject"
                              }
                           ]}
                        >
                           <Input placeholder="Please enter user subject" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={24}>
                        <Form.Item
                           name="content"
                           label="Content"
                           rules={[
                              {
                                 required: true,
                                 message: "please enter url content"
                              }
                           ]}
                        >
                           <Input.TextArea
                              rows={17}
                              placeholder="please enter url content"
                           />
                        </Form.Item>
                     </Col>
                  </Row>
               </Form>
               <div
                  style={{
                     position: "absolute",
                     right: 0,
                     bottom: 0,
                     width: "100%",
                     borderTop: "1px solid #e9e9e9",
                     padding: "10px 16px",
                     background: "#fff",
                     textAlign: "right"
                  }}
               >
                  <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                     Cancel
                  </Button>
                  <Button onClick={this.onClose} type="primary">
                     Send
                  </Button>
               </div>
            </Drawer>

            {/* View Content mail */}
            <Drawer
               title={`Subject of mail clicked`}
               width={720}
               onClose={this.onClose}
               visible={this.state.visibleViewMail}
               bodyStyle={{ paddingBottom: 80 }}
            >
               <div className="ht-view-content-mail ht-d-flex-col-start-start">
                  <div className="ht-from-and-action ht-d-flex-row-space-between-baseline col-md-12 m-0 p-0">
                     <div className="ht-form ht-strong">From from from</div>
                     <div className="ht-actions ht-d-flex-row-end-end">
                        {" "}
                        <Tooltip title="Reply" onClick={this.showDrawerReply}>
                           <div className="ht-hover-circle ht-d-flex-center-center">
                              <i className="fas fa-reply"></i>
                           </div>
                        </Tooltip>
                        <Tooltip title="Lưu trữ">
                           <div className="ht-hover-circle ht-d-flex-center-center ">
                              <i className="fas fa-archive "></i>
                           </div>
                        </Tooltip>
                        <Tooltip title="Xóa">
                           <div className="ht-hover-circle ht-d-flex-center-center ">
                              <i className="far fa-trash-alt"></i>
                           </div>
                        </Tooltip>
                     </div>
                  </div>
                  <div className="ht-datetime col-md-12 m-0 p-0 pb-1">
                     7:00 AM 05/07/2020 (6 ngày trước)
                  </div>
                  <div className="ht-divide-mini pb-2"> </div>
                  <div className="ht-content-main ht-d-flex-col-start-start col-md-12 m-0 p-0">
                     Nội dung mail Nội dung mail Nội dung mail Nội dung mail Nội
                     dung mail Nội dung mail Nội dung mail Nội dung mail Nội
                     dung mail Nội dung mail Nội dung mail Nội dung mail Nội
                     dung mail Nội dung mail Nội dung mail Nội dung mail Nội
                     dung mail
                  </div>
               </div>
               <div
                  style={{
                     position: "absolute",
                     right: 0,
                     bottom: 0,
                     width: "100%",
                     borderTop: "1px solid #e9e9e9",
                     padding: "10px 16px",
                     background: "#fff",
                     textAlign: "right"
                  }}
               >
                  <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                     Cancel
                  </Button>
                  <Button onClick={this.onClose} type="primary">
                     Reply
                  </Button>
               </div>
            </Drawer>

            {/* Template unread */}
            <div
               className={
                  (this.state.status === "unread" ? "bgr-fff" : "") +
                  ` ht-mail-element ht-d-flex-row-space-between-center ht-box-shadow-hover p-1`
               }
            >
               <div
                  className="ht-content ht-d-flex-row-start-start col-md-9 p-2"
                  onClick={this.showDrawerViewMail}
               >
                  <div
                     className={
                        (this.state.status === "unread" ? "ht-strong " : "") +
                        "ht-from col-md-3"
                     }
                  >
                     From from{" "}
                  </div>
                  <div
                     className={
                        (this.state.status === "unread" ? "ht-strong " : " ") +
                        "ht-subject ht-d-flex-row-start-start col-md-9"
                     }
                  >
                     Subject Subject
                     <div className="ht-content ht-weight-100 ht-text-shadow-none ml-1 ht-text-level-2">
                        - content content content content content
                     </div>
                  </div>
               </div>
               <div className="ht-day col-md-3 ht-d-flex-row-end-baseline">
                  <div className="ht-actions col-md-3 ht-d-flex-row-end-baseline mr-2">
                     <Tooltip title="Reply" onClick={this.showDrawerReply}>
                        <div className="ht-hover-circle ht-d-flex-center-center">
                           <i className="fas fa-reply"></i>
                        </div>
                     </Tooltip>
                     <Tooltip title="Mask as unread">
                        <div className="ht-hover-circle ht-d-flex-center-center ">
                           <i className="far fa-envelope"></i>
                        </div>
                     </Tooltip>
                     <Tooltip title="Mask as read">
                        <div className="ht-hover-circle ht-d-flex-center-center ">
                           <i className="far fa-envelope-open"></i>
                        </div>
                     </Tooltip>
                     <Tooltip title="Lưu trữ">
                        <div className="ht-hover-circle ht-d-flex-center-center ">
                           <i className="fas fa-archive "></i>
                        </div>
                     </Tooltip>
                     <Tooltip title="Xóa">
                        <div className="ht-hover-circle ht-d-flex-center-center ">
                           <i className="far fa-trash-alt"></i>
                        </div>
                     </Tooltip>
                  </div>
                  07/07/2014
               </div>
            </div>

            {/* Template read */}
            <div
               className={
                  (this.state.status === "read" ? "bgr-fff" : "") +
                  ` ht-mail-element ht-d-flex-row-space-between-center ht-box-shadow-hover p-1`
               }
            >
               <div
                  className="ht-content ht-d-flex-row-start-start col-md-9 p-2"
                  onClick={this.showDrawerViewMail}
               >
                  <div
                     className={
                        (this.state.status === "read" ? "ht-strong " : "") +
                        "ht-from col-md-3"
                     }
                  >
                     From from{" "}
                  </div>
                  <div
                     className={
                        (this.state.status === "read" ? "ht-strong " : " ") +
                        "ht-subject ht-d-flex-row-start-start col-md-9"
                     }
                  >
                     Subject Subject
                     <div className="ht-content ht-weight-100 ht-text-shadow-none ml-1 ht-text-level-2">
                        - content content content content content
                     </div>
                  </div>
               </div>
               <div className="ht-day col-md-3 ht-d-flex-row-end-baseline">
                  <div className="ht-actions col-md-3 ht-d-flex-row-end-baseline mr-2">
                     <Tooltip title="Reply" onClick={this.showDrawerReply}>
                        <div className="ht-hover-circle ht-d-flex-center-center">
                           <i className="fas fa-reply"></i>
                        </div>
                     </Tooltip>
                     <Tooltip title="Mask as unread">
                        <div className="ht-hover-circle ht-d-flex-center-center ">
                           <i className="far fa-envelope"></i>
                        </div>
                     </Tooltip>
                     <Tooltip title="Mask as read">
                        <div className="ht-hover-circle ht-d-flex-center-center ">
                           <i className="far fa-envelope-open"></i>
                        </div>
                     </Tooltip>
                     <Tooltip title="Lưu trữ">
                        <div className="ht-hover-circle ht-d-flex-center-center ">
                           <i className="fas fa-archive "></i>
                        </div>
                     </Tooltip>
                     <Tooltip title="Xóa">
                        <div className="ht-hover-circle ht-d-flex-center-center ">
                           <i className="far fa-trash-alt"></i>
                        </div>
                     </Tooltip>
                  </div>
                  07/07/2014
               </div>
            </div>
         </>
      );
   }

   render() {
      return (
         <div className="container col-md-12 mt-2">
            <Tabs defaultActiveKey="1" size="default">
               <TabPane tab="Primary" key="1">
                  <div className="ht-mail-container mb-3">
                     {this.renderContentMail("Primary")}
                  </div>
               </TabPane>
               <TabPane tab="Archire" key="2">
                  <div className="ht-mail-container mb-3">
                     {this.renderContentMail("Archire")}
                  </div>
               </TabPane>
            </Tabs>
         </div>
      );
   }
}
