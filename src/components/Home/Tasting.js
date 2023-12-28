import React from "react";

import i from "../../assets/images/image-1-1010x608.jpg";
import b from "../../assets/images/image-1-1010x608.jpg";

class Tasting extends React.Component {
  render() {
    return (
      <section className="section section-xxl bg-default text-sm-left bg-image-5 context-dark section-relative">
        <div className="container">
          <div className="row row-30 justify-content-center justify-content-sm-end">
            <div className="col-12 d-sm-none">
              <img src={i} alt width={1010} height={608} />
            </div>
            <div className="col-sm-6 col-md-5">
              <article className="box-info-beryl">
                <h2 className="box-info-beryl-title wow fadeInRight">
                  Free Wine Tasting
                </h2>
                <div
                  className="box-info-beryl-time wow fadeInRight"
                  data-wow-delay=".1s"
                >
                  <time dateTime="2019-05-05">Saturday, May 5, 2019</time>
                </div>
                <p
                  className="box-info-beryl-text wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  Experience the best wines of Winehouse vineyard at one of our
                  unforgettable monthly events.
                </p>
                <a
                  className="button button-lg button-primary-2 button-zakaria wow fadeInUp"
                  href="contact-us.html"
                >
                  Contact us
                </a>
              </article>
            </div>
          </div>
        </div>
        <div
          className="bg-image bg-image-7"
          style={{
            backgroundImage: "url(" + b + ")",
          }}
        />
        <svg
          className="bg-image-6"
          x="0px"
          y="0px"
          width="1000px"
          height="600px"
          viewBox="0 0 1000 600"
          enableBackground="new 0 0 1000 600"
          preserveAspectRatio="none"
        >
          <pattern
            id="pattern"
            width={400}
            height={400}
            patternUnits="userSpaceOnUse"
          >
            <image
              xlinkHref="images/bg-pattern-3.jpg"
              width={400}
              height={400}
            />
          </pattern>
          <path
            fill="url(#pattern)"
            d="M6,0c0,0-1.475-12.041-4.565,74C-3,197.5,75,305.72,75,420c0,93-41,180-41,180h968V0H6z"
          />
        </svg>
      </section>
    );
  }
}

export default Tasting;
