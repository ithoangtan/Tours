import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export default class ResultWarning extends Component {
   render() {
      const { status, title } = this.props;
      return (
         <Result
            status={status}
            title={title}
            extra={
               <Link to={{ pathname: `/tour` }}>
                  <Button type="default">Back Home</Button>
               </Link>
            }
         />
      );
   }
}
