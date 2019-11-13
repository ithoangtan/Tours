import React, { Component } from "react";

import RegisterContainer from "../Register/register.container";

export default class RegisterPage extends Component {
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
