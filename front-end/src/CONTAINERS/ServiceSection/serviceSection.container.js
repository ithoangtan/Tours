import React, { Component } from "react";

export default class ServiceSectionContainer extends Component {
   render() {
      return (
         <section className="ftco-section services-section bg-light">
            <div className="container">
               <div className="row d-flex">
                  <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                     <div className="media block-6 services d-block">
                        <div className="icon">
                           <span className="flaticon-yatch" />
                        </div>
                        <div className="media-body">
                           <h3 className="heading mb-3">Activities</h3>
                           <p>
                              {" "}
                              203 Fake St. Mountain View, San Francisco,
                              California, USA
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                     <div className="media block-6 services d-block">
                        <div className="icon">
                           <span className="flaticon-around" />
                        </div>
                        <div className="media-body">
                           <h3 className="heading mb-3">Travel Arrangements</h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                     <div className="media block-6 services d-block">
                        <div className="icon">
                           <span className="flaticon-compass" />
                        </div>
                        <div className="media-body">
                           <h3 className="heading mb-3">Private Guide</h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                     <div className="media block-6 services d-block">
                        <div className="icon">
                           <span className="flaticon-map-of-roads" />
                        </div>
                        <div className="media-body">
                           <h3 className="heading mb-3">Location Manager</h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
