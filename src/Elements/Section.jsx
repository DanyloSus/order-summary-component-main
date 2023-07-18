import React from "react";

function Section() {
  return (
    <section>
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="tariff">
        <img src="./icon-music.svg" alt="icon music" />
        <div>
          <h4>Annual Plan</h4>
          <p>59.99/year</p>
        </div>
        <a>Change</a>
      </div>

      <button>Proceed to Payment</button>
      <a>Cancel order</a>
    </section>
  );
}

export default Section;
