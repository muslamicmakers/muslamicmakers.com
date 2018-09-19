import { h } from 'preact';

const AboutSection = () => (
  <section id="about" className="chat-window bg-washed-red pv2 pt5-ns pb0-ns">
    <div className="mw8 center pb6 ph3">
      <h2 className="f5 tracked ttu red tc tl-ns w-100">About</h2>
      <div className="bubble-wrapper">
        <div className="bubble Author1 single lh-title f4">
          <p>So what's this all about?</p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author2 first lh-title f4">
          <p>
            Salams!... &#40;don't panic,
            <a
              href="https://en.wikipedia.org/wiki/As-salamu_alaykum"
              target="_blank"
            >
              that means peace
            </a>
            ✌🏽&#41;
          </p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author2 cont lh-title f4">
          <p>It's a monthly meetup for muslims working in tech</p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author2 cont lh-title f4">
          <p>a space to come together to discuss, share and pitch ideas</p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author2 last lh-title f4">
          <p>and non-muslims*</p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author1 single lh-title f4">
          <p>oh nice, that's pretty cool!</p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author2 single lh-title f4">
          <p>thanks 😎</p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author1 first lh-title f4">
          <p>What's the deal with whole muslim thing though?</p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author1 last lh-title f4">
          <p>#diversity and dat yeah?</p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author2 first lh-title f4">
          <p>loool, get me</p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author2 cont lh-title f4">
          <p>
            There’s long been a shortage of minority groups in the tech scene
          </p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author2 cont lh-title f4">
          <p>especially leading the way, y'know?</p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author2 last lh-title f4">
          <p>
            It's a problem and
            <a
              href="https://medium.com/@murtz_abidi/why-we-re-starting-muslamicmakers-e2f204ce4632#.lh8l109wt"
              target="_blank"
            >
              {' '}
              we're trying to do something about it
            </a>
          </p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author1 first lh-title f4">
          <p>yh yh, get you 💪🏾 💪🏾 💪🏾</p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author1 last lh-title f4">
          <p>ngl, bare awks at some of these other meetups</p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author2 single lh-title f4">
          <p>ikr!!</p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author1 single lh-title f4">
          <p>anyway, chat soon yeah?</p>
        </div>
      </div>

      <div className="bubble-wrapper">
        <div className="bubble Author2 first lh-title f4">
          <p>
            safe safe, hit up our{' '}
            <a
              href="http://facebook.us13.list-manage.com/subscribe?u=11b004384b2a9d21dbd6373fe&id=e5066cdc5a"
              target="_blank"
            >
              mailing list
            </a>{' '}
            if you want to stay updated
          </p>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble Author2 last lh-title f4">
          <p>
            or
            <a
              href="http://muslamicmakers.herokuapp.com/?mc_cid=ffa98110a4&mc_eid=7b45ae9314"
              target="_blank"
            >
              {' '}
              our slack channel
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
