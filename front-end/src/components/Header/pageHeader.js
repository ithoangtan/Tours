import React, { Component } from "react";

import { PageHeader } from "antd";

export default class PageHeader extends Component {
   render() {
      return (
         <PageHeader
            style={{
               border: "1px solid rgb(235, 237, 240)"
            }}
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
         />
      );
   }
}
