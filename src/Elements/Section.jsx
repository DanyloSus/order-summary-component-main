import React from "react";

function Section() {
  return (
    <section>
      <h1 className="anim">Order Summary</h1>
      <p className="anim">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="tariff anim">
        <img src="./icon-music.svg" alt="icon music" />
        <div>
          <h4>Annual Plan</h4>
          <p>59.99/year</p>
        </div>
        <a>Change</a>
      </div>

      <button className="anim">Proceed to Payment</button>
      <a className="anim">Cancel order</a>
    </section>
  );
}

export default Section;
