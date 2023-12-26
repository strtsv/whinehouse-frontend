import React from "react";
import $ from "jquery";

import i from "../../assets/images/parallax-5.jpg";

class Counter extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="parallax-container"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content section-xxl context-dark">
          <div className="container">
            <div className="row row-30 justify-content-center">
              <div className="col-6 col-sm-3">
                <div className="counter-modern">
                  <h2 className="counter-modern-number">
                    <span className="counter">245</span>
                  </h2>
                  <div className="counter-modern-decor" />
                  <h5 className="counter-modern-title">
                    Wine
                    <br className="d-none d-sm-block" /> varieties
                  </h5>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="counter-modern">
                  <h2 className="counter-modern-number">
                    <span className="counter">382</span>
                  </h2>
                  <div className="counter-modern-decor" />
                  <h5 className="counter-modern-title">
                    Bottles
                    <br className="d-none d-sm-block" /> sold monthly
                  </h5>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="counter-modern">
                  <h2 className="counter-modern-number">
                    <span className="counter">1267</span>
                  </h2>
                  <div className="counter-modern-decor" />
                  <h5 className="counter-modern-title">
                    Sq.m. of
                    <br className="d-none d-sm-block" /> vineyard area
                  </h5>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="counter-modern">
                  <h2 className="counter-modern-number">
                    <span className="counter">474</span>
                  </h2>
                  <div className="counter-modern-decor" />
                  <h5 className="counter-modern-title">
                    Industry
                    <br className="d-none d-sm-block" /> awards won
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Counter;
