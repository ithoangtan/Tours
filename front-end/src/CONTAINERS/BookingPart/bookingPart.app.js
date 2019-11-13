import React, { Component } from "react";

export default class BookingPartApp extends Component {
   render() {
      return (
         <section className="booking_part">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="booking_menu">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                           <li className="nav-item">
                              <a
                                 className="nav-link active"
                                 id="hotel-tab"
                                 data-toggle="tab"
                                 href="#hotel"
                                 role="tab"
                                 aria-controls="hotel"
                                 aria-selected="true"
                              >
                                 hotel
                              </a>
                           </li>
                           <li className="nav-item">
                              <a
                                 className="nav-link"
                                 id="tricket-tab"
                                 data-toggle="tab"
                                 href="#tricket"
                                 role="tab"
                                 aria-controls="tricket"
                                 aria-selected="false"
                              >
                                 tricket
                              </a>
                           </li>
                           <li className="nav-item">
                              <a
                                 className="nav-link"
                                 id="place-tab"
                                 data-toggle="tab"
                                 href="#place"
                                 role="tab"
                                 aria-controls="place"
                                 aria-selected="false"
                              >
                                 place
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="booking_content">
                        <div className="tab-content" id="myTabContent">
                           <div
                              className="tab-pane fade show active"
                              id="hotel"
                              role="tabpanel"
                              aria-labelledby="hotel-tab"
                           >
                              <div className="booking_form">
                                 <form action="#">
                                    <div className="form-row">
                                       <div className="form_colum">
                                          <select className="nc_select">
                                             <option selected>
                                                Choosace place{" "}
                                             </option>
                                             <option value={1}>One</option>
                                             <option value={2}>Two</option>
                                             <option value={3}>Three</option>
                                          </select>
                                       </div>
                                       <div className="form_colum">
                                          <input
                                             id="datepicker_1"
                                             placeholder="Check in date"
                                          />
                                       </div>
                                       <div className="form_colum">
                                          <input
                                             id="datepicker_2"
                                             placeholder="Check in date"
                                          />
                                       </div>
                                       <div className="form_colum">
                                          <select className="nc_select">
                                             <option selected>Persone </option>
                                             <option value={1}>One</option>
                                             <option value={2}>Two</option>
                                             <option value={3}>Three</option>
                                          </select>
                                       </div>
                                       <div className="form_btn">
                                          <a href="s" className="btn_1">
                                             search
                                          </a>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                           <div
                              className="tab-pane fade"
                              id="tricket"
                              role="tabpanel"
                              aria-labelledby="tricket-tab"
                           >
                              <div className="booking_form">
                                 <form action="#">
                                    <div className="form-row">
                                       <div className="form_colum">
                                          <select className="nc_select">
                                             <option selected>
                                                Choosace place{" "}
                                             </option>
                                             <option value={1}>One</option>
                                             <option value={2}>Two</option>
                                             <option value={3}>Three</option>
                                          </select>
                                       </div>
                                       <div className="form_colum">
                                          <input
                                             id="datepicker_3"
                                             placeholder="Check in date"
                                          />
                                       </div>
                                       <div className="form_colum">
                                          <input
                                             id="datepicker_4"
                                             placeholder="Check in date"
                                          />
                                       </div>
                                       <div className="form_colum">
                                          <select className="nc_select">
                                             <option selected>Persone </option>
                                             <option value={1}>One</option>
                                             <option value={2}>Two</option>
                                             <option value={3}>Three</option>
                                          </select>
                                       </div>
                                       <div className="form_btn">
                                          <a href="s" className="btn_1">
                                             search
                                          </a>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                           <div
                              className="tab-pane fade"
                              id="place"
                              role="tabpanel"
                              aria-labelledby="place-tab"
                           >
                              <div className="booking_form">
                                 <form action="#">
                                    <div className="form-row">
                                       <div className="form_colum">
                                          <select className="nc_select">
                                             <option selected>
                                                Choosace place{" "}
                                             </option>
                                             <option value={1}>One</option>
                                             <option value={2}>Two</option>
                                             <option value={3}>Three</option>
                                          </select>
                                       </div>
                                       <div className="form_colum">
                                          <input
                                             id="datepicker_5"
                                             placeholder="Check in date"
                                          />
                                       </div>
                                       <div className="form_colum">
                                          <input
                                             id="datepicker_6"
                                             placeholder="Check in date"
                                          />
                                       </div>
                                       <div className="form_colum">
                                          <select className="nc_select">
                                             <option selected>Persone </option>
                                             <option value={1}>One</option>
                                             <option value={2}>Two</option>
                                             <option value={3}>Three</option>
                                          </select>
                                       </div>
                                       <div className="form_btn">
                                          <a href="s" className="btn_1">
                                             search
                                          </a>
                                       </div>
                                    </div>
                                 </form>
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
