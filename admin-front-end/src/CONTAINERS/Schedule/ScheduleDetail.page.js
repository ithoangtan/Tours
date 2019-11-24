import React, { Component } from "react";

import ScheduleDetailParentContainer from "./ScheduleDetailParent/sheduleDetailParent.container";

export default class ScheduleDetail extends Component {
   render() {
      return <ScheduleDetailParentContainer {...this.props} />;
   }
}
