import React, { Component } from 'react'

export default class all extends Component {
    render() {
        return (
           <div>
        {/*::header part start::*/}
        <header className="main_menu">
          <div className="sub_menu">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-6">
                  <div className="sub_menu_right_content">
                    <span>Top destinations</span>
                    <a href="#">Asia</a>
                    <a href="#">Europe</a>
                    <a href="#">America</a>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6">
                  <div className="sub_menu_social_icon">
                    <a href="#"><i className="flaticon-facebook" /></a>
                    <a href="#"><i className="flaticon-twitter" /></a>
                    <a href="#"><i className="flaticon-skype" /></a>
                    <a href="#"><i className="flaticon-instagram" /></a>
                    <span><i className="flaticon-phone-call" />+880 356 257 142</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_menu_iner">
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo" /> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse main-menu-item justify-content-center" id="navbarSupportedContent">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="packages.html">packages</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="blog.html">Blog</a>
                            <a className="dropdown-item" href="single-blog.html">Single blog</a>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            pages
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                            <a className="dropdown-item" href="top_place.html">top place</a>
                            <a className="dropdown-item" href="tour_details.html">tour details</a>
                            <a className="dropdown-item" href="elements.html">Elements</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn_1 d-none d-lg-block">book now</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header part end*/}
        {/* banner part start*/}
        <section className="banner_part">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-10">
                <div className="banner_text text-center">
                  <div className="banner_text_iner">
                    <h1> Saintmartine</h1>
                    <p>Let’s start your journey with us, your dream will come true</p>
                    <a href="#" className="btn_1">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner part start*/}
        {/* booking part start*/}
        <section className="booking_part">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="booking_menu">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="hotel-tab" data-toggle="tab" href="#hotel" role="tab" aria-controls="hotel" aria-selected="true">hotel</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="tricket-tab" data-toggle="tab" href="#tricket" role="tab" aria-controls="tricket" aria-selected="false">tricket</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="place-tab" data-toggle="tab" href="#place" role="tab" aria-controls="place" aria-selected="false">place</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="booking_content">
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="hotel" role="tabpanel" aria-labelledby="hotel-tab">
                      <div className="booking_form">
                        <form action="#">
                          <div className="form-row">
                            <div className="form_colum">
                              <select className="nc_select">
                                <option selected>Choosace place </option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                            <div className="form_colum">
                              <input id="datepicker_1" placeholder="Check in date" />
                            </div>
                            <div className="form_colum">
                              <input id="datepicker_2" placeholder="Check in date" />
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
                              <a href="#" className="btn_1">search</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tricket" role="tabpanel" aria-labelledby="tricket-tab">
                      <div className="booking_form">
                        <form action="#">
                          <div className="form-row">
                            <div className="form_colum">
                              <select className="nc_select">
                                <option selected>Choosace place </option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                            <div className="form_colum">
                              <input id="datepicker_3" placeholder="Check in date" />
                            </div>
                            <div className="form_colum">
                              <input id="datepicker_4" placeholder="Check in date" />
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
                              <a href="#" className="btn_1">search</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="place" role="tabpanel" aria-labelledby="place-tab">
                      <div className="booking_form">
                        <form action="#">
                          <div className="form-row">
                            <div className="form_colum">
                              <select className="nc_select">
                                <option selected>Choosace place </option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                            <div className="form_colum">
                              <input id="datepicker_5" placeholder="Check in date" />
                            </div>
                            <div className="form_colum">
                              <input id="datepicker_6" placeholder="Check in date" />
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
                              <a href="#" className="btn_1">search</a>
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
        {/* Header part end*/}
        {/*top place start*/}
        <section className="top_place section_padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section_tittle text-center">
                  <h2>Top Places to visit</h2>
                  <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <img src="img/single_place_1.png" alt="" />
                  <div className="hover_Text d-flex align-items-end justify-content-between">
                    <div className="hover_text_iner">
                      <a href="#" className="place_btn">travel</a>
                      <h3>Saintmartine Iceland</h3>
                      <p>Technaf, Bangladesh</p>
                      <div className="place_review">
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <span>(210 review)</span>
                      </div>
                    </div>
                    <div className="details_icon text-right">
                      <i className="ti-share" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <img src="img/single_place_2.png" alt="" />
                  <div className="hover_Text d-flex align-items-end justify-content-between">
                    <div className="hover_text_iner">
                      <a href="#" className="place_btn">travel</a>
                      <h3>Saintmartine Iceland</h3>
                      <p>Technaf, Bangladesh</p>
                      <div className="place_review">
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <span>(210 review)</span>
                      </div>
                    </div>
                    <div className="details_icon text-right">
                      <i className="ti-share" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <img src="img/single_place_3.png" alt="" />
                  <div className="hover_Text d-flex align-items-end justify-content-between">
                    <div className="hover_text_iner">
                      <a href="#" className="place_btn">travel</a>
                      <h3>Saintmartine Iceland</h3>
                      <p>Technaf, Bangladesh</p>
                      <div className="place_review">
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <span>(210 review)</span>
                      </div>
                    </div>
                    <div className="details_icon text-right">
                      <i className="ti-share" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single_place">
                  <img src="img/single_place_4.png" alt="" />
                  <div className="hover_Text d-flex align-items-end justify-content-between">
                    <div className="hover_text_iner">
                      <a href="#" className="place_btn">travel</a>
                      <h3>Saintmartine Iceland</h3>
                      <p>Technaf, Bangladesh</p>
                      <div className="place_review">
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <a href="#"><i className="fas fa-star" /></a>
                        <span>(210 review)</span>
                      </div>
                    </div>
                    <div className="details_icon text-right">
                      <i className="ti-share" />
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn_1 text-cnter">Discover more</a>
            </div>
          </div>
        </section>
        {/*top place end*/}
        {/*top place start*/}
        <section className="event_part section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="event_slider owl-carousel">
                  <div className="single_event_slider">
                    <div className="row justify-content-end">
                      <div className="col-lg-6 col-md-6">
                        <div className="event_slider_content">
                          <h5>Upcoming Event</h5>
                          <h2>Maldeve - Asia</h2>
                          <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.
                          </p>
                          <p>date: <span>12 Aug 2019</span> </p>
                          <p>Cost: <span>Start from $820</span> </p>
                          <p>Organizer: <span> Martine Agency</span> </p>
                          <div className="rating">
                            <span>Rating:</span>
                            <div className="place_review">
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                            </div>
                          </div>
                          <a href="#" className="btn_1">Plan Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_event_slider">
                    <div className="row justify-content-end">
                      <div className="ol-lg-6 col-md-6">
                        <div className="event_slider_content">
                          <h5>Upcoming Event</h5>
                          <h2>Maldeve - Asia</h2>
                          <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.
                          </p>
                          <p>date: <span>12 Aug 2019</span> </p>
                          <p>Cost: <span>Start from $820</span> </p>
                          <p>Organizer: <span> Martine Agency</span> </p>
                          <div className="rating">
                            <span>Rating:</span>
                            <div className="place_review">
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                            </div>
                          </div>
                          <a href="#" className="btn_1">Plan Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_event_slider">
                    <div className="row justify-content-end">
                      <div className="ol-lg-6 col-md-6">
                        <div className="event_slider_content">
                          <h5>Upcoming Event</h5>
                          <h2>Maldeve - Asia</h2>
                          <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.
                          </p>
                          <p>date: <span>12 Aug 2019</span> </p>
                          <p>Cost: <span>Start from $820</span> </p>
                          <p>Organizer: <span> Martine Agency</span> </p>
                          <div className="rating">
                            <span>Rating:</span>
                            <div className="place_review">
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                              <a href="#"><i className="fas fa-star" /></a>
                            </div>
                          </div>
                          <a href="#" className="btn_1">Plan Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*top place end*/}
        {/*::industries start::*/}
        <section className="hotel_list section_padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section_tittle text-center">
                  <h2>Top Hotel &amp; Restaurants</h2>
                  <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="single_ihotel_list">
                  <img src="img/ind/industries_1.png" alt="" />
                  <div className="hover_text">
                    <div className="hotel_social_icon">
                      <ul>
                        <li><a href="#"><i className="ti-facebook" /></a></li>
                        <li><a href="#"><i className="ti-twitter-alt" /></a></li>
                        <li><a href="#"><i className="ti-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="share_icon">
                      <i className="ti-share" />
                    </div>
                  </div>
                  <div className="hotel_text_iner">
                    <h3> <a href="#"> Hotel Polonia</a></h3>
                    <div className="place_review">
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <span>(210 review)</span>
                    </div>
                    <p>London, United Kingdom</p>
                    <h5>From <span>$500</span></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single_ihotel_list">
                  <img src="img/ind/industries_2.png" alt="" />
                  <div className="hover_text">
                    <div className="hotel_social_icon">
                      <ul>
                        <li><a href="#"><i className="ti-facebook" /></a></li>
                        <li><a href="#"><i className="ti-twitter-alt" /></a></li>
                        <li><a href="#"><i className="ti-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="share_icon">
                      <i className="ti-share" />
                    </div>
                  </div>
                  <div className="hotel_text_iner">
                    <h3> <a href="#"> Hotel Polonia</a></h3>
                    <div className="place_review">
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <span>(210 review)</span>
                    </div>
                    <p>London, United Kingdom</p>
                    <h5>From <span>$500</span></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single_ihotel_list">
                  <img src="img/ind/industries_3.png" alt="" />
                  <div className="hover_text">
                    <div className="hover_text">
                      <div className="hotel_social_icon">
                        <ul>
                          <li><a href="#"><i className="ti-facebook" /></a></li>
                          <li><a href="#"><i className="ti-twitter-alt" /></a></li>
                          <li><a href="#"><i className="ti-linkedin" /></a></li>
                        </ul>
                      </div>
                      <div className="share_icon">
                        <i className="ti-share" />
                      </div>
                    </div>
                  </div>
                  <div className="hotel_text_iner">
                    <h3> <a href="#"> Hotel Polonia</a></h3>
                    <div className="place_review">
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <span>(210 review)</span>
                    </div>
                    <p>London, United Kingdom</p>
                    <h5>From <span>$500</span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*::industries end::*/}
        {/*top place start*/}
        <section className="client_review section_padding">
          <div className="container">
            <div className="row ">
              <div className="col-xl-6">
                <div className="section_tittle">
                  <h2>What they said</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="client_review_slider owl-carousel">
                  <div className="single_review_slider">
                    <div className="place_review">
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                    </div>
                    <p>Waters make fish every without firmament saw had. Morning air subdue. Our Air very one whales grass is fish whales winged night yielding land creeping that seed </p>
                    <h5> - Allen Miller</h5>
                  </div>
                  <div className="single_review_slider">
                    <div className="place_review">
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                    </div>
                    <p>Waters make fish every without firmament saw had. Morning air subdue. Our Air very one whales grass is fish whales winged night yielding land creeping that seed </p>
                    <h5> - Allen Miller</h5>
                  </div>
                  <div className="single_review_slider">
                    <div className="place_review">
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                    </div>
                    <p>Waters make fish every without firmament saw had. Morning air subdue. Our Air very one whales grass is fish whales winged night yielding land creeping that seed </p>
                    <h5> - Allen Miller</h5>
                  </div>
                  <div className="single_review_slider">
                    <div className="place_review">
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                    </div>
                    <p>Waters make fish every without firmament saw had. Morning air subdue. Our Air very one whales grass is fish whales winged night yielding land creeping that seed </p>
                    <h5> - Allen Miller</h5>
                  </div>
                  <div className="single_review_slider">
                    <div className="place_review">
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                      <a href="#"><i className="fas fa-star" /></a>
                    </div>
                    <p>Waters make fish every without firmament saw had. Morning air subdue. Our Air very one whales grass is fish whales winged night yielding land creeping that seed </p>
                    <h5> - Allen Miller</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*top place end*/}
        {/*::industries start::*/}
        <section className="best_services section_padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section_tittle text-center">
                  <h2>We offered best services</h2>
                  <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single_ihotel_list">
                  <img src="img/services_1.png" alt="" />
                  <h3> <a href="#"> Transportation</a></h3>
                  <p>All transportation cost we bear</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_ihotel_list">
                  <img src="img/services_2.png" alt="" />
                  <h3> <a href="#"> Guidence</a></h3>
                  <p>We offer the best guidence for you</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_ihotel_list">
                  <img src="img/services_3.png" alt="" />
                  <h3> <a href="#"> Accomodation</a></h3>
                  <p>Luxarious and comfortable</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single_ihotel_list">
                  <img src="img/services_4.png" alt="" />
                  <h3> <a href="#"> Discover world</a></h3>
                  <p>Best tour plan for your next tour</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*::industries end::*/}
        {/* footer part start*/}
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-sm-6 col-md-5">
                <div className="single-footer-widget">
                  <h4>Discover Destination</h4>
                  <ul>
                    <li><a href="#">Miami, USA</a></li>
                    <li><a href="#">California, USA</a></li>
                    <li><a href="#">London, UK</a></li>
                    <li><a href="#">Saintmartine, Bangladesh</a></li>
                    <li><a href="#">Mount Everast, India</a></li>
                    <li><a href="#">Sidney, Australia</a></li>
                    <li><a href="#">Miami, USA</a></li>
                    <li><a href="#">California, USA</a></li>
                    <li><a href="#">London, UK</a></li>
                    <li><a href="#">Saintmartine, Bangladesh</a></li>
                    <li><a href="#">Mount Everast, India</a></li>
                    <li><a href="#">Sidney, Australia</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="single-footer-widget">
                  <h4>Subscribe Newsletter</h4>
                  <div className="form-wrap" id="mc_embed_signup">
                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="form-inline">
                      <input className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" required type="email" />
                      <button className="click-btn btn btn-default text-uppercase"> <i className="far fa-paper-plane" />
                      </button>
                      <div style={{position: 'absolute', left: '-5000px'}}>
                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
                      </div>
                      <div className="info" />
                    </form>
                  </div>
                  <p>Subscribe our newsletter to get update news and offers</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="single-footer-widget footer_icon">
                  <h4>Contact Us</h4>
                  <p>4156, New garden, New York, USA
                    +880 362 352 783</p>
                  <span>contact@martine.com</span>
                  <div className="social-icons">
                    <a href="#"><i className="ti-facebook" /></a>
                    <a href="#"><i className="ti-twitter-alt" /></a>
                    <a href="#"><i className="ti-pinterest" /></a>
                    <a href="#"><i className="ti-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="copyright_part_text text-center">
                  <p className="footer-text m-0">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer part end*/}
      </div>
        )
    }
}
