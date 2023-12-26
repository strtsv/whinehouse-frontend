import React from "react";
import Slider from "react-slick";
import $ from "jquery";

import i1 from "../../assets/images/product-big-1-186x597.png";
import i2 from "../../assets/images/product-big-2-186x597.png";
import i3 from "../../assets/images/product-big-3-186x597.png";

class Section extends React.Component {
  render() {
    var isNoviBuilder = false;
    var $slickItem = $(".slick-slider");
    var settings = {
      slidesToScroll:
        parseInt($slickItem.attr("data-slide-to-scroll"), 10) || 1,
      asNavFor: $slickItem.attr("data-for") || false,
      dots: $slickItem.attr("data-dots") === "true",
      infinite: isNoviBuilder ? false : $slickItem.attr("data-loop") === "true",
      focusOnSelect: $slickItem.attr("data-focus-select") || true,
      arrows: $slickItem.attr("data-arrows") === "true",
      swipe: $slickItem.attr("data-swipe") === "true",
      autoplay: $slickItem.attr("data-autoplay") === "true",
      centerMode: $slickItem.attr("data-center-mode") === "true",
      fade: $slickItem.attr("data-slide-effect") === "true",
      centerPadding: $slickItem.attr("data-center-padding")
        ? $slickItem.attr("data-center-padding")
        : "0.50",
      mobileFirst: true,
      appendArrows: $slickItem.attr("data-arrows-class") || $slickItem,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: parseInt($slickItem.attr("data-items"), 10) || 1,
            vertical: $slickItem.attr("data-vertical") === "true" || false,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: parseInt($slickItem.attr("data-sm-items"), 10) || 1,
            vertical: $slickItem.attr("data-sm-vertical") === "true" || false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt($slickItem.attr("data-md-items"), 10) || 1,
            vertical: $slickItem.attr("data-md-vertical") === "true" || false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt($slickItem.attr("data-lg-items"), 10) || 1,
            vertical: $slickItem.attr("data-lg-vertical") === "true" || false,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: parseInt($slickItem.attr("data-xl-items"), 10) || 1,
            vertical: $slickItem.attr("data-xl-vertical") === "true" || false,
          },
        },
        {
          breakpoint: 1599,
          settings: {
            slidesToShow: parseInt($slickItem.attr("data-xxl-items"), 10) || 1,
            vertical: $slickItem.attr("data-xxl-vertical") === "true" || false,
          },
        },
      ],
    };
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="row row-30 justify-content-center justify-content-md-between align-items-center">
            <div className="col-sm-5 col-md-4 col-lg-5 col-xl-7">
              <div className="slick-slider-2">
                <div
                  className="slick-slider child-carousel"
                  id="child-carousel-4"
                  data-items={1}
                  data-arrows="true"
                  data-arrows-class=".custom-arrows"
                  data-for="#carousel-parent-4"
                >
                  <Slider
                    className="slick-slider child-carousel"
                    id="child-carousel-4"
                    data-items={1}
                    data-arrows="true"
                    data-arrows-class=".custom-arrows"
                    data-for="#carousel-parent-4"
                    {...settings}
                  >
                    <div className="item">
                      <img src={i1} alt width={186} height={597} />
                    </div>
                    <div className="item">
                      <img src={i2} alt width={186} height={597} />
                    </div>
                    <div className="item">
                      <img src={i3} alt width={186} height={597} />
                    </div>
                  </Slider>
                </div>
                <div className="custom-arrows">
                  <span />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5">
              {}
              <div
                className="slick-slider carousel-parent"
                id="carousel-parent-4"
                data-items={1}
                data-autoplay="true"
                data-slide-effect="true"
                data-child="#child-carousel-4"
                data-for="#child-carousel-4"
              >
                <Slider
                  className="slick-slider carousel-parent"
                  id="carousel-parent-4"
                  data-items={1}
                  data-autoplay="true"
                  data-slide-effect="true"
                  data-child="#child-carousel-4"
                  data-for="#child-carousel-4"
                  {...settings}
                >
                  <div className="item">
                    {}
                    <article className="product-beth">
                      <div className="product-beth-badge">New Wines</div>
                      <h2 className="product-beth-title">
                        <a href="single-product.html">Red Bordeaux</a>
                      </h2>
                      <h4 className="product-beth-subtitle">
                        Winehouse Vineyard
                      </h4>
                      <p className="product-beth-text">
                        A red blend with a great taste that’s dominated by
                        Cabernet Sauvignon and Merlot, along with several other
                        grape varieties native to Bordeaux, France.
                      </p>
                      <div className="group-md group-middle">
                        <a
                          className="button button-lg button-primary-2 button-zakaria"
                          href="single-product.html"
                        >
                          Learn more
                        </a>
                        <a
                          className="button button-lg button-default-outline button-zakaria"
                          href="grid-shop.html"
                        >
                          View all
                        </a>
                      </div>
                    </article>
                  </div>
                </Slider>

                <div className="item">
                  {}
                  <article className="product-beth">
                    <div className="product-beth-badge">New Wines</div>
                    <h2 className="product-beth-title">
                      <a href="single-product.html">Merlot</a>
                    </h2>
                    <h4 className="product-beth-subtitle">
                      Winehouse Vineyard
                    </h4>
                    <p className="product-beth-text">
                      Merlot is loved for its boisterous black cherry flavors,
                      supple tannins, and chocolatey finish. On the high end,
                      it’s often mistaken with Cabernet Sauvignon.
                    </p>
                    <div className="group-md group-middle">
                      <a
                        className="button button-lg button-primary-2 button-zakaria"
                        href="single-product.html"
                      >
                        Learn more
                      </a>
                      <a
                        className="button button-lg button-default-outline button-zakaria"
                        href="grid-shop.html"
                      >
                        View all
                      </a>
                    </div>
                  </article>
                </div>
                <div className="item">
                  {}
                  <article className="product-beth">
                    <div className="product-beth-badge">New Wines</div>
                    <h2 className="product-beth-title">
                      <a href="single-product.html">Sauvignon Blanc</a>
                    </h2>
                    <h4 className="product-beth-subtitle">
                      Winehouse Vineyard
                    </h4>
                    <p className="product-beth-text">
                      The Sauvignon Blanc taste is very different from other
                      white wines, like Chardonnay, because of its green and
                      herbaceous flavors that are quite recognizable.
                    </p>
                    <div className="group-md group-middle">
                      <a
                        className="button button-lg button-primary-2 button-zakaria"
                        href="single-product.html"
                      >
                        Learn more
                      </a>
                      <a
                        className="button button-lg button-default-outline button-zakaria"
                        href="grid-shop.html"
                      >
                        View all
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
