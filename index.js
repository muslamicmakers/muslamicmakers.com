import { h, render } from 'preact';
import WhoWeAre from './components/WhoWeAre';

render(
  <div id="foo">
    <WhoWeAre />
  </div>,
  document.getElementById('who-are-we')
);
