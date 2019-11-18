import React, { Component } from "react";

import LoginContainer from "../Login/login.container";
import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";

export default class LoginPage extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }

   render() {
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row justify-content-center pb-1">
                  <LoginContainer />
               </div>
            </div>
         </section>
      );
   }
}
