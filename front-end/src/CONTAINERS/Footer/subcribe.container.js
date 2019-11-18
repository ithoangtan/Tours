import React, { Component } from "react";

export default class SubcribeContainer extends Component {
   render() {
      return (
         <section
            className="ftco-subscribe"
            style={{ backgroundImage: "url(images/bg_1.jpg)" }}
         >
            <div className="overlay">
               <div className="container">
                  <div className="row d-flex justify-content-center">
                     <div className="col-md-10 text-wrap text-center heading-section ftco-animate">
                        <h2>Subcribe to our Newsletter</h2>
                        <div className="row d-flex justify-content-center mt-4 mb-4">
                           <div className="col-md-10">
                              <form action="#" className="subscribe-form">
                                 <div className="form-group d-flex">
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Enter email address"
                                    />
                                    <input
                                       type="submit"
                                       defaultValue="Subscribe us!"
                                       className="submit px-3"
                                    />
                                 </div>
                              </form>
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
