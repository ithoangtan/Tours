import React, { Component } from "react";
import TopBarHeading from "./Heading/topBar.container";
import ReportViewNumberContainer from "./ContentDetail/reportViewNumber.container";
import ReportViewChartContainer from "./ContentDetail/reportViewChart.container";
import ReportProjectSliderAndIllustrationsContainer from "./ContentDetail/reportProjectSliderAndIllustrations.container";
export default class ContentMainContainer extends Component {
   render() {
      return (
         <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
               <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
               <a
                  href="s"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
               >
                  <i className="fas fa-download fa-sm text-white-50" /> Generate
                  Report
               </a>
            </div>
            {/* report Number */}
            <ReportViewNumberContainer />
            {/* report Chart */}
            <ReportViewChartContainer />
            {/* Project slider and Illsutrations */}
            <ReportProjectSliderAndIllustrationsContainer />
         </div>
      );
   }
}
