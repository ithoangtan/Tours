import React, { Component } from "react";


import LoginContainer from "../_components/Login/login.container";
import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

class LoginPage extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
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

export default LoginPage;
