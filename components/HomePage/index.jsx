import { h, Component } from 'preact';
import getData from '../../lib/api';

import VideoSection from '../VideoSection';
import WhoAreWeSection from '../WhoAreWeSection';

class HomePage extends Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    getData.then(data => {
      this.setState({ data });
      console.log(data.videoData);
    });
  }

  render() {
    return this.state.data ? (
      <div>
        <VideoSection videos={this.state.data.videoData} />
        <WhoAreWeSection bios={this.state.data.bioData} />
      </div>
    ) : null;
  }
}

export default HomePage;
