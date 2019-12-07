import React, { Component } from "react";

import { Card, Button } from "antd";

const { Meta } = Card;

export default class MoreTourSingleContainer extends Component {
   render() {
      const { idImage } = this.props;
      let src = `/img/1575110779391_phuong-phap-chup-anh-phong-canh1.jpg`;
      let title = `Autumn in japan`;
      let content = `The main islands are, from North to South: Hokkaido, Honshu,
               Shikoku, Kyushu, which make up for 97% of the land of Japan`;
      let description =
         "www.facebook.com/ithoangtan Land of the Rising sun” – is an archipelago of more";
      if (idImage === 1) {
         src = `/img/1575110775686_italian-landscape-mountains-nature1.jpg`;
         title = "Italia moutain";
         content = `This article is about the Italian language. For the regional varieties of standard Italian, see Regional Italian.`;
         description = `Italiano redirects here`;
      }

      return (
         <Card
            className="mt-3"
            title={title}
            hoverable
            cover={<img alt="#" src={src} />}
            extra={
               <Button type="primary" block>
                  BOOK NOW
               </Button>
            }
         >
            <Meta title="Land of the Rising sun" description={description} />
            <p>{content}</p>
            <Button type="default">More info ...</Button>
         </Card>
      );
   }
}
