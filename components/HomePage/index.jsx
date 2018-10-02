import { h, Component } from 'preact';
import Loader from 'react-loader-spinner';
import { getData, getEventbrite } from '../../lib/api';

import Nav from '../Nav';
import Header from '../Header';
import EventbriteSection from '../EventbriteSection';
import AboutSection from '../AboutSection';
import VideoSection from '../VideoSection';
import WhoAreWeSection from '../WhoAreWeSection';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

class HomePage extends Component {
  constructor() {
    super();
    this.state = { data: null, eventbrite: null };
  }

  componentDidMount() {
    const sessionData = window.sessionStorage.getItem('data');
    const sessionEventbrite = window.sessionStorage.getItem('eventbriteData');

    if (sessionData && sessionEventbrite) {
      this.setState({ data: JSON.parse(sessionData) });
      this.setState({ eventbrite: JSON.parse(sessionEventbrite) });
    } else {
      getData.then(data => {
        window.sessionStorage.setItem('data', JSON.stringify(data));
        this.setState({ data });
      });

      getEventbrite.then(eventbrite => {
        window.sessionStorage.setItem(
          'eventbriteData',
          JSON.stringify(eventbrite)
        );
        this.setState({ eventbrite });
      });
    }
  }

  render() {
    return this.state.data ? (
      <div>
        <header>
          <Nav />
          <Header {...this.state.data.headerData} />
        </header>

        {this.state.eventbrite ? (
          <EventbriteSection event={this.state.eventbrite} />
        ) : (
          <div className="loader">
            <Loader type="Oval" color="#30AFFF" height="50" width="50" />
          </div>
        )}

        <AboutSection />
        <VideoSection videos={this.state.data.videoData} />
        <WhoAreWeSection bios={this.state.data.bioData} />
        <ContactSection />
        <Footer />
      </div>
    ) : (
      <div className="loader">
        <Loader type="Oval" color="#30AFFF" height="50" width="50" />
      </div>
    );
  }
}

export default HomePage;
