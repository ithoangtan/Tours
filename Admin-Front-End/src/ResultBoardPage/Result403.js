import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Result, Button } from "antd";

export default class Result403 extends Component {
   render() {
      return (
         <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
               <Link to={{ pathname: `/tour` }}>
                  <Button type="primary">Back Home</Button>
               </Link>
            }
         />
      );
   }
}
