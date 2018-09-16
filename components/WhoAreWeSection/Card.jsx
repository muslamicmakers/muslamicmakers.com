import { h } from 'preact';

const Card = ({ name, bio, photo, twitter }) => (
  <article className="mw-100 mw6-l mt0-l mh1-l center tc tl-l bg-white br4 pa3 pa4-ns mv3">
    <div className="tc">
      <img className="br-100 h3 w3 dib" src={photo} alt={`Photo of ${name}`} />
      <h3 className="f4 pv3">{name}</h3>
      <a href={`https://twitter.com/${twitter}`} className="db tc">
        <i class="fa fa-twitter fa-2x navy ph2 dim" aria-hidden="true" />
      </a>
    </div>
    <p className="lh-copy measure center f5 tc tl-ns">{bio}</p>
  </article>
);

export default Card;
