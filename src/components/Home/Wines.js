import React from "react";

import i1 from "../../assets/images/product-1-84x210.png";
import i2 from "../../assets/images/product-2-84x210.png";
import i3 from "../../assets/images/product-3-84x210.png";
import i4 from "../../assets/images/product-7-84x210.png";
import i5 from "../../assets/images/product-4-84x210.png";
import i6 from "../../assets/images/product-5-84x210.png";
import i7 from "../../assets/images/product-6-84x210.png";
import i8 from "../../assets/images/product-8-84x210.png";

class Wines extends React.Component {
  render() {
    return (
      <section className="section section-xxl bg-gray-1">
        <div className="container">
          <h2 className="title-style-8 wow fadeScale">Our Wines</h2>
          <div className="isotope-wrap">
            <div className="isotope-filters">
              <button
                className="isotope-filters-toggle button button-sm button-icon button-icon-right button-default-outline"
                data-custom-toggle=".isotope-filters-list"
                data-custom-toggle-disable-on-blur="true"
                data-custom-toggle-hide-on-blur="true"
              >
                <span className="icon mdi mdi-chevron-down" />
                Filter
              </button>
              <div className="isotope-filters-list-wrap">
                <ul className="isotope-filters-list">
                  <li>
                    <a className="active" href="#" data-isotope-filter="*">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#" data-isotope-filter="Type 1">
                      Red
                    </a>
                  </li>
                  <li>
                    <a href="#" data-isotope-filter="Type 2">
                      Rose
                    </a>
                  </li>
                  <li>
                    <a href="#" data-isotope-filter="Type 3">
                      White
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row row-30 row-lg-50 isotope isotope-1">
              <div
                className="col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter="Type 3"
              >
                {}
                <article className="product product-2 wow fadeInRight">
                  <div className="product-body">
                    <div className="product-figure">
                      <img src={i1} alt width={84} height={210} />
                    </div>
                    <h5 className="product-title">
                      <a href="single-product.html">2012 Chardonnay</a>
                    </h5>
                    <div className="product-price-wrap">
                      <div className="product-price">$1000.00</div>
                    </div>
                  </div>
                  <div className="product-button-wrap">
                    <div className="product-button">
                      <a
                        className="button button-gray-14 button-zakaria fl-bigmug-line-search74"
                        href="single-product.html"
                      />
                    </div>
                    <div className="product-button">
                      <a
                        className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                        href="#"
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter="Type 1"
              >
                {}
                <article
                  className="product product-2 wow fadeInRight"
                  data-wow-delay=".1s"
                >
                  <div className="product-body">
                    <div className="product-figure">
                      <img src={i2} alt width={84} height={210} />
                    </div>
                    <h5 className="product-title">
                      <a href="single-product.html">2014 Red Hills</a>
                    </h5>
                    <div className="product-price-wrap">
                      <div className="product-price product-price-old">
                        $1230.00
                      </div>
                      <div className="product-price">$893.00</div>
                    </div>
                  </div>
                  <span className="product-badge product-badge-sale">Sale</span>
                  <div className="product-button-wrap">
                    <div className="product-button">
                      <a
                        className="button button-gray-14 button-zakaria fl-bigmug-line-search74"
                        href="single-product.html"
                      />
                    </div>
                    <div className="product-button">
                      <a
                        className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                        href="#"
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter="Type 2"
              >
                {}
                <article
                  className="product product-2 wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <div className="product-body">
                    <div className="product-figure">
                      <img src={i3} alt width={84} height={210} />
                    </div>
                    <h5 className="product-title">
                      <a href="single-product.html">2015 Pinot Noir</a>
                    </h5>
                    <div className="product-price-wrap">
                      <div className="product-price">$250.00</div>
                    </div>
                  </div>
                  <div className="product-button-wrap">
                    <div className="product-button">
                      <a
                        className="button button-gray-14 button-zakaria fl-bigmug-line-search74"
                        href="single-product.html"
                      />
                    </div>
                    <div className="product-button">
                      <a
                        className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                        href="#"
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter="Type 3"
              >
                {}
                <article
                  className="product product-2 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="product-body">
                    <div className="product-figure">
                      <img src={i4} alt width={84} height={210} />
                    </div>
                    <h5 className="product-title">
                      <a href="single-product.html">2016 Tempranillo</a>
                    </h5>
                    <div className="product-price-wrap">
                      <div className="product-price">$893.00</div>
                    </div>
                  </div>
                  <span className="product-badge product-badge-new">New</span>
                  <div className="product-button-wrap">
                    <div className="product-button">
                      <a
                        className="button button-gray-14 button-zakaria fl-bigmug-line-search74"
                        href="single-product.html"
                      />
                    </div>
                    <div className="product-button">
                      <a
                        className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                        href="#"
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter="Type 2"
              >
                {}
                <article
                  className="product product-2 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="product-body">
                    <div className="product-figure">
                      <img src={i5} alt width={84} height={210} />
                    </div>
                    <h5 className="product-title">
                      <a href="single-product.html">2013 Merlot</a>
                    </h5>
                    <div className="product-price-wrap">
                      <div className="product-price">$1000.00</div>
                    </div>
                  </div>
                  <span className="product-badge product-badge-new">New</span>
                  <div className="product-button-wrap">
                    <div className="product-button">
                      <a
                        className="button button-gray-14 button-zakaria fl-bigmug-line-search74"
                        href="single-product.html"
                      />
                    </div>
                    <div className="product-button">
                      <a
                        className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                        href="#"
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter="Type 1"
              >
                {}
                <article
                  className="product product-2 wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  <div className="product-body">
                    <div className="product-figure">
                      <img src={i6} alt width={84} height={210} />
                    </div>
                    <h5 className="product-title">
                      <a href="single-product.html">2013 Cabernet</a>
                    </h5>
                    <div className="product-price-wrap">
                      <div className="product-price product-price-old">
                        $1230.00
                      </div>
                      <div className="product-price">$893.00</div>
                    </div>
                  </div>
                  <span className="product-badge product-badge-sale">Sale</span>
                  <div className="product-button-wrap">
                    <div className="product-button">
                      <a
                        className="button button-gray-14 button-zakaria fl-bigmug-line-search74"
                        href="single-product.html"
                      />
                    </div>
                    <div className="product-button">
                      <a
                        className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                        href="#"
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter="Type 2"
              >
                {}
                <article
                  className="product product-2 wow fadeInLeft"
                  data-wow-delay=".1s"
                >
                  <div className="product-body">
                    <div className="product-figure">
                      <img src={i7} alt width={84} height={210} />
                    </div>
                    <h5 className="product-title">
                      <a href="single-product.html">2016 Sauvignon</a>
                    </h5>
                    <div className="product-price-wrap">
                      <div className="product-price">$250.00</div>
                    </div>
                  </div>
                  <div className="product-button-wrap">
                    <div className="product-button">
                      <a
                        className="button button-gray-14 button-zakaria fl-bigmug-line-search74"
                        href="single-product.html"
                      />
                    </div>
                    <div className="product-button">
                      <a
                        className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                        href="#"
                      />
                    </div>
                  </div>
                </article>
              </div>
              <div
                className="col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter="Type 1"
              >
                {}
                <article className="product product-2 wow fadeInLeft">
                  <div className="product-body">
                    <div className="product-figure">
                      <img src={i8} alt width={84} height={210} />
                    </div>
                    <h5 className="product-title">
                      <a href="single-product.html">2014 Syrah</a>
                    </h5>
                    <div className="product-price-wrap">
                      <div className="product-price">$893.00</div>
                    </div>
                  </div>
                  <div className="product-button-wrap">
                    <div className="product-button">
                      <a
                        className="button button-gray-14 button-zakaria fl-bigmug-line-search74"
                        href="single-product.html"
                      />
                    </div>
                    <div className="product-button">
                      <a
                        className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                        href="#"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <a
              className="link-classic link-primary wow fadeInUp"
              href="grid-shop.html"
            >
              More Wines
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Wines;
