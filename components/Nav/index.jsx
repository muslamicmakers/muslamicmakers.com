import { h } from 'preact';
import { Link } from '@reach/router';

import Manifesto from '../Manifesto/';

const Nav = () => (
  <nav className="dt-ns w-100">
    <div className="dtc v-mid tc ttu pa3">
      <a className="f5 fw4 no-underline navy dib pv2 ph3" href="/#about" native>
        About
      </a>
      <a className="f5 fw4 no-underline navy dib pv2 ph3" href="/#past" native>
        Past Events
      </a>
      <a
        className="f5 fw4 no-underline navy dib pv2 ph3"
        href="/#who-are-we"
        native
      >
        Who are we?
      </a>
      <a
        className="f5 fw4 no-underline navy dib pv2 ph3"
        href="/#contact"
        native
      >
        Contact
      </a>
      <Link to="/manifesto" className="f5 fw4 no-underline navy dib pv2 ph3">
        Manifesto
      </Link>
    </div>
  </nav>
);

export default Nav;
