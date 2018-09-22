import { h } from 'preact';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer class="lh-copy bg-navy">
    <div class="mw8 center silver flex-ns justify-between center tc tl-ns pv4 ph3">
      <p class="ma0 white">&copy; Copyright {currentYear}, Muslamic Makers</p>

      <div class="social-icons dib mt3 mt0-ns">
        <a href="http://facebook.com/muslamicmakers">
          <i
            class="fa fa-facebook-square fa-2x light-blue dim"
            aria-hidden="true"
          />
        </a>
        <a href="https://twitter.com/muslamicmakers">
          <i
            class="fa fa-twitter-square fa-2x light-blue ph3 ph2-ns dim"
            aria-hidden="true"
          />
        </a>
        <a href="http://muslamicmakers.herokuapp.com/?mc_cid=ffa98110a4&mc_eid=7b45ae9314">
          <i
            class="fa fa-slack fa-2x light-blue pr3 pr2-ns dim"
            aria-hidden="true"
          />
        </a>
        <a href="https://github.com/muslamicmakers">
          <i class="fa fa-github fa-2x light-blue dim" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
