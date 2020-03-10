import React, { Component } from "react";

import ForgotPasswordContainer from "../_components/ForgotPassword/forgotPassword.container";
import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

class ForgotPasswordPage extends Component {
   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0
      });
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }

   render() {
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row justify-content-center pb-1 mt-4">
                  <ForgotPasswordContainer />
               </div>
            </div>
         </section>
      );
   }
}

export default ForgotPasswordPage;
