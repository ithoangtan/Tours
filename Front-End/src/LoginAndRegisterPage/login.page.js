import React, { Component } from "react";

import LoginContainer from "../_components/Login/login.container";
import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

class LoginPage extends Component {
   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth"
      });
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
