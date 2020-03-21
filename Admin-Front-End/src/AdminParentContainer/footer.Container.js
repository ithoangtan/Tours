import React, { Component } from "react";

export default class FooterContainer extends Component {
   render() {
      return (
         <footer className="sticky-footer bg-white mt-5">
            <div className="container my-auto">
               <div className="copyright text-center my-auto">
                  <span>Copyright © ithoangtan Website 2020</span>
               </div>
            </div>
         </footer>
      );
   }
}
