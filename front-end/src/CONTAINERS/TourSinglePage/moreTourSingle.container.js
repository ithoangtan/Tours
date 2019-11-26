import React, { Component } from "react";

import { Card, Button } from "antd";

const { Meta } = Card;

export default class MoreTourSingleContainer extends Component {
   render() {
      return (
         <Card
            className="mt-3"
            title="Small size card"
            hoverable
            cover={<img alt="example" src="./images/tour-5.jpg" />}
            extra={
               <Button type="primary" block>
                  BOOK NOW
               </Button>
            }
         >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <p>Card content</p>
            <p>Card content</p>
         </Card>
      );
   }
}
