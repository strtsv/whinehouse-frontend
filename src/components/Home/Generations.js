import React from "react";
import $ from "jquery";

import i from "../../assets/images/bg-image-1.jpg";

class Generations extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="parallax-container section-custom-1"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content section-md context-dark text-center offset-top-1">
          <div className="container">
            <div className="box-info-renee-decor" />
            <div className="box-info-renee-subtitle wow fadeInLeft">
              The Experience of Generations
            </div>
            <h2 className="box-info-renee-title wow fadeScale">
              In Each Bottle
            </h2>
            <p className="box-info-renee-text wow fadeInRight">
              Experience a true "American Dream" at Winehouse and visit the
              first tasting room in the United States established by a former
              European migrant vineyard worker and his family.
            </p>
            <a
              className="link-classic box-info-renee-link wow fadeInUp"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Generations;
