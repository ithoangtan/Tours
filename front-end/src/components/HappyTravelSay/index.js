import React, { Component } from "react";

export default class IndexHappyTravelSay extends Component {
  render() {
    return (
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
                      backgroundImage: "url(images/traveler-1.jpg)"
                    }}
                  >
                    <div className="overlay" />
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="testimony-wrap"
                    style={{
                      backgroundImage: "url(images/traveler-2.jpg)"
                    }}
                  >
                    <div className="overlay" />
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">Interface Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="testimony-wrap"
                    style={{
                      backgroundImage: "url(images/traveler-3.jpg)"
                    }}
                  >
                    <div className="overlay" />
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="testimony-wrap"
                    style={{
                      backgroundImage: "url(images/traveler-4.jpg)"
                    }}
                  >
                    <div className="overlay" />
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">Web Developer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div
                    className="testimony-wrap"
                    style={{
                      backgroundImage: "url(images/traveler-5.jpg)"
                    }}
                  >
                    <div className="overlay" />
                    <div className="text">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
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
    );
  }
}
