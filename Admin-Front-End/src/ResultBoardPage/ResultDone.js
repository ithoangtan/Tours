import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Result, Button, Icon } from "antd";

export default class ResultDone extends Component {
   render() {
      return (
         <Result
            icon={<Icon type="smile" theme="twoTone" />}
            title="Great, we have done all the operations!"
            extra={
               <Link to={{ pathname: `/tour` }}>
                  <Button type="primary">Next</Button>
               </Link>
            }
         />
      );
   }
}
