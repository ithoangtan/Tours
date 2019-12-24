import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export default class ResultProcessing extends Component {
   render() {
      return (
         <Result
            title="Your operation has been executed"
            extra={
               <Link to={{ pathname: `/tour` }}>
                  <Button type="primary">Back Home</Button>
               </Link>
            }
         />
      );
   }
}
