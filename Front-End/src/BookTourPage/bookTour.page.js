import React, { Component } from "react";

import BookTourContainer from "./bookTour.container";

export default class BookTourPage extends Component {
   render() {
      return <BookTourContainer {...this.props} />;
   }
}
