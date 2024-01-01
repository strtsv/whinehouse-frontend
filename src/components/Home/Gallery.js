import React from "react";

import i1 from "../../assets/images/grid-gallery-1-290x219.jpg";
import i2 from "../../assets/images/grid-gallery-2-290x219.jpg";
import i3 from "../../assets/images/grid-gallery-3-290x219.jpg";
import i4 from "../../assets/images/grid-gallery-4-290x219.jpg";
import i5 from "../../assets/images/grid-gallery-5-290x219.jpg";
import i6 from "../../assets/images/grid-gallery-6-290x219.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <section className="section section-sm section-last bg-default">
        <div className="container">
          <div className="row no-gutters" data-lightgallery="group">
            <div className="col-sm-4 col-lg-3">
              <div className="box-info-rose">
                <h3 className="box-info-rose-title">Founded in</h3>
                <div className="unit flex-column flex-md-row unit-spacing-sm">
                  <div className="unit-left">
                    <span className="box-info-rose-icon mdi mdi-leaf" />
                  </div>
                  <div className="unit-body">
                    <h2 className="box-info-rose-number">1977</h2>
                    <div className="box-info-rose-author">by Mark Zimmer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3">
              <a
                className="thumbnail-minimal"
                href="images/grid-gallery-1-1200x800-original.jpg"
                data-lightgallery="item"
              >
                <img src={i1} alt width={290} height={219} />
              </a>
            </div>
            <div className="col-6 col-sm-4 col-lg-3">
              <a
                className="thumbnail-minimal"
                href="images/grid-gallery-2-1200x800-original.jpg"
                data-lightgallery="item"
              >
                <img src={i2} alt width={290} height={219} />
              </a>
            </div>
            <div className="col-6 col-sm-4 col-lg-3">
              <a
                className="thumbnail-minimal"
                href="images/grid-gallery-3-1200x800-original.jpg"
                data-lightgallery="item"
              >
                <img src={i3} alt width={290} height={219} />
              </a>
            </div>
            <div className="col-6 col-sm-4 col-lg-3">
              <a
                className="thumbnail-minimal"
                href="images/grid-gallery-4-800x800-original.jpg"
                data-lightgallery="item"
              >
                <img src={i4} alt width={290} height={219} />
              </a>
            </div>
            <div className="col-6 col-sm-4 col-lg-3">
              <a
                className="thumbnail-minimal"
                href="images/grid-gallery-10-1200x800-original.jpg"
                data-lightgallery="item"
              >
                <img src={i5} alt width={290} height={219} />
              </a>
            </div>
            <div className="col-6 col-sm-4 col-lg-3">
              <a
                className="thumbnail-minimal"
                href="images/grid-gallery-6-1200x800-original.jpg"
                data-lightgallery="item"
              >
                <img src={i6} alt width={290} height={219} />
              </a>
            </div>
            <div className="col-sm-4 col-lg-3 d-flex align-items-center justify-content-center">
              <div className="box-info-rose-2">
                <p className="box-info-rose-text">About Wine</p>
                <a className="link-classic link-primary" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
