import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <section className="section section-sm section-first bg-default">
        <div className="container">
          <div className="form-style-1">
            <h2 className="title-style-10 wow fadeScale">
              Join Our Newsletter
            </h2>
            <form
              className="rd-form rd-mailform rd-form-text-center"
              data-form-output="form-output-global"
              data-form-type="subscribe"
              method="post"
              action="bat/rd-mailform.php"
            >
              <div className="form-wrap wow fadeInUp">
                <input
                  className="form-input"
                  id="subscribe-form-1-email"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                />
                <label className="form-label" htmlFor="subscribe-form-1-email">
                  Enter Your E-mail
                </label>
              </div>
              <div className="form-button wow fadeInUp" data-wow-delay=".1s">
                <button
                  className="button button-lg button-primary-2 button-zakaria"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="form-style-decor-1" />
            <div className="form-style-decor-2" />
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
