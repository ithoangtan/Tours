import React, { Component } from "react";
import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";

export default class ConcactContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }
   render() {
      return (
         <div>
            <section className="ftco-section ftco-no-pb contact-section">
               <div className="container">
                  <div className="row d-flex contact-info">
                     <div className="col-md-3 d-flex">
                        <div className="align-self-stretch box p-4 text-center">
                           <div className="icon d-flex align-items-center justify-content-center">
                              <span className="icon-map-signs" />
                           </div>
                           <h3 className="mb-4">Address</h3>
                           <p>
                              198 West 21th Street, Suite 721 New York NY 10016
                           </p>
                        </div>
                     </div>
                     <div className="col-md-3 d-flex">
                        <div className="align-self-stretch box p-4 text-center">
                           <div className="icon d-flex align-items-center justify-content-center">
                              <span className="icon-phone2" />
                           </div>
                           <h3 className="mb-4">Contact Number</h3>
                           <p>
                              <a href="tel://1234567920">+ 1235 2355 98</a>
                           </p>
                        </div>
                     </div>
                     <div className="col-md-3 d-flex">
                        <div className="align-self-stretch box p-4 text-center">
                           <div className="icon d-flex align-items-center justify-content-center">
                              <span className="icon-paper-plane" />
                           </div>
                           <h3 className="mb-4">Email Address</h3>
                           <p>
                              <a href="mailto:info@yoursite.com">
                                 info@yoursite.com
                              </a>
                           </p>
                        </div>
                     </div>
                     <div className="col-md-3 d-flex">
                        <div className="align-self-stretch box p-4 text-center">
                           <div className="icon d-flex align-items-center justify-content-center">
                              <span className="icon-globe" />
                           </div>
                           <h3 className="mb-4">Website</h3>
                           <p>
                              <a href="s">yoursite.com</a>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="ftco-section contact-section">
               <div className="container">
                  <div className="row block-9">
                     <div className="col-md-6 order-md-last d-flex">
                        <form action="#" className="bg-light p-5 contact-form">
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Your Name"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Your Email"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Subject"
                              />
                           </div>
                           <div className="form-group">
                              <textarea
                                 name
                                 id
                                 cols={30}
                                 rows={7}
                                 className="form-control"
                                 placeholder="Message"
                                 defaultValue={""}
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 type="submit"
                                 defaultValue="Send Message"
                                 className="btn btn-primary py-3 px-5"
                              />
                           </div>
                        </form>
                     </div>
                     <div className="col-md-6 d-flex">
                        <div id="map" className="bg-white" />
                     </div>
                  </div>
               </div>
            </section>
         </div>
      );
   }
}
