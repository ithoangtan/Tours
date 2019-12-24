import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export default class Result500 extends Component {
   render() {
      return (
         <Result
            status="500"
            title="500"
            subTitle="Sorry, the server is wrong."
            extra={
               <Link to={{ pathname: `/tour` }}>
                  <Button type="primary">Back Home</Button>
               </Link>
            }
         />
      );
   }
}
