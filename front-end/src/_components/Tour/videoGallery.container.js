import React, { Component } from "react";

export default class VideoGalleryContainer extends Component {
   render() {
      return (
         <section className="fix-video-gallery ftco-counter">
            <div
               id="video-carousel-example"
               className="carousel slide carousel-fade ftco-animate"
               data-ride="carousel"
            >
               {/*Indicators*/}
               <ol className="carousel-indicators ftco-animate">
                  <li
                     data-target="#video-carousel-example"
                     data-slide-to={0}
                     className="active"
                  />
                  <li data-target="#video-carousel-example" data-slide-to={1} />
                  <li data-target="#video-carousel-example" data-slide-to={2} />
               </ol>
               {/*/.Indicators*/}
               {/*Slides*/}
               <div className="carousel-inner ftco-animate" role="listbox">
                  <div className="carousel-item active">
                     <video
                        className="video-fluid fix-video-size"
                        autoPlay
                        loop
                        muted
                        width="1100px"
                     >
                        <source
                           src="https://mdbootstrap.com/img/video/Tropical.mp4"
                           type="video/mp4"
                        />
                     </video>
                  </div>
                  <div className="carousel-item">
                     <video
                        className="video-fluid"
                        autoPlay
                        loop
                        muted
                        width="1100px"
                     >
                        <source
                           src="https://mdbootstrap.com/img/video/forest.mp4"
                           type="video/mp4"
                        />
                     </video>
                  </div>
                  <div className="carousel-item">
                     <video
                        className="video-fluid"
                        autoPlay
                        loop
                        muted
                        width="1100px"
                     >
                        <source
                           src="https://mdbootstrap.com/img/video/Agua-natural.mp4"
                           type="video/mp4"
                        />
                     </video>
                  </div>
               </div>
               {/*/.Slides*/}
               {/*Controls*/}
               <a
                  className="carousel-control-prev "
                  href="#video-carousel-example"
                  role="button"
                  data-slide="prev"
               >
                  <span
                     className="carousel-control-prev-icon"
                     aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
               </a>
               <a
                  className="carousel-control-next"
                  href="#video-carousel-example"
                  role="button"
                  data-slide="next"
               >
                  <span
                     className="carousel-control-next-icon"
                     aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
               </a>
               {/*/.Controls*/}
            </div>
         </section>
      );
   }
}
