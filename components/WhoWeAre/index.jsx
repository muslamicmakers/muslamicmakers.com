import { h, render, Component } from 'preact';
import getBios from '../../lib/api';

import Card from './Card';

class WhoWeAre extends Component {
  constructor() {
    super();
    this.state = { bios: null };
  }

  componentDidMount() {
    getBios.then(bios => {
      this.setState({ bios });
    });
  }

  render() {
    return this.state.bios ? (
      <div className="mw8 center pv2 pv5-ns ph3 tc tl-ns lh-title">
        <h2 className="f5 tracked ttu navy">Who are we?</h2>
        <div className="mt3 flex-l justify-between">
          {this.state.bios.map(bio => (
            <Card {...bio} />
          ))}
        </div>
      </div>
    ) : null;
  }
}

export default WhoWeAre;
