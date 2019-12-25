import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Tabs, Tooltip } from "antd";

import { Typography } from "antd";

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
export default class BookTourStep3 extends Component {
   constructor(props) {
      super(props);
      this.state = {
         size: "large"
      };
   }

   onChange = e => {
      this.setState({ size: e.target.value });
   };

   render() {
      const { size } = this.state;
      const { data } = this.props;
      const orders = JSON.parse(localStorage.getItem("orders"));
      return (
         <div className="ht-book-finish">
            <Tabs defaultActiveKey="1" size={size}>
               <TabPane tab="CÁCH 1: Thanh toán online:" key="1">
                  <div className="row">
                     <div className="col-sx-12 col-sm-6 col-md-3">
                        <div className="thumbnail">
                           <img
                              src="/payment/nganluong.png"
                              alt="nganluong.vn"
                              className="ht-image-fix-size"
                           />
                           <div className="caption">
                              <p>
                                 Cổng thanh toán đa dạng kênh uy tín, Ưu việt
                                 hàng đầu Việt Nam. Liên kết h ơn 20 ngân hàng
                                 trong nước và Quốc tế
                              </p>
                              <p>
                                 <a
                                    href={data.link}
                                    className="btn btn-primary"
                                    role="button"
                                 >
                                    Thanh toán ngay
                                 </a>{" "}
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-sx-12 col-sm-6 col-md-3">
                        <div className="thumbnail">
                           <img
                              src="/payment/onepay.png"
                              alt="onepay.vn"
                              className="ht-image-fix-size"
                           />
                           <div className="caption">
                              <p>
                                 OnePAY is a Leading Payment Processing Company
                                 in Vietnam since 2006, providing payment
                                 gateway and merchant services.
                              </p>
                              <p>
                                 <Link
                                    style={{ border: "1px solid black" }}
                                    disabled
                                    to="#"
                                    className="btn btn-default"
                                    role="button"
                                 >
                                    Developing...
                                 </Link>{" "}
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-sx-12 col-sm-6 col-md-3">
                        <div className="thumbnail">
                           <img
                              src="/payment/sohapay.png"
                              alt="sohapay.vn"
                              className="ht-image-fix-size"
                           />
                           <div className="caption">
                              <p>
                                 Cung cấp dịch vụ khách hàng tốt nhất, tạo môi
                                 trường thanh toán trực tuyến an toàn và tiện
                                 lợi nhất
                              </p>
                              <p>
                                 <Link
                                    style={{ border: "1px solid black" }}
                                    disabled
                                    to="#"
                                    className="btn btn-default"
                                    role="button"
                                 >
                                    Developing...
                                 </Link>{" "}
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-sx-12 col-sm-6 col-md-3">
                        <div className="thumbnail">
                           <img
                              src="/payment/vnpay.png"
                              alt="vnpay.vn"
                              className="ht-image-fix-size"
                           />
                           <div className="caption">
                              <p>
                                 Thuộc top 100 sản phẩm, dịch vụ Việt Nam được
                                 tin dùng, là nhãn hiệu nổi tiếng trong phạm vi
                                 toàn quốc
                              </p>
                              <p>
                                 <Link
                                    style={{ border: "1px solid black" }}
                                    disabled
                                    to="#"
                                    className="btn btn-default"
                                    role="button"
                                 >
                                    Developing...
                                 </Link>{" "}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
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
