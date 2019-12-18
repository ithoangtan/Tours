import React, { Component } from "react";

import { BackTop } from "antd";

export default class BackToTop extends Component {
   render() {
      return (
         <div>
            <BackTop className="ht-loaded"></BackTop>
         </div>
      );
   }
}
