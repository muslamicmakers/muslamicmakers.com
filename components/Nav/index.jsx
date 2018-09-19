import { h } from 'preact';

const Nav = () => (
  <nav className="dt-ns w-100">
    <div className="dtc v-mid tc ttu pa3">
      <a className="f5 fw4 no-underline navy dib pv2 ph3" href="#about">
        About
      </a>
      <a className="f5 fw4 no-underline navy dib pv2 ph3" href="#past">
        Past Events
      </a>
      <a className="f5 fw4 no-underline navy dib pv2 ph3" href="#who-are-we">
        Who are we?
      </a>
      <a className="f5 fw4 no-underline navy dib pv2 ph3" href="#contact">
        Contact
      </a>
      <a className="f5 fw4 no-underline navy dib pv2 ph3" href="manifesto.html">
        Manifesto
      </a>
    </div>
  </nav>
);

export default Nav;
