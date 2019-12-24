import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

export default class ResultWarning extends Component {
   render() {
      const { status, title, toLink, nameButton, typeButton } = this.props;
      return (
         <Result
            status={status}
            title={title}
            extra={
               <Link to={{ pathname: `${toLink}` }}>
                  <Button type={typeButton}>{nameButton}</Button>
               </Link>
            }
         />
      );
   }
}
