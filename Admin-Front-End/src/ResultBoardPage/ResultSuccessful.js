import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Result, Button, Typography } from "antd";

const { Paragraph } = Typography;

export default class ResultSuccessful extends Component {
   render() {
      const { params } = this.props.match;
      return (
         <Result
            status={`success`}
            title={
               <div>
                  {" "}
                  Số hóa đơn (mã PIN của bạn) là:{" "}
                  <Paragraph
                     copyable={{ text: "9704050730989220" }}
                     style={{ display: "inline" }}
                  >
                     {params.idOrder}
                  </Paragraph>{" "}
               </div>
            }
            subTitle={
               <div>
                  {`Tour của bạn đã được xác nhận!`}
                  <p>
                     Chúng tôi sẽ gửi mail cho bạn để xác nhận lần nữa, Xin hãy
                     kiểm tra và lưu lại!`
                  </p>
               </div>
            }
            extra={[
               <Link
                  key="extra"
                  to={{
                     pathname: "/"
                  }}
               >
                  <Button type="dashed" key="console">
                     Đi đến trang chủ
                  </Button>
               </Link>
            ]}
         />
      );
   }
}
