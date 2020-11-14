import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"

import yt from "../images/yt.svg"
import pp from "../images/pp.svg"
import donate from "../images/donate.svg"
import Countdown from "../components/countdown";

// const Countdown = null;
const youtubeLink = 'https://youtu.be/wBPTD0hYses';
const paypalLink = 'https://paypal.me/pools/c/8tTGDYncdq';
const donateLink = `https://secure.actblue.com/donate/naacp-1`;

const IndexPage = () => (
  <Layout>
    <SEO title="Jackie & Jon's Wedding" />
    {
      Countdown ? <h2>We're getting married!</h2> : <h2>We're Married!</h2>
    }
    <p><span className="date">1:00pm Saturday, November 14th, 2020, in Austin, TX.</span>{Countdown ? <Countdown></Countdown> : ''}</p>
    <section id="links">
      {
        Countdown ?
        <div className="link">
          <a href={youtubeLink}>
            <button><img src={yt} alt="YouTube logo" /><span>Live Stream</span></button>
          </a>
          <p>Stay safe from covid-19 and join us virtually via YouTube Live! Join at 12:45pm to see the ceremony at 1pm, or check back later for a recording.</p>
        </div>
        :
        <div className="link">
          <a href={youtubeLink}>
            <button><img src={yt} alt="YouTube logo" /><span>Recording</span></button>
          </a>
          <p>Here's the recording of our ceremony! We did it! <span role="img" aria-label="tada">🎉</span></p>
        </div>
      }
      <div className="link">
        <a href={paypalLink}>
          <button><img src={pp} alt="PayPal logo" /><span>Wedding Fund</span></button>
        </a>
        <p>If you'd like to pitch in, we're accepting donations to help cover the cost of our small wedding and growing a nest egg.</p>
      </div>
      <div className="link">
        <a href={donateLink} target="_blank" rel="noreferrer">
          <button><img src={donate} alt="Donate to NAACP" /><span>Donate to NAACP</span></button>
        </a>
        <p>In lieu of a gift registry, we'd appreciate if you'd instead donate to the <a href={donateLink}>NAACP</a> and help eliminate racial hatred & descrimination. </p>
      </div>
    </section>
    <section>
      <span className="fyi">Thank you!</span> We appreciate you visiting our site. Feel special we invited you! <span role="img" aria-label="sparkle">✨</span>
    </section>
  </Layout>
)

export default IndexPage
