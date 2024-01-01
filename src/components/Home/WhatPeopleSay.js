import React from "react";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";

import i1 from "../../assets/images/user-6-62x62.jpg";
import i2 from "../../assets/images/user-10-62x62.jpg";
import i3 from "../../assets/images/user-11-62x62.jpg";
import i4 from "../../assets/images/user-5-62x62.jpg";
import i5 from "../../assets/images/user-12-62x62.jpg";
import i6 from "../../assets/images/user-1-62x62.jpg";

var isNoviBuilder = false;
var c = $(".owl-carousel");
const options = {
  autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
  loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
  items: 3,
  center: c.attr("data-center") === "true",
  dotsContainer: c.attr("data-pagination-class") || false,
  navContainer: c.attr("data-navigation-class") || false,
  mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
  nav: c.attr("data-nav") === "true",
  dots: c.attr("data-dots") === "true",
  dotsEach: c.attr("data-dots-each")
    ? parseInt(c.attr("data-dots-each"), 10)
    : false,
  animateIn: c.attr("data-animation-in") ? c.attr("data-animation-in") : false,
  animateOut: c.attr("data-animation-out")
    ? c.attr("data-animation-out")
    : false,
  responsive: [],
  smartSpeed: c.attr("data-smart-speed") ? c.attr("data-smart-speed") : 250,
  navText: c.attr("data-nav-text") ? $.parseJSON(c.attr("data-nav-text")) : [],
  navClass: c.attr("data-nav-class")
    ? $.parseJSON(c.attr("data-nav-class"))
    : ["owl-prev", "owl-next"],
};

class WhatPeopleSay extends React.Component {
  render() {
    return (
      <section className="section section-xxl bg-default">
        <div className="container">
          <h2 className="title-style-8 wow fadeScale">What People Say</h2>
          {}
          <div
            className="owl-style-12 owl-dots-styles-1"
            // className="owl-carousel owl-style-12 owl-dots-styles-1"
            data-items={1}
            data-sm-items={2}
            data-lg-items={3}
            data-margin={30}
            data-dots="true"
            data-autoplay="true"
          >
            <OwlCarousel {...options}>
              {}
              <article className="quote-creative">
                <div className="quote-creative-text">
                  <div className="q">
                    We had a wonderful time visiting your winery!
                  </div>
                </div>
                <div className="quote-creative-rating">
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                </div>
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-creative-figure">
                      <img src={i1} alt width={62} height={62} />
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-creative-author">Lisa Goodman</div>
                  </div>
                </div>
              </article>
              {}
              <article className="quote-creative">
                <div className="quote-creative-text">
                  <div className="q">
                    Thank you for the excellent wine tasting event.
                  </div>
                </div>
                <div className="quote-creative-rating">
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                </div>
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-creative-figure">
                      <img src={i2} alt width={62} height={62} />
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-creative-author">Joe Wilson</div>
                  </div>
                </div>
              </article>
              {}
              <article className="quote-creative">
                <div className="quote-creative-text">
                  <div className="q">
                    Your wine selection is great and very diverse!
                  </div>
                </div>
                <div className="quote-creative-rating">
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                </div>
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-creative-figure">
                      <img src={i3} alt width={62} height={62} />
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-creative-author">Jane Williams</div>
                  </div>
                </div>
              </article>
              {}
              <article className="quote-creative">
                <div className="quote-creative-text">
                  <div className="q">
                    Thank you for the best wine tour I’ve experienced!
                  </div>
                </div>
                <div className="quote-creative-rating">
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                </div>
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-creative-figure">
                      <img src={i4} alt width={62} height={62} />
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-creative-author">Sam Peterson</div>
                  </div>
                </div>
              </article>
              {}
              <article className="quote-creative">
                <div className="quote-creative-text">
                  <div className="q">
                    I enjoy your wines and wine tasting events a lot.
                  </div>
                </div>
                <div className="quote-creative-rating">
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                </div>
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-creative-figure">
                      <img src={i5} alt width={62} height={62} />
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-creative-author">James mcMillan</div>
                  </div>
                </div>
              </article>
              {}
              <article className="quote-creative">
                <div className="quote-creative-text">
                  <div className="q">
                    You have very tasty and original wines. Thank you!
                  </div>
                </div>
                <div className="quote-creative-rating">
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                  <span className="icon mdi mdi-star" />
                </div>
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-creative-figure">
                      <img src={i6} alt width={62} height={62} />
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-creative-author">Kate Russell</div>
                  </div>
                </div>
              </article>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatPeopleSay;
