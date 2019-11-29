import React, { Component } from "react";

import RegisterContainer from "../_components/Register/register.container";
import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

export default class RegisterPage extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }
   render() {
      return (
         <section className="ftco-section">
            <div className="container justify-content-center">
               <div className="row justify-content-center pb-1">
                  <div className="ftco-animate col-lg-5">
                     <RegisterContainer />
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
