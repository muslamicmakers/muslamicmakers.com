import { h, Component } from 'preact';
import getData from '../../lib/api';

import Header from '../Header';
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
    });
  }

  render() {
    return this.state.data ? (
      <div>
        <Header {...this.state.data.headerData} />
        <VideoSection videos={this.state.data.videoData} />
        <WhoAreWeSection bios={this.state.data.bioData} />
      </div>
    ) : null;
  }
}

export default HomePage;
