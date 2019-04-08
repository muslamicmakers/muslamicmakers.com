import { h, render } from 'preact';
import { Router } from '@reach/router';

import HomePage from './components/HomePage';
import Manifesto from './components/Manifesto';

const Main = () => (
  <Router>
    <HomePage path="/" />
    <Manifesto path="/manifesto" />
  </Router>
);

render(<Main />, document.body);
