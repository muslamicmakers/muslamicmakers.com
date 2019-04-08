import { h, render } from 'preact';
import { Router, Redirect } from '@reach/router';

import HomePage from './components/HomePage';
import Manifesto from './components/Manifesto';

const NotFound = () => <div>404 - Sorry, nothing here :(</div>;

const Main = () => (
  <Router>
    <HomePage path="/" />
    <Redirect from="/manifesto.html" to="/manifesto" noThrow />
    <Manifesto path="/manifesto" />
    <NotFound default />
  </Router>
);

render(<Main />, document.body);
