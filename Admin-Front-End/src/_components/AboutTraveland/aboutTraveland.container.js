import React, { Component } from "react";

export default class AboutTravelandContainer extends Component {
   render() {
      return (
         <section className="ftco-counter img" id="section-counter">
            <div className="container">
               <div className="row d-flex">
                  <div className="col-md-6 d-flex">
                     <div
                        className="img d-flex align-self-stretch"
                        style={{
                           backgroundImage: "url(images/about.jpg)"
                        }}
                     />
                  </div>
                  <div className="col-md-6 pl-md-5 py-5">
                     <div className="row justify-content-start pb-3">
                        <div className="col-md-12 heading-section ftco-animate">
                           <h2 className="mb-4">About Traveland</h2>
                           <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia
                           </p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                           <div className="block-18 text-center py-5 bg-light mb-4">
                              <div className="text">
                                 <strong className="number" data-number={30}>
                                    0
                                 </strong>
                                 <span>Amazing Deals</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                           <div className="block-18 text-center py-5 bg-light mb-4">
                              <div className="text">
                                 <strong className="number" data-number={200}>
                                    0
                                 </strong>
                                 <span>Sold Tours</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                           <div className="block-18 text-center py-5 bg-light mb-4">
                              <div className="text">
                                 <strong className="number" data-number={2500}>
                                    0
                                 </strong>
                                 <span>New Tours</span>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                           <div className="block-18 text-center py-5 bg-light mb-4">
                              <div className="text">
                                 <strong className="number" data-number={40}>
                                    0
                                 </strong>
                                 <span>Happy Customers</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
