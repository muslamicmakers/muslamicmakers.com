import { h } from 'preact';

import Nav from '../Nav';
import Copy from './Copy';
import Footer from '../Footer';

// TODO - clean up component
const Manifesto = () => {
  document.title = 'Muslamic Makers | Manifesto';

  return (
    <div>
      <header>
        <div className="cover bg-left bg-center-l">
          <div>
            <Nav />

            <div className="bg-lightest-blue pv4 pv5-ns lh-copy ph3">
              <div className="mw8 center">
                <div className="tc ph3 ph0-ns">
                  <a href="/" className="no-underline">
                    <p className="f5 f3-ns b navy mv0 lh-title ttu">
                      Muslamic Makers
                    </p>
                  </a>
                  <p
                    className="f4 f2-ns b mt3 measure-narrow center"
                    style="color:#30afff;"
                  >
                    A monthly meetup bringing Muslim and non-Muslim makers
                    together to discuss, pitch and share ideas
                  </p>
                  <div class="social-icons">
                    <a href="https://www.instagram.com/muslamicmakers">
                      <i
                        class="fa fa-instagram fa-2x navy dim"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="https://twitter.com/muslamicmakers">
                      <i
                        class="fa fa-twitter-square fa-2x navy ph2 dim"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="http://facebook.com/muslamicmakers">
                      <i
                        class="fa fa-facebook-square fa-2x navy pr2 dim"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="https://github.com/muslamicmakers">
                      <i
                        class="fa fa-github fa-2x navy dim"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Copy />
      <Footer />
    </div>
  );
};

export default Manifesto;
