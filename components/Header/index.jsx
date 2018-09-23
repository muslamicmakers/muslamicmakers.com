import { h } from 'preact';

const Header = ({ text }) => (
  <div class="bg-lightest-blue pv4 pv5-ns lh-copy ph3">
    <div class="mw8 center">
      <div class="tc ph3 ph0-ns">
        <a href="/" class="no-underline">
          <p class="f5 f3-ns b navy mv0 lh-title ttu">Muslamic Makers</p>
        </a>
        <p class="f4 f2-ns b mt3 measure-narrow center" style="color:#30afff;">
          {text}
        </p>
        <div class="social-icons">
          <a href="http://facebook.com/muslamicmakers">
            <i
              class="fa fa-facebook-square fa-2x navy dim"
              aria-hidden="true"
            />
          </a>
          <a href="https://twitter.com/muslamicmakers">
            <i
              class="fa fa-twitter-square fa-2x navy ph2 dim"
              aria-hidden="true"
            />
          </a>
          <a href="http://muslamicmakers.herokuapp.com/?mc_cid=ffa98110a4&mc_eid=7b45ae9314">
            <i class="fa fa-slack fa-2x navy pr2 dim" aria-hidden="true" />
          </a>
          <a href="https://github.com/muslamicmakers">
            <i class="fa fa-github fa-2x navy dim" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
