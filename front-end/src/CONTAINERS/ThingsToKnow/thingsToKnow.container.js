import React, { Component } from "react";

export default class ThingsToKnowContainer extends Component {
   render() {
      return (
         <section className="ftco-counter img" id="section-counter">
            <div className="container">
               <div className="row d-flex">
                  <div className="col-md-6 order-md-last d-flex">
                     <div
                        className="img d-flex align-self-stretch"
                        style={{ backgroundImage: "url(images/about-1.jpg)" }}
                     />
                  </div>
                  <div className="col-md-6 pr-md-5 py-5">
                     <div className="row justify-content-start pb-3">
                        <div className="col-md-12 heading-section ftco-animate">
                           <h2 className="mb-4">
                              Things to Know Before Traveling to other Places
                           </h2>
                           <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia
                           </p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-12">
                           <p className="ftco-animate tips">
                              <span>1.</span> A small river named Duden flows by
                              their place and supplies it with the necessary
                              regelialia.
                           </p>
                           <p className="ftco-animate tips">
                              <span>2.</span> A small river named Duden flows by
                              their place and supplies it with the necessary
                              regelialia. It is a paradisematic country, in
                              which roasted parts of sentences fly into your
                              mouth.
                           </p>
                           <p className="ftco-animate tips">
                              <span>3.</span> It is a paradisematic country, in
                              which roasted parts of sentences fly into your
                              mouth.
                           </p>
                           <p className="ftco-animate mt-4">
                              <a href="#" className="btn btn-primary py-3 px-5">
                                 Read more
                              </a>
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
