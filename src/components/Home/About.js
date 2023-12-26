import React from "react";

import i from "../../assets/images/signature-2-230x78.png";
import b from "../../assets/images/bg-image-2.jpg";

class About extends React.Component {
  render() {
    return (
      <section
        className="section section-xxl section-inset-3 text-sm-left context-dark bg-gray-13 bg-image bg-image-4"
        style={{
          backgroundImage: "url(" + b + ")",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-5 box-about">
              <h2 className="title-style-9 wow fadeInRight">
                The Family of Winemakers
              </h2>
              <p className="wow fadeInRight" data-wow-delay=".1s">
                We think every bottle of wine produced by our winery is a small
                triumph as it brings back the old traditions of winemaking.
              </p>
              <p className="wow fadeInRight" data-wow-delay=".2s">
                Since the late 1970s, our family has farmed some of Napa
                Valley’s finest vineyards. The family history is a constant
                source of inspiration that guides us in winemaking now.
              </p>
              <img src={i} alt width={230} height={78} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
