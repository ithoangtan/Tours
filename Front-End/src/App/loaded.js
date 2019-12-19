import React, { Component } from "react";

export default class Loaded extends Component {
   render() {
      return (
         <div id="ftco-loader" className="show fullscreen">
            <svg className="circular" width="48px" height="48px">
               <circle
                  className="path-bg"
                  cx={24}
                  cy={24}
                  r={22}
                  fill="none"
                  strokeWidth={6}
                  stroke="#eeeeee"
               />
               <circle
                  className="path"
                  cx={24}
                  cy={24}
                  r={22}
                  fill="none"
                  strokeWidth={6}
                  strokeMiterlimit={30}
                  stroke="#F96D00"
               />
            </svg>
         </div>
      );
   }
}
