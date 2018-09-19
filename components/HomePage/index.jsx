import { h, Component } from 'preact';
import getData from '../../lib/api';

import Header from '../Header';
import AboutSection from '../AboutSection';
import VideoSection from '../VideoSection';
import WhoAreWeSection from '../WhoAreWeSection';
import ContactSection from '../ContactSection';
import Footer from '../footer';

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
        <header>
          <Header {...this.state.data.headerData} />
        </header>
        <AboutSection />
        <VideoSection videos={this.state.data.videoData} />
        <WhoAreWeSection bios={this.state.data.bioData} />
        <ContactSection />
        <Footer />
      </div>
    ) : null;
  }
}

export default HomePage;
