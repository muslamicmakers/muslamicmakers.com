import { h, render } from 'preact';
import Router from 'preact-router';

import HomePage from './components/HomePage';
import Manifesto from './components/Manifesto/index';

const Main = () => (
  <Router>
    <HomePage path="/" />
    <Manifesto path="/manifesto" />
  </Router>
);

render(<Main />, document.body);
