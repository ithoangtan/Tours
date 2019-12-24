import React, { Component } from "react";

import { Result, Button } from "antd";

export default class ResultProcessing extends Component {
   render() {
      return (
         <Result
            title="Your operation has been executed"
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
