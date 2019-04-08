import { h, render } from 'preact';
import Router from 'preact-router';

import HomePage from './components/HomePage';
import Manifesto from './components/Manifesto';

const Main = () => (
  <Router>
    <HomePage path="/" />
    <Manifesto path="/manifesto.html" />
  </Router>
);

render(<Main />, document.body);
