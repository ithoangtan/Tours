import React, { Component } from "react";

import { Tabs, Tooltip } from "antd";

import { Typography } from "antd";

import ResultWarning from "../ResultBoardPage/ResultWarning";

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
export default class BookTourStep3 extends Component {
   state = { size: "large" };

   onChange = e => {
      this.setState({ size: e.target.value });
   };

   render() {
      const { size } = this.state;
      const orders = JSON.parse(localStorage.getItem("orders"));
      return (
         <div className="ht-book-finish">
            <Tabs defaultActiveKey="1" size={size}>
               <TabPane
                  tab="CÁCH 1: Bạn sử dụng ATM/VISA để thanh toán?"
                  key="1"
               >
                  <ResultWarning
                     status={"warning"}
                     title={
                        <div>
                           <p>
                              Chân thành xin lỗi quý khách vì chức năng này đang
                              được bảo trì!
                           </p>
                           <p> Vui lòng chọn hình thức thanh toán khác</p>
                        </div>
                     }
                  />
               </TabPane>
               <TabPane tab="CÁCH 2: Chuyển khoản đến Tài khoản:" key="2">
                  <ul className="list-group ht-cach2-finish-checkout">
                     <li className="list-group-item">
                        <i className="fa fa-university" aria-hidden="true"></i>{" "}
                        Ngân hàng Nông nghiệp và Phát triển nông thôn Việt Nam -
                        Agribank
                     </li>
                     <li className="list-group-item">
                        <Title level={4}>
                           {" "}
                           <Tooltip
                              placement="left"
                              title={"Đây là số thẻ của administrator"}
                           >
                              <i
                                 className="fa fa-credit-card"
                                 aria-hidden="true"
                              ></i>{" "}
                              Số Thẻ{" "}
                              <Paragraph
                                 copyable={{ text: "9704050730989220" }}
                                 style={{ display: "inline" }}
                              >
                                 9704 0507 3098 9220
                              </Paragraph>{" "}
                           </Tooltip>
                        </Title>
                     </li>
                     <li className="list-group-item">
                        <Title level={4}>
                           {" "}
                           <Tooltip
                              placement="left"
                              title={"Đây là số tài khoản của administrator"}
                           >
                              <i className="fas fa-address-card"></i> Số Tài
                              Khoản{" "}
                              <Paragraph
                                 copyable={{ text: "5604205193727" }}
                                 style={{ display: "inline" }}
                              >
                                 5604 20519 3727
                              </Paragraph>{" "}
                           </Tooltip>
                        </Title>
                     </li>
                     <li className="list-group-item">
                        <Title level={4}>
                           {" "}
                           <Tooltip
                              placement="left"
                              title={"Nội dung là số điện thoại của bạn"}
                           >
                              <i className="far fa-sticky-note"></i> Nội Dung
                              Chuyển Khoản{" "}
                              <Paragraph
                                 copyable={{
                                    text: `${orders.phone} ${orders.name}`
                                 }}
                                 style={{ display: "inline" }}
                              >
                                 {`${orders.phone} `}
                                 {/* Dự kiến là số điện thoại + Tên khách hàng */}
                              </Paragraph>
                           </Tooltip>{" "}
                        </Title>
                     </li>
                     <li className="list-group-item">
                        <Title level={4}>
                           <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                           ></i>{" "}
                           Chủ tài khoản: Hoàng Trọng Tấn
                        </Title>
                     </li>
                  </ul>
                  {/* Danh sách các payment method của idAccount của product đang
                  thực hiện. Phải mã hóa thông tin ở đây để đảm bảo không có ai
                  có thể sửa thông tin idAccount khi truyền xuống dưới back-end */}
               </TabPane>
            </Tabs>
            {/* <p>
               "Phương thức thanh toán(2 tab: 1 tab chuyển khoản ngân hàng với
               thông tin; 1 tab là thanh toán với
               building-payments-system-react-stripe ) "
            </p>
            <p>
               Chuyển đến trang Result success Thông báo thành công và gủi mail
               đến 2 loại người dùng website
            </p> */}
         </div>
      );
   }
}
