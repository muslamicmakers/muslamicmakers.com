import { h } from 'preact';

import Card from './Card';

const WhoWeAreSection = ({ bios }) => (
  <section id="who-are-we" className="bg-lightest-blue">
    <div className="mw8 center pv2 pv5-ns ph3 tc tl-ns lh-title">
      <h2 className="f5 tracked ttu navy">Who are we?</h2>
      <div className="mt3 flex-l justify-between">
        {bios.map(bio => (
          <Card {...bio} />
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreSection;
