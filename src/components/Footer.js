import React from "react";

import i1 from "../assets/images/clients-11-86x76.png"
import i2 from "../assets/images/clients-12-91x87.png"
import i3 from "../assets/images/clients-13-78x88.png"

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-creative context-dark footer-creative-2">
        <div className="footer-classic-body section-lg section-inset-4 context-dark">
          <div className="container">
            <div className="row row-40 justify-content-md-between">
              <div className="col-sm-6 col-md-6">
                {}
                <div
                  className="google-map-container"
                  data-zoom={5}
                  data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                  data-styles="[]"
                >
                  <div className="google-map" />
                  <ul className="google-map-markers">
                    <li
                      data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                      data-description="9870 St Vincent Place, Glasgow"
                      data-icon="images/gmap_marker.png"
                      data-icon-active="images/gmap_marker_active.png"
                    />
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 wow fadeInRight">
                <h3 className="title-style-9">Get In Touch</h3>
                {}
                <form
                  className="rd-form rd-mailform"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="form-wrap">
                    <input
                      className="form-input"
                      id="contact-name"
                      type="text"
                      name="name"
                      data-constraints="@Required"
                    />
                    <label className="form-label" htmlFor="contact-name">
                      Your Name
                    </label>
                  </div>
                  <div className="form-wrap">
                    <input
                      className="form-input"
                      id="contact-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                    <label className="form-label" htmlFor="contact-email">
                      E-mail
                    </label>
                  </div>
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      className="form-input"
                      id="contact-message"
                      name="message"
                      data-constraints="@Required"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    className="button button-lg button-primary-2 button-zakaria"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="row row-40 row-md-50 justify-content-sm-between">
              <div className="col-lg-5 wow fadeInRight">
                <div className="inset-xl-right-55">
                  <h4 className="footer-creative-title">About us</h4>
                  <p>
                    Winehouse Family Winery was established in 1977 as a place
                    for true wine fans and enthusiasts to enjoy the best
                    American wine. We combine lifelong winemaking traditions
                    with new technologies in our numerous wines.
                  </p>
                  <div className="group-xl group-middle d-lg-flex justify-content-lg-between">
                    <a className="clients-modern" href="#">
                      <img
                        src={i1}
                        alt
                        width={86}
                        height={76}
                      />
                    </a>
                    <a className="clients-modern" href="#">
                      <img
                        src={i2}
                        alt
                        width={91}
                        height={87}
                      />
                    </a>
                    <a className="clients-modern" href="#">
                      <img
                        src={i3}
                        alt
                        width={78}
                        height={88}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-lg-3 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <h4 className="footer-creative-title">Contacts</h4>
                <ul className="contacts-holly">
                  <li>
                    <div className="contacts-holly-title">Phone</div>
                    <div className="contacts-holly-text">
                      <a href="tel:#">+1 (844) 123 456 78</a>
                    </div>
                  </li>
                  <li>
                    <div className="contacts-holly-title">Address</div>
                    <div className="contacts-holly-text">
                      <a href="#">
                        523 Sylvan Ave, 5th Floor
                        <br />
                        Mountain View, CA 94041 USA
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contacts-holly-title">E-mail</div>
                    <div className="contacts-holly-text">
                      <a href="mailto:#">info@demolink.org</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="col-sm-5 col-lg-2 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <h4 className="footer-creative-title">Menu</h4>
                <ul className="footer-creative-list">
                  <li>
                    <a href="about-us.html">History</a>
                  </li>
                  <li>
                    <a href="our-team.html">Our Team</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Our wines</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-creative-panel">
          <div className="container">
            <div className="row row-10 align-items-center justify-content-sm-between">
              <div className="col-sm-auto">
                <p className="rights">
                  <span>©  </span>
                  <span className="copyright-year" />
                  <span> </span>
                  <span>Winehouse</span>
                  <span>.  All rights reserved.</span>
                  <span> </span>
                  <a href="privacy-policy.html">Privacy Policy</a>
                  <span>.</span>
                </p>
              </div>
              <div className="col-sm-auto">
                <ul className="list-inline list-social list-inline-sm">
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
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
