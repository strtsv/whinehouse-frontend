import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/event-1-385x392.jpg";
import i2 from "../../assets/images/event-2-385x392.jpg";
import i3 from "../../assets/images/event-3-385x392.jpg";
import i4 from "../../assets/images/event-1-385x392.jpg";
import i5 from "../../assets/images/event-2-385x392.jpg";
import i6 from "../../assets/images/event-3-385x392.jpg";

class Events extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <section className="section section-xxl section-bottom-0 bg-image-5 context-dark">
        <div className="container">
          <h2 className="title-style-8 wow fadeScale">Featured Events</h2>
          {}
          <div
            className="swiper-container swiper-slider swiper-slider-custom swiper-slider-5 swiper-scrollbar-1"
            data-autoplay={5000}
            data-direction="vertical"
            data-margin={40}
            data-slides="auto"
            data-simulate-touch="true"
            data-mousewheel="true"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {}
                <article className="event-classic block-2">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch">
                      <a className="event-classic-figure" href="#">
                        <img
                          className="event-classic-image"
                          src={i1}
                          alt
                          width={385}
                          height={392}
                        />
                      </a>
                    </div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time
                              className="event-classic-time"
                              dateTime="2019-08-11"
                            >
                              <span className="event-classic-date">11</span>
                              <span className="event-classic-month">Aug</span>
                              <span className="event-classic-hours">
                                6-9 pm
                              </span>
                            </time>
                          </div>
                          <div className="unit-body">
                            <h4 className="event-classic-title">
                              <a href="#">Wine Festival ‘Spring Hill’</a>
                            </h4>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price">
                                <span className="icon fa fa-money" />
                                <span> - $340.00</span>
                              </li>
                              <li className="event-classic-location">
                                <span className="icon fa fa-location-arrow" />
                                <a href="#">Winehouse Winery</a>
                              </li>
                            </ul>
                            <p className="event-classic-text">
                              Spend the day sampling the best Tennessee wines,
                              shopping unique vintage and artisan wares, and
                              listening to live music. Also returning this year
                              is the...
                            </p>
                            <a
                              className="link-classic event-classic-link"
                              href="#"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {}
                <article className="event-classic block-2">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch">
                      <a className="event-classic-figure" href="#">
                        <img
                          className="event-classic-image"
                          src={i2}
                          alt
                          width={385}
                          height={392}
                        />
                      </a>
                    </div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time
                              className="event-classic-time"
                              dateTime="2019-08-18"
                            >
                              <span className="event-classic-date">18</span>
                              <span className="event-classic-month">Aug</span>
                              <span className="event-classic-hours">
                                4-6 pm
                              </span>
                            </time>
                          </div>
                          <div className="unit-body">
                            <h4 className="event-classic-title">
                              <a href="#">Spectacular Wine Weekend</a>
                            </h4>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price">
                                <span className="icon fa fa-money" />
                                <span> - $300.00</span>
                              </li>
                              <li className="event-classic-location">
                                <span className="icon fa fa-location-arrow" />
                                <a href="#">Winehouse Winery</a>
                              </li>
                            </ul>
                            <p className="event-classic-text">
                              This fun event held not far from our Winery
                              features amazing wineries and craft breweries that
                              are located right here in our hometown as well as
                              entertainment...
                            </p>
                            <a
                              className="link-classic event-classic-link"
                              href="#"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {}
                <article className="event-classic block-2">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch">
                      <a className="event-classic-figure" href="#">
                        <img
                          className="event-classic-image"
                          src={i3}
                          alt
                          width={385}
                          height={392}
                        />
                      </a>
                    </div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time
                              className="event-classic-time"
                              dateTime="2019-08-15"
                            >
                              <span className="event-classic-date">15</span>
                              <span className="event-classic-month">Aug</span>
                              <span className="event-classic-hours">
                                5-7 pm
                              </span>
                            </time>
                          </div>
                          <div className="unit-body">
                            <h4 className="event-classic-title">
                              <a href="#">31st Annual Barrel Tasting</a>
                            </h4>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price">
                                <span className="icon fa fa-money" />
                                <span> - $284.00</span>
                              </li>
                              <li className="event-classic-location">
                                <span className="icon fa fa-location-arrow" />
                                <a href="#">Winehouse Winery</a>
                              </li>
                            </ul>
                            <p className="event-classic-text">
                              This is your chance to sample wines from the
                              barrel, talk to winemakers and explore the
                              beautiful Alexander, Dry Creek, and Russian River
                              Valleys. Barrel...
                            </p>
                            <a
                              className="link-classic event-classic-link"
                              href="#"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {}
                <article className="event-classic block-2">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch">
                      <a className="event-classic-figure" href="#">
                        <img
                          className="event-classic-image"
                          src={i4}
                          alt
                          width={385}
                          height={392}
                        />
                      </a>
                    </div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time
                              className="event-classic-time"
                              dateTime="2019-08-11"
                            >
                              <span className="event-classic-date">11</span>
                              <span className="event-classic-month">Aug</span>
                              <span className="event-classic-hours">
                                6-9 pm
                              </span>
                            </time>
                          </div>
                          <div className="unit-body">
                            <h4 className="event-classic-title">
                              <a href="#">Wine Festival ‘Spring Hill’</a>
                            </h4>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price">
                                <span className="icon fa fa-money" />
                                <span> - $340.00</span>
                              </li>
                              <li className="event-classic-location">
                                <span className="icon fa fa-location-arrow" />
                                <a href="#">Winehouse Winery</a>
                              </li>
                            </ul>
                            <p className="event-classic-text">
                              Spend the day sampling the best Tennessee wines,
                              shopping unique vintage and artisan wares, and
                              listening to live music. Also returning this year
                              is the...
                            </p>
                            <a
                              className="link-classic event-classic-link"
                              href="#"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {}
                <article className="event-classic block-2">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch">
                      <a className="event-classic-figure" href="#">
                        <img
                          className="event-classic-image"
                          src={i5}
                          alt
                          width={385}
                          height={392}
                        />
                      </a>
                    </div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time
                              className="event-classic-time"
                              dateTime="2019-08-18"
                            >
                              <span className="event-classic-date">18</span>
                              <span className="event-classic-month">Aug</span>
                              <span className="event-classic-hours">
                                4-6 pm
                              </span>
                            </time>
                          </div>
                          <div className="unit-body">
                            <h4 className="event-classic-title">
                              <a href="#">Spectacular Wine Weekend</a>
                            </h4>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price">
                                <span className="icon fa fa-money" />
                                <span> - $300.00</span>
                              </li>
                              <li className="event-classic-location">
                                <span className="icon fa fa-location-arrow" />
                                <a href="#">Winehouse Winery</a>
                              </li>
                            </ul>
                            <p className="event-classic-text">
                              This fun event held not far from our Winery
                              features amazing wineries and craft breweries that
                              are located right here in our hometown as well as
                              entertainment...
                            </p>
                            <a
                              className="link-classic event-classic-link"
                              href="#"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                {}
                <article className="event-classic block-2">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch">
                      <a className="event-classic-figure" href="#">
                        <img
                          className="event-classic-image"
                          src={i6}
                          alt
                          width={385}
                          height={392}
                        />
                      </a>
                    </div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time
                              className="event-classic-time"
                              dateTime="2019-08-15"
                            >
                              <span className="event-classic-date">15</span>
                              <span className="event-classic-month">
                                Aug
                                <span className="event-classic-hours">
                                  5-7 pm
                                </span>
                              </span>
                            </time>
                          </div>
                          <div className="unit-body">
                            <h4 className="event-classic-title">
                              <a href="#">31st Annual Barrel Tasting</a>
                            </h4>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price">
                                <span className="icon fa fa-money" />
                                <span> - $284.00</span>
                              </li>
                              <li className="event-classic-location">
                                <span className="icon fa fa-location-arrow" />
                                <a href="#">Winehouse Winery</a>
                              </li>
                            </ul>
                            <p className="event-classic-text">
                              This is your chance to sample wines from the
                              barrel, talk to winemakers and explore the
                              beautiful Alexander, Dry Creek, and Russian River
                              Valleys. Barrel...
                            </p>
                            <a
                              className="link-classic event-classic-link"
                              href="#"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide swiper-slide-last" />
            </div>
            {}
            <div className="swiper-scrollbar" />
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
