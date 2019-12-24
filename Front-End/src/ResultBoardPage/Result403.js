import React, { Component } from "react";

import { Result, Button } from "antd";

export default class Result403 extends Component {
   render() {
      return (
         <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
               <Link
                  to={{
                     pathname: `/tour`,
                     state: {
                        tour: tour
                     }
                  }}
               >
                  <Button type="primary">Back Home</Button>
               </Link>
            }
         />
      );
   }
}
