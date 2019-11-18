import React, { Component } from "react";

import { Result, Button } from "antd";

export default class Result404 extends Component {
   render() {
      return (
         <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
         />
      );
   }
}
