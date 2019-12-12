import React from "react";

export const About = () =>
  <div
    id="pills-about"
    className="tab-pane fade show card pills-content"
    role="tabpanel"
    aria-labelledby="pills-about-tab">
    <div className="card-header font-style">
      <h3>About</h3>
    </div>
    <div className="card-body">
      <h1>The Project</h1>
      <p>
        With a combined population surpassing 13.7 million people, Dallas-Fort
        Worth and Houston represent North America's 5th and 6th largest
        (respectively) metropolitan areas. The economies of both cities are
        projected to continue growing through at least 2050.
      </p>
      <p>
        The distance between Dallas and Houston, about 240 miles, makes
        high-speed rail an attractive option: far enough to offer a substantial
        advantage over driving while close enough to compete with flying. A
        non-stop flight between Houston's IAH and Dallas-Fort Worth's DFW lasts
        approximately 1 hour and 20 minutes. The Japanese-designed N700i
        Shinkansen trains will require only an additional 10 minutes to
        complete the trip.
      </p>
      <p>
        Texas Central published a Google map on their website with a curve
        representing the entirety of the proposed route. It consists of over
        12,000 coordinates. I downloaded the KML from the map and used Google
        My Maps (https://www.google.com/maps/about/mymaps/) to create my own
        customization. I marked the three Stations: Dallas, Houston, and Brazos
        Valley.
      </p>
      <iframe
        title="route-map"
        src="https://www.google.com/maps/d/u/0/embed?mid=1QTD4BIBAXKTtupuqgLE6XUO7C7lzVzcM&z=7"
        width="640"
        height="480">
      </iframe>
    </div>
    <div className="card-footer">
      <span>
        <i>
          Please visit Texas Central's{" "}
          <a href="https://www.texascentral.com/">
            Official Website.
          </a>
        </i>
      </span>
    </div>
  </div>
