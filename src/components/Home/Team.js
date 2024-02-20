import React from "react";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";

import i1 from "../../assets/images/team-18-250x233.jpg";
import i2 from "../../assets/images/team-19-250x233.jpg";
import i3 from "../../assets/images/team-20-250x233.jpg";

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
    : ["owl-prev", "owl-next"]
};

class Team extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
    });
  }
  render() {
    return (
      <section className="section section-xxl bg-default">
        <div className="container">
          <h2 className="title-style-8 wow fadeScale">Our Team</h2>
          {}
          <div
            className="owl-style-10 owl-dots-styles-1"
            // className="owl-carousel owl-style-10 owl-dots-styles-1"
            data-items={1}
            data-sm-items={2}
            data-lg-items={3}
            data-margin={30}
            data-dots="true"
            data-mouse-drag="false"
          >
            <OwlCarousel {...options}>
              <article
                className="team-karen wow slideInUp"
                data-wow-delay=".1s"
              >
                <div className="team-karen-header">
                  <a className="team-karen-figure" href="#">
                    <img src={i1} alt width={250} height={233} />
                  </a>
                  <svg
                    x="0px"
                    y="0px"
                    width="330px"
                    height="245px"
                    viewBox="0 0 330 245"
                    enableBackground="new 0 0 330 245"
                  >
                    <path d="M305,0v206.855c0,7.26-5.373,13.145-12,13.145H37c-6.627,0-12-5.885-12-13.145V0H0v245h330V0H305z" />
                  </svg>
                </div>
                <div className="team-karen-body">
                  <h4 className="team-karen-name">
                    <a href="#">Roger Thompson</a>
                  </h4>
                  <div className="team-karen-status">Winemaker</div>
                  <ul className="list-inline team-karen-list-social list-social-2 list-inline-md">
                    <li>
                      <a className="icon mdi mdi-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-twitter" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-google-plus" href="#" />
                    </li>
                  </ul>
                </div>
              </article>
              <article className="team-karen wow slideInUp">
                <div className="team-karen-header">
                  <a className="team-karen-figure" href="#">
                    <img src={i2} alt width={250} height={233} />
                  </a>
                  <svg
                    x="0px"
                    y="0px"
                    width="330px"
                    height="245px"
                    viewBox="0 0 330 245"
                    enableBackground="new 0 0 330 245"
                  >
                    <path d="M305,0v206.855c0,7.26-5.373,13.145-12,13.145H37c-6.627,0-12-5.885-12-13.145V0H0v245h330V0H305z" />
                  </svg>
                </div>
                <div className="team-karen-body">
                  <h4 className="team-karen-name">
                    <a href="#">Rebecca Martinez</a>
                  </h4>
                  <div className="team-karen-status">Cellar Master</div>
                  <ul className="list-inline team-karen-list-social list-social-2 list-inline-md">
                    <li>
                      <a className="icon mdi mdi-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-twitter" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-google-plus" href="#" />
                    </li>
                  </ul>
                </div>
              </article>
              <article
                className="team-karen wow slideInUp"
                data-wow-delay=".1s"
              >
                <div className="team-karen-header">
                  <a className="team-karen-figure" href="#">
                    <img src={i3} alt width={250} height={233} />
                  </a>
                  <svg
                    x="0px"
                    y="0px"
                    width="330px"
                    height="245px"
                    viewBox="0 0 330 245"
                    enableBackground="new 0 0 330 245"
                  >
                    <path d="M305,0v206.855c0,7.26-5.373,13.145-12,13.145H37c-6.627,0-12-5.885-12-13.145V0H0v245h330V0H305z" />
                  </svg>
                </div>
                <div className="team-karen-body">
                  <h4 className="team-karen-name">
                    <a href="#">Mark Zimmer</a>
                  </h4>
                  <div className="team-karen-status">Vineyard Manager</div>
                  <ul className="list-inline team-karen-list-social list-social-2 list-inline-md">
                    <li>
                      <a className="icon mdi mdi-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-twitter" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-google-plus" href="#" />
                    </li>
                  </ul>
                </div>
              </article>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
