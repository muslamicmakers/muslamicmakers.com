import { h } from 'preact';

const ContactSection = () => (
  <section id="contact">
    <div className="mw8 center lh-copy tc tl-ns pv2 pv4-ns ph3">
      <div className="cf black">
        <div className="fl w-100 w-50-ns pr4-ns f5 f4-ns">
          <h2 className="f5 tracked ttu ma0-ns">Get in touch</h2>
          <p className="mv0 mv3-ns">
            We're always looking to collaborate with tech companies to host
            events. If you're up for hosting or just want to talk, drop us a
            line:
          </p>
          <h3>
            <a href="mailto:muslamicmakers@gmail.com" className="navy f5 f4-ns">
              muslamicmakers@gmail.com
            </a>
          </h3>
        </div>

        <div className="fl w-100 w-50-ns pr2-ns pl4-ns mt5 mv0-ns">
          <h2 className="f5 tracked ttu ma0 mb3">Stay updated</h2>

          {/* <!-- Begin MailChimp Signup Form --> */}
          <div id="mc_embed_signup">
            <form
              action="http://facebook.us13.list-manage.com/subscribe/post?u=11b004384b2a9d21dbd6373fe&amp;id=e5066cdc5a"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <div className="email-form pv3 flex flex-column flex-row-ns justify-between items-center-ns">
                  <div className="mc-field-group" style="flex-grow: 1;">
                    <label className="f5" for="mce-EMAIL">
                      Email Address{' '}
                    </label>{' '}
                    <br />
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      className="required email br0 w-100 w-90-ns"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style="display:none"
                    />
                    <div
                      className="response"
                      id="mce-success-response"
                      style="display:none"
                    />
                  </div>
                  {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                  <div
                    style="position: absolute; left: -5000px;"
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_11b004384b2a9d21dbd6373fe_e5066cdc5a"
                      tabindex="-1"
                      value=""
                    />
                  </div>

                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="ba0 bg-messenger-blue white pv0 ph4 br3 b ttu f5 b--none mt3 mt0-ns dim"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* <!--End mc_embed_signup--> */}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
