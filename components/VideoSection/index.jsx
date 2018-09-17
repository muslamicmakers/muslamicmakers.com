import { h, Component } from 'preact';

class VideoSection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this gets the embed to actually show up
    const iframesToDefer = document.querySelectorAll('iframe');
    iframesToDefer.forEach(function(iframe) {
      const dataSrc = iframe.getAttribute('data-src');
      if (dataSrc) iframe.setAttribute('src', dataSrc);
    });
  }

  render() {
    // the order matters here
    // 1st container will get 1st class, 2nd - 2nd, etc.
    const videoContainerClassNames = ['', 'mv4 mv5-ns', 'mv3 mv5-ns'];

    return (
      <section id="past">
        <div className="mw8 center pv2 pv5-ns ph3 tc tl-ns lh-title">
          <h2 className="f5 tracked ttu black">Past events</h2>
          <div className="mt3">
            {this.props.videos.map((video, index) => (
              <div className={videoContainerClassNames[index]}>
                <iframe
                  className="br4 vh-25 vh-50-ns"
                  width="100%"
                  height="500"
                  data-src={video.url}
                  frameborder="0"
                  allowfullscreen
                />
                <p className="f5 f4-ns navy tc dib mt0 mt2-ns">
                  <span class="b">{video.event}, </span>
                  {video.location}
                </p>
              </div>
            ))}

            <a
              class="f4 tc br3 link dim w-100 mv4 ph3 pv3 dib white bg-messenger-blue b dim ttu"
              href="https://www.youtube.com/channel/UC4TAXpFAzmC_6dS4NLAST0w"
            >
              More Videos
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default VideoSection;
