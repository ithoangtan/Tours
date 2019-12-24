import React, { Component } from "react";

import { Result, Button } from "antd";

export default class Result500 extends Component {
   render() {
      return (
         <Result
            status="500"
            title="500"
            subTitle="Sorry, the server is wrong."
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
