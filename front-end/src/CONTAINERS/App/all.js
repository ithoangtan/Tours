import React, { Component } from 'react'

export default class all extends Component {
    render() {
        return (
           <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html"><span>Traveland</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                <li className="nav-item"><a href="destination.html" className="nav-link">Destination</a></li>
                <li className="nav-item"><a href="hotel-resto.html" className="nav-link">Hotels &amp; Restaurant</a></li>
                <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                <li className="nav-item cta"><a href="#" className="nav-link">Book Now</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
              <div className="col-md-7 ftco-animate mt-5" data-scrollax=" properties: { translateY: '70%' }">
                <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Be a Traveler not a Tourist</h1>
                <p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Travel to the any corner of the world, without going around in circles</p>
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-section ftco-no-pb ftco-no-pt">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="search-wrap-1 ftco-animate p-4">
                  <form action="#" className="search-property-1">
                    <div className="row">
                      <div className="col-lg align-items-end">
                        <div className="form-group">
                          <label htmlFor="#">Destination</label>
                          <div className="form-field">
                            <div className="icon"><span className="ion-ios-search" /></div>
                            <input type="text" className="form-control" placeholder="Search place" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg align-items-end">
                        <div className="form-group">
                          <label htmlFor="#">Check-in date</label>
                          <div className="form-field">
                            <div className="icon"><span className="ion-ios-calendar" /></div>
                            <input type="text" className="form-control checkin_date" placeholder="Check In Date" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg align-items-end">
                        <div className="form-group">
                          <label htmlFor="#">Check-out date</label>
                          <div className="form-field">
                            <div className="icon"><span className="ion-ios-calendar" /></div>
                            <input type="text" className="form-control checkout_date" placeholder="Check Out Date" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg align-items-end">
                        <div className="form-group">
                          <label htmlFor="#">Price Limit</label>
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon"><span className="ion-ios-arrow-down" /></div>
                              <select name id className="form-control">
                                <option value>$5,000</option>
                                <option value>$10,000</option>
                                <option value>$50,000</option>
                                <option value>$100,000</option>
                                <option value>$200,000</option>
                                <option value>$300,000</option>
                                <option value>$400,000</option>
                                <option value>$500,000</option>
                                <option value>$600,000</option>
                                <option value>$700,000</option>
                                <option value>$800,000</option>
                                <option value>$900,000</option>
                                <option value>$1,000,000</option>
                                <option value>$2,000,000</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg align-self-end">
                        <div className="form-group">
                          <div className="form-field">
                            <input type="submit" defaultValue="Search" className="form-control btn btn-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h2 className="mb-4">Best Place to Travel</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="project">
                  <div className="img">
                    <img src="images/destination-1.jpg" className="img-fluid" alt="Colorlib Template" />
                  </div>
                  <div className="text">
                    <h4 className="price">$400</h4>
                    <span>15 Days Tour</span>
                    <h3><a href="project.html">Gurtnellen, Swetzerland</a></h3>
                    <div className="star d-flex clearfix">
                      <div className="mr-auto float-left">
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                      </div>
                      <div className="float-right">
                        <span className="rate"><a href="#">(120)</a></span>
                      </div>
                    </div>
                  </div>
                  <a href="images/destination-1.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="icon-expand" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="project">
                  <div className="img">
                    <img src="images/destination-2.jpg" className="img-fluid" alt="Colorlib Template" />
                  </div>
                  <div className="text">
                    <h4 className="price">$400</h4>
                    <span>15 Days Tour</span>
                    <h3><a href="project.html">Gurtnellen, Swetzerland</a></h3>
                    <div className="star d-flex clearfix">
                      <div className="mr-auto float-left">
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                      </div>
                      <div className="float-right">
                        <span className="rate"><a href="#">(120)</a></span>
                      </div>
                    </div>
                  </div>
                  <a href="images/destination-2.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="icon-expand" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="project">
                  <div className="img">
                    <img src="images/destination-3.jpg" className="img-fluid" alt="Colorlib Template" />
                  </div>
                  <div className="text">
                    <h4 className="price">$400</h4>
                    <span>15 Days Tour</span>
                    <h3><a href="project.html">Gurtnellen, Swetzerland</a></h3>
                    <div className="star d-flex clearfix">
                      <div className="mr-auto float-left">
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                      </div>
                      <div className="float-right">
                        <span className="rate"><a href="#">(120)</a></span>
                      </div>
                    </div>
                  </div>
                  <a href="images/destination-3.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="icon-expand" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="project">
                  <div className="img">
                    <img src="images/destination-4.jpg" className="img-fluid" alt="Colorlib Template" />
                  </div>
                  <div className="text">
                    <h4 className="price">$400</h4>
                    <span>15 Days Tour</span>
                    <h3><a href="project.html">Gurtnellen, Swetzerland</a></h3>
                    <div className="star d-flex clearfix">
                      <div className="mr-auto float-left">
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                      </div>
                      <div className="float-right">
                        <span className="rate"><a href="#">(120)</a></span>
                      </div>
                    </div>
                  </div>
                  <a href="images/destination-4.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="icon-expand" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section services-section bg-light">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block">
                  <div className="icon"><span className="flaticon-yatch" /></div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Activities</h3>
                    <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block">
                  <div className="icon"><span className="flaticon-around" /></div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Travel Arrangements</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                  </div>
                </div>    
              </div>
              <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block">
                  <div className="icon"><span className="flaticon-compass" /></div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Private Guide</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                  </div>
                </div>      
              </div>
              <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-block">
                  <div className="icon"><span className="flaticon-map-of-roads" /></div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Location Manager</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
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
                <div className="img d-flex align-self-stretch" style={{backgroundImage: 'url(images/about.jpg)'}} />
              </div>
              <div className="col-md-6 pl-md-5 py-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h2 className="mb-4">About Traveland</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={30}>0</strong>
                        <span>Amazing Deals</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={200}>0</strong>
                        <span>Sold Tours</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={2500}>0</strong>
                        <span>New Tours</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center py-5 bg-light mb-4">
                      <div className="text">
                        <strong className="number" data-number={40}>0</strong>
                        <span>Happy Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h2 className="mb-4">Hotel &amp; Restaurant</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 ftco-animate">
                <div className="project">
                  <div className="img">
                    <img src="images/hotel-resto-1.jpg" className="img-fluid" alt="Colorlib Template" />
                  </div>
                  <div className="text">
                    <h4 className="price">$600</h4>
                    <span>300 per person</span>
                    <h3><a href="project.html">New Orleans Hotel</a></h3>
                    <div className="star d-flex clearfix">
                      <div className="mr-auto float-left">
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                      </div>
                      <div className="float-right">
                        <span className="rate"><a href="#">(120)</a></span>
                      </div>
                    </div>
                  </div>
                  <a href="images/hotel-resto-1.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="icon-expand" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 ftco-animate">
                <div className="project">
                  <div className="img">
                    <img src="images/hotel-resto-2.jpg" className="img-fluid" alt="Colorlib Template" />
                  </div>
                  <div className="text">
                    <h4 className="price">$600</h4>
                    <span>300 per person</span>
                    <h3><a href="project.html">New Orleans Hotel</a></h3>
                    <div className="star d-flex clearfix">
                      <div className="mr-auto float-left">
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                      </div>
                      <div className="float-right">
                        <span className="rate"><a href="#">(120)</a></span>
                      </div>
                    </div>
                  </div>
                  <a href="images/hotel-resto-2.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="icon-expand" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 ftco-animate">
                <div className="project">
                  <div className="img">
                    <img src="images/hotel-resto-3.jpg" className="img-fluid" alt="Colorlib Template" />
                  </div>
                  <div className="text">
                    <h4 className="price">$600</h4>
                    <span>300 per person</span>
                    <h3><a href="project.html">New Orleans Restaurant</a></h3>
                    <div className="star d-flex clearfix">
                      <div className="mr-auto float-left">
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                        <span className="ion-ios-star" />
                      </div>
                      <div className="float-right">
                        <span className="rate"><a href="#">(120)</a></span>
                      </div>
                    </div>
                  </div>
                  <a href="images/hotel-resto-3.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="icon-expand" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-counter img" id="section-counter">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-6 order-md-last d-flex">
                <div className="img d-flex align-self-stretch" style={{backgroundImage: 'url(images/about-1.jpg)'}} />
              </div>
              <div className="col-md-6 pr-md-5 py-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h2 className="mb-4">Things to Know Before Traveling to other Places</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="ftco-animate tips"><span>1.</span> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <p className="ftco-animate tips"><span>2.</span> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p className="ftco-animate tips"><span>3.</span> It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p className="ftco-animate mt-4"><a href="#" className="btn btn-primary py-3 px-5">Read more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb testimony-section" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
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
                    <div className="testimony-wrap img" style={{backgroundImage: 'url(images/traveler-1.jpg)'}}>
                      <div className="overlay" />
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap" style={{backgroundImage: 'url(images/traveler-2.jpg)'}}>
                      <div className="overlay" />
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">Interface Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap" style={{backgroundImage: 'url(images/traveler-3.jpg)'}}>
                      <div className="overlay" />
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">UI Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap" style={{backgroundImage: 'url(images/traveler-4.jpg)'}}>
                      <div className="overlay" />
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">Web Developer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap" style={{backgroundImage: 'url(images/traveler-5.jpg)'}}>
                      <div className="overlay" />
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Roger Scott</p>
                        <span className="position">System Analyst</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h2>Recent Stories</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                  </a>
                  <div className="text mt-3 float-right d-block">
                    <div className="d-flex align-items-center pt-2 mb-4 topp">
                      <div className="one">
                        <span className="day">12</span>
                      </div>
                      <div className="two">
                        <span className="yr">2019</span>
                        <span className="mos">February</span>
                      </div>
                    </div>
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                  </a>
                  <div className="text mt-3 float-right d-block">
                    <div className="d-flex align-items-center pt-2 mb-4 topp">
                      <div className="one">
                        <span className="day">12</span>
                      </div>
                      <div className="two">
                        <span className="yr">2019</span>
                        <span className="mos">February</span>
                      </div>
                    </div>
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry">
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                  </a>
                  <div className="text mt-3 float-right d-block">
                    <div className="d-flex align-items-center pt-2 mb-4 topp">
                      <div className="one">
                        <span className="day">12</span>
                      </div>
                      <div className="two">
                        <span className="yr">2019</span>
                        <span className="mos">February</span>
                      </div>
                    </div>
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-subscribe" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
          <div className="overlay">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 text-wrap text-center heading-section ftco-animate">
                  <h2>Subcribe to our Newsletter</h2>
                  <div className="row d-flex justify-content-center mt-4 mb-4">
                    <div className="col-md-10">
                      <form action="#" className="subscribe-form">
                        <div className="form-group d-flex">
                          <input type="text" className="form-control" placeholder="Enter email address" />
                          <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="ftco-footer ftco-footer-2 ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Traveland</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-5">
                  <h2 className="ftco-heading-2">Infromation</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block">Online Enquiry</a></li>
                    <li><a href="#" className="py-2 d-block">General Enquiries</a></li>
                    <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
                    <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                    <li><a href="#" className="py-2 d-block">Refund Policy</a></li>
                    <li><a href="#" className="py-2 d-block">Call Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Experience</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block">Adventure</a></li>
                    <li><a href="#" className="py-2 d-block">Hotel and Restaurant</a></li>
                    <li><a href="#" className="py-2 d-block">Beach</a></li>
                    <li><a href="#" className="py-2 d-block">Nature</a></li>
                    <li><a href="#" className="py-2 d-block">Camping</a></li>
                    <li><a href="#" className="py-2 d-block">Party</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </footer>
        {/* loader */}
        <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
      </div>
        )
    }
}
