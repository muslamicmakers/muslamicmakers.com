import { h } from 'preact';

const Copy = () => {
  return (
    <section class="lh-copy pv2 pt5-ns pb6-ns ph3">
      <div class="measure center f4-ns">
        <h1 class="f3 f2-ns">Muslamic Makers Manifesto</h1>
        <p>
          Muslamic Makers is a diverse community of Muslims who are making and
          changing things. We hold events and meetups to discuss ideas, build
          creative confidence and help our communities thrive. We’re creating
          spaces for Muslims to be not just ‘included’ but to <b>own</b> their
          work spaces and industries.
        </p>
        <p>
          Put simply there’s poor representation across many sectors, there are
          barriers such as traditional upbringing, lack of opportunity,
          education and resource. But more importantly there are huge gaps in
          confidence, something we have witnessed first hand talking to Muslims
          who mentioned moments of feeling they don’t belong, fear of not being
          accepted etc… With the current narrative built around Muslims it’s not
          hard to understand why. But this is wrong.
        </p>

        <h2 class="f4 f3-ns lh-title mb1">1. Community Space</h2>
        <p>
          Our events and meetups aim to bring Muslims together to discuss, share
          ideas and experiences within an environment that is inclusive.
          Sometimes it can feel difficult being Muslim, inclusion nurtures
          confidence to bring more of yourself to those around you. Our events
          connect a community of changemakers.
        </p>

        <h2 class="f4 f3-ns lh-title mb1">2. Representing</h2>
        <p>
          We’re tired of Muslims being misrepresented. We’re making room for
          those moments where you see someone just like you who inspires you to
          make change. No more generalisations, we want to represent who we are.
        </p>

        <h2 class="f4 f3-ns lh-title mb1">3. Education/Upskilling/Nurturing</h2>
        <p>
          The world changes fast. We help to educate and upskill our community
          to prepare us for the future of work as well as lead the way to create
          change. Whether it’s coding clubs, open talks or workshops we’re
          invested in the upskilling of our community.
        </p>

        <h2 class="f4 f3-ns lh-title mb1">What Success Looks Like</h2>
        <ol class="pl0">
          <li>A thriving community of Muslims creating change</li>
          <li>
            Increased visibility of Muslims in spaces we aren’t traditionally
            seen
          </li>
          <li>Opening up opportunities</li>
          <li>Less alienation and ‘othering’ of Muslims</li>
        </ol>

        <table class="collapse ba br2 b--black-10 pv2 ph3 mt4">
          <tbody>
            <tr class="striped--near-white v-base tracked">
              <th class="pv2 ph3 tl f6 fw6 ttu br b--black-10">What we are</th>
              <th class="tl f6 ttu fw6 pv2 ph3">What we aren't</th>
            </tr>
            <tr class="v-base">
              <td class="pv2 ph3 br b--black-10">
                Ambitious in making an impact in the startup space
              </td>
              <td class="pv2 ph3">
                Doing this for money — we’re like minded people on a mission to
                help change things
              </td>
            </tr>
            <tr class="v-base">
              <td class="pv2 ph3 br b--black-10">
                Eager to tackle “imposter syndrome”
              </td>
              <td class="pv2 ph3">
                An events business — we only hold events with purpose, not to
                hold up a job
              </td>
            </tr>
            <tr class="v-base">
              <td class="pv2 ph3 br b--black-10">
                A place to share, learn and create great things
              </td>
              <td class="pv2 ph3">
                An “uncles in suits eating biryani on a friday” kind of
                networking group
              </td>
            </tr>
            <tr class="v-base">
              <td class="pv2 ph3 br b--black-10">
                Passionate about the Muslim community in England and beyond
              </td>
              <td class="pv2 ph3">A place that conflates Asian with Muslim</td>
            </tr>
            <tr class="v-base">
              <td class="pv2 ph3 br b--black-10">
                Taking control of our narratives
              </td>
              <td class="pv2 ph3">Judgmental</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Copy;
