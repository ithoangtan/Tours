import React, { Component } from "react";

import { Card, Button } from "antd";

import { API_ENDPOINT } from "../_constants/index.constants";

const { Meta } = Card;

export default class MoreTourSingleContainer extends Component {
   render() {
      const { idImage } = this.props;
      let src = `/img/1576396566503_italian-landscape-mountains-nature.jpg`;
      let title = `Autumn in japan`;
      let content = `The main islands are, from North to South: Hokkaido, Honshu`;
      let description = "www.facebook.com/ithoangtan Land of the Rising sun";
      if (idImage === 1) {
         src = `/img/1576400628844_chup-anh-phong-canh.jpg`;
         title = "Italia moutain";
         content = `This article is about the Italian language. For the regional varieties.`;
         description = `Italiano redirects here`;
      }

      return (
         <Card
            style={{ maxWidth: "200px" }}
            className="mt-3"
            title={title}
            hoverable
            cover={
               <img
                  alt="#"
                  src={API_ENDPOINT + src}
                  style={{ maxWidth: "200px" }}
               />
            }
            extra={
               <Button type="primary" block size="small">
                  BOOK NOW
               </Button>
            }
         >
            <Meta
               title="Land of the Rising sun"
               description={description}
               style={{ maxWidth: "200px" }}
            />
            <p>{content}</p>
            <Button type="default">More info ...</Button>
         </Card>
      );
   }
}
