import React from "react";
import "./styles/OurMission.css";
import BackImg from "./styles/image-mars.webp";

const OurVission = () => {
  return (
    <main
      id="main"
      className="grid-container grid-container--destination flow fs-800"
    >
      <h1 className="numbered-title" style={{ padding: "100px" }}>
        <span aria-hidden="true"></span>
      </h1>

      <picture id="moon-image">
        <source srcSet={BackImg} type="image/webp" />
        <img src="assets/destination/image-mars.png" alt="the moon" />
      </picture>

      <div
        className="tab-list underline-indicators flex"
        role="tablist"
        aria-label="destination list"
      >
        <button
          aria-selected="true"
          role="tab"
          aria-controls="moon-tab"
          className="uppercase ff-sans-cond text-accent letter-spacing-2 fs-800"
          tabIndex="0"
          data-image="moon-image"
        >
          Vision
        </button>
      </div>

      <article
        className="destination-info flow fs-500"
        id="moon-tab"
        tabIndex="0"
        role="tabpanel"
      >
        <p className="fs-600">
          At Satellix , our vision is to be a guiding light in the cosmos of
          information, exploration, and inspiration. We imagine a future where
          the marvels of space are not just distant wonders but integral parts
          of our collective human experience. Through our platform, we aim to
          shape the way people perceive, engage with, and contribute to the
          universe around us.
        </p>

        <div className="destination-meta flex">
          <div>
            <h3 className="destination-info flow fs-500">
              🌌 Connecting Universe
            </h3>
            <br />
            <h3 className="text-accent fs-200 uppercase">
              passive consumption of information
            </h3>
            <div>
              <hr />
              <h3 className="destination-info flow fs-500">
                🌏 Preserving the Planet
              </h3>
              <br />
              <h3 className="text-accent fs-200 uppercase">
                Fostering a sense of interconnectedness
              </h3>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default OurVission;
