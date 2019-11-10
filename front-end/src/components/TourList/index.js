import React, { Component } from "react";

import TaskItem from "../TaskItem";

class TourList extends Component {
   render() {
      return (
         <Grid item md={4} xs={12} key={status.value}>
            <TaskItem />
         </Grid>
      );
   }
}
export default TourList;
