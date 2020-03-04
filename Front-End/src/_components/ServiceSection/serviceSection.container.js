import React, { Component } from "react";

export default class ServiceSectionContainer extends Component {
   render() {
      return (
         <section className="ftco-section services-section bg-light">
            <div className="container pt-3">
               <div className="row d-flex">
                  <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                     <div className="media services d-block d-flex ">
                        <div className="icon">
                           <span className="flaticon-yatch mr-2" />
                        </div>
                        <div className="media-body">
                           <h3 className="heading mb-1">Activities</h3>
                           <p>
                              203 Fake St. Mountain View, San Francisco,
                              California, USA
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                     <div className="media  services d-block d-flex">
                        <div className="icon">
                           <span className="flaticon-around mr-2" />
                        </div>
                        <div className="media-body">
                           <h3 className="heading mb-1">Travel Arrangements</h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                     <div className="media  services d-block d-flex">
                        <div className="icon">
                           <span className="flaticon-compass mr-2" />
                        </div>
                        <div className="media-body">
                           <h3 className="heading mb-1">Private Guide</h3>
                           <p>
                              A small river named Duden flows by their place and
                              supplies.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                     <div className="media  services d-block d-flex">
                        <div className="icon">
                           <span className="flaticon-map-of-roads mr-2" />
                        </div>
                        <div className="media-body">
                           <h3 className="heading mb-1">Location Manager</h3>
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
