import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Result, Button, Icon, Typography } from "antd";

const { Paragraph, Text } = Typography;

export default class ResultSubmissionFailed extends Component {
   render() {
      return (
         <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the following information before resubmitting."
            extra={[
               <Button type="primary" key="console">
                  Go Console
               </Button>,
               <Button key="buy">Buy Again</Button>
            ]}
         >
            <div className="desc">
               <Paragraph>
                  <Text
                     strong
                     style={{
                        fontSize: 16
                     }}
                  >
                     The content you submitted has the following error:
                  </Text>
               </Paragraph>
               <Paragraph>
                  <Icon style={{ color: "red" }} type="close-circle" /> Your
                  account has been frozen
                  <Link>Thaw immediately &gt;</Link>
               </Paragraph>
               <Paragraph>
                  <Icon style={{ color: "red" }} type="close-circle" /> Your
                  account is not yet eligible to apply{" "}
                  <Link>Apply Unlock &gt;</Link>
               </Paragraph>
            </div>
         </Result>
      );
   }
}
