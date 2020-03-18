import React, { Component } from "react";

import { Link } from "react-router-dom";

import LoginContainer from "./login.container";

export default class LoginPage extends Component {
   render() {
      return (
         <div className="bg-gradient-primary">
            <div className="container">
               {/* Outer Row */}
               <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12 col-md-9">
                     <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                           {/* Nested Row within Card Body */}
                           <div className="row">
                              <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                              <div className="col-lg-6">
                                 <div className="p-5">
                                    <div className="text-center">
                                       <h1 className="h4 text-gray-900 mb-4">
                                          Welcome Back!
                                       </h1>
                                    </div>
                                    <LoginContainer />
                                    <hr />
                                    <div className="text-center">
                                       <Link
                                          className="small"
                                          to="/forgot-password"
                                          style={{ fontSize: "1rem" }}
                                       >
                                          Forgot Password?
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
