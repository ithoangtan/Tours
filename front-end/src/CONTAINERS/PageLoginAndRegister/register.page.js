import React, { Component } from "react";

import RegisterContainer from "../Register/register.container";
import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";
export default class RegisterPage extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
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
