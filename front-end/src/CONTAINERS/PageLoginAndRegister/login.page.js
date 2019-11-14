import React, { Component } from "react";

import LoginContainer from "../Login/login.container";

export default class LoginPage extends Component {
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
