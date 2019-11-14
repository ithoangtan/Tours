import React, { Component } from "react";

export default class all extends Component {
   render() {
      return (
         <div>
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
                              <h3 className="heading mb-3">
                                 Travel Arrangements
                              </h3>
                              <p>
                                 A small river named Duden flows by their place
                                 and supplies.
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
                                 A small river named Duden flows by their place
                                 and supplies.
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
                                 A small river named Duden flows by their place
                                 and supplies.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="ftco-counter img" id="section-counter">
               <div className="container">
                  <div className="row d-flex">
                     <div className="col-md-6 d-flex">
                        <div
                           className="img d-flex align-self-stretch"
                           style={{ backgroundImage: "url(images/about.jpg)" }}
                        />
                     </div>
                     <div className="col-md-6 pl-md-5 py-5">
                        <div className="row justify-content-start pb-3">
                           <div className="col-md-12 heading-section ftco-animate">
                              <h2 className="mb-4">About Traveland</h2>
                              <p>
                                 Far far away, behind the word mountains, far
                                 from the countries Vokalia and Consonantia
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
                                    <strong
                                       className="number"
                                       data-number={200}
                                    >
                                       0
                                    </strong>
                                    <span>Sold Tours</span>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                              <div className="block-18 text-center py-5 bg-light mb-4">
                                 <div className="text">
                                    <strong
                                       className="number"
                                       data-number={2500}
                                    >
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
            <section
               className="ftco-section ftco-no-pb testimony-section"
               style={{ backgroundImage: "url(images/bg_1.jpg)" }}
            >
               <div className="overlay" />
               <div className="container">
                  <div className="row justify-content-center mb-5 pb-3">
                     <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                        <h2 className="mb-4">Happy Traveler Says</h2>
                     </div>
                  </div>
                  <div className="row ftco-animate">
                     <div className="col-md-12 testimonial">
                        <div className="carousel-testimony owl-carousel ftco-owl">
                           <div className="item">
                              <div
                                 className="testimony-wrap img"
                                 style={{
                                    backgroundImage:
                                       "url(images/traveler-1.jpg)"
                                 }}
                              >
                                 <div className="overlay" />
                                 <div className="text">
                                    <p className="mb-4">
                                       Far far away, behind the word mountains,
                                       far from the countries Vokalia and
                                       Consonantia, there live the blind texts.
                                    </p>
                                    <p className="name">Roger Scott</p>
                                    <span className="position">
                                       Marketing Manager
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="item">
                              <div
                                 className="testimony-wrap"
                                 style={{
                                    backgroundImage:
                                       "url(images/traveler-2.jpg)"
                                 }}
                              >
                                 <div className="overlay" />
                                 <div className="text">
                                    <p className="mb-4">
                                       Far far away, behind the word mountains,
                                       far from the countries Vokalia and
                                       Consonantia, there live the blind texts.
                                    </p>
                                    <p className="name">Roger Scott</p>
                                    <span className="position">
                                       Interface Designer
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="item">
                              <div
                                 className="testimony-wrap"
                                 style={{
                                    backgroundImage:
                                       "url(images/traveler-3.jpg)"
                                 }}
                              >
                                 <div className="overlay" />
                                 <div className="text">
                                    <p className="mb-4">
                                       Far far away, behind the word mountains,
                                       far from the countries Vokalia and
                                       Consonantia, there live the blind texts.
                                    </p>
                                    <p className="name">Roger Scott</p>
                                    <span className="position">
                                       UI Designer
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="item">
                              <div
                                 className="testimony-wrap"
                                 style={{
                                    backgroundImage:
                                       "url(images/traveler-4.jpg)"
                                 }}
                              >
                                 <div className="overlay" />
                                 <div className="text">
                                    <p className="mb-4">
                                       Far far away, behind the word mountains,
                                       far from the countries Vokalia and
                                       Consonantia, there live the blind texts.
                                    </p>
                                    <p className="name">Roger Scott</p>
                                    <span className="position">
                                       Web Developer
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="item">
                              <div
                                 className="testimony-wrap"
                                 style={{
                                    backgroundImage:
                                       "url(images/traveler-5.jpg)"
                                 }}
                              >
                                 <div className="overlay" />
                                 <div className="text">
                                    <p className="mb-4">
                                       Far far away, behind the word mountains,
                                       far from the countries Vokalia and
                                       Consonantia, there live the blind texts.
                                    </p>
                                    <p className="name">Roger Scott</p>
                                    <span className="position">
                                       System Analyst
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="ftco-counter img" id="section-counter">
               <div className="container">
                  <div className="row d-flex">
                     <div className="col-md-6 order-md-last d-flex">
                        <div
                           className="img d-flex align-self-stretch"
                           style={{
                              backgroundImage: "url(images/about-1.jpg)"
                           }}
                        />
                     </div>
                     <div className="col-md-6 pr-md-5 py-5">
                        <div className="row justify-content-start pb-3">
                           <div className="col-md-12 heading-section ftco-animate">
                              <h2 className="mb-4">
                                 Things to Know Before Traveling to other Places
                              </h2>
                              <p>
                                 Far far away, behind the word mountains, far
                                 from the countries Vokalia and Consonantia
                              </p>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-12">
                              <p className="ftco-animate tips">
                                 <span>1.</span> A small river named Duden flows
                                 by their place and supplies it with the
                                 necessary regelialia.
                              </p>
                              <p className="ftco-animate tips">
                                 <span>2.</span> A small river named Duden flows
                                 by their place and supplies it with the
                                 necessary regelialia. It is a paradisematic
                                 country, in which roasted parts of sentences
                                 fly into your mouth.
                              </p>
                              <p className="ftco-animate tips">
                                 <span>3.</span> It is a paradisematic country,
                                 in which roasted parts of sentences fly into
                                 your mouth.
                              </p>
                              <p className="ftco-animate mt-4">
                                 <a
                                    href="#"
                                    className="btn btn-primary py-3 px-5"
                                 >
                                    Read more
                                 </a>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      );
   }
}
