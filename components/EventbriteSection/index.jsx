import { h } from 'preact';
import classNames from 'classnames';

const EventbriteSection = ({ event }) => {
  const detailsContainerClasses = classNames('flex-ns', 'justify-between', {
    'details-container-ended': event.ended
  });
  return (
    <section className="lh-copy pv2 pt5-ns pb6-ns tc tl-ns">
      <div className="mw8 center ph3 relative">
        <h2 className="f5 tracked ttu black">Next event</h2>

        {event.ended && (
          <div class="event-ended">
            <h3>
              Event ended <span className="emoji">😢</span>
            </h3>
          </div>
        )}

        <div className={detailsContainerClasses}>
          <div className="measure-narrow-ns mr5-ns center">
            <h3 className="f3 ma0 mb3">
              <a className="navy" href={event.url}>
                {event.title}
              </a>
            </h3>

            <p className="b ma0 mr1 mb1 white bg-orange ttu tracked f6 dib pa2">
              {event.start}
            </p>
            <a
              className="b ma0 white bg-messenger-blue ttu tracked f6 dib pa2 no-underline"
              href={event.venue.googleMapsUrl}
            >
              {event.venue.name}
            </a>

            <div className="f5 f4-ns mv4 navy tl ph2 ph0-ns event-description">
              {event.description}
            </div>

            <a
              className="f4 tc br3 link dim w-100 mt1 mt4-ns ph3 pv3 dib white bg-messenger-blue b"
              href={event.url}
            >
              Get tickets
            </a>
            {/* <!--<a className="f5 f4-ns tc br3 link w-100 mt1 mt4-ns ph3 pv3 dib white bg-gray b disabled">SOLD OUT&nbsp;&nbsp;:(</a>--> */}
          </div>

          <div className="map-container" style="flex-grow: 1;">
            <iframe
              className="map-iframe br4-ns shadow-2-ns mt3 mt0-ns"
              src={event.venue.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventbriteSection;
