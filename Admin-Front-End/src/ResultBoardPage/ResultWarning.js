import React, { Component } from "react";

import { Result, Button } from "antd";

export default class ResultWarning extends Component {
   render() {
      const { status, title } = this.props;
      return (
         <Result
            status={status}
            title={title}
            extra={
               <Button type="default" key="console">
                  Continue!
               </Button>
            }
         />
      );
   }
}
